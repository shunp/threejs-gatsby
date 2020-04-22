import React, { useEffect, createRef } from 'react'
import { css } from '@emotion/core'
import * as THREE from 'three'

const vert = `
attribute float size;
attribute vec3 customColor;

varying vec3 vColor;

void main() {

  vColor = customColor;

  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

  gl_PointSize = size * ( 300.0 / -mvPosition.z );

  gl_Position = projectionMatrix * mvPosition;

}`

const frag = `
uniform vec3 color;
uniform sampler2D pointTexture;

varying vec3 vColor;

void main() {

  gl_FragColor = vec4( color * vColor, 1.0 );
  gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

}
`
const createDefaultCamera = () => {
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.z = 300
  return camera
}

const createDefaultRenderer = (mount: React.RefObject<HTMLInputElement>) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.autoClear = true
  if (mount.current) {
    mount.current.appendChild(renderer.domElement)
  }
  return renderer
}

const AttributePointScene = () => {
  const mount = createRef<HTMLInputElement>()
  useEffect(() => {
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight
    const scene = new THREE.Scene()
    const camera = createDefaultCamera()
    const amount = 100000
    const radius = 200

    const positions = new Float32Array(amount * 3)
    const colors = new Float32Array(amount * 3)
    const sizes = new Float32Array(amount)

    const vertex = new THREE.Vector3()
    const color = new THREE.Color(0xffffff)
    for (let i = 0; i < amount; i++) {
      vertex.x = (Math.random() * 2 - 1) * radius
      vertex.y = (Math.random() * 2 - 1) * radius
      vertex.z = (Math.random() * 2 - 1) * radius
      vertex.toArray(positions, i * 3)

      if (vertex.x < 0) {
        color.setHSL(0.5 + 0.1 * (i / amount), 0.7, 0.5)
      } else {
        color.setHSL(0.0 + 0.1 * (i / amount), 0.9, 0.5)
      }

      color.toArray(colors, i * 3)

      sizes[i] = 10
    }
    const renderer = createDefaultRenderer(mount)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
        pointTexture: { value: new THREE.TextureLoader().load('./textures/spark1.png') }
      },
      vertexShader: vert,
      fragmentShader: frag,

      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true
    })
    const sphere = new THREE.Points(geometry, material)
    scene.add(sphere)
    const render = () => {
      const time = Date.now() * 0.005

      sphere.rotation.z = 0.01 * time

      const { geometry } = sphere
      const { attributes } = geometry

      for (let i = 0; i < attributes.size.array.length; i++) {
        attributes.size.array[i] = 14 + 13 * Math.sin(0.1 * i + time)
      }

      attributes.size.needsUpdate = true

      renderer.render(scene, camera)
    }
    const animate = () => {
      requestAnimationFrame(animate)
      render()
    }
    animate()
  }, [])
  return <div css={css``} ref={mount} />
}
export default AttributePointScene
