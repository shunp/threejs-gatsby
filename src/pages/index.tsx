import React, { useEffect, createRef } from 'react'
import { Link } from 'gatsby'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
// Custom Scene
// import BaseThreeScene from '../components/three/BaseThreeScene'
import MultiThreeScene from '../components/three/MultiThreeScene'
// import GradientScene from '../components/three/GradientScene'
// import PlaneLayerScene from '../components/three/PlaneLayerScene'
import PeriodicTableScene from '../components/three/PeriodicTableScene'
import PointDynamicScene from '../components/three/PointDynamicScene2'
import ObjLoaderScene from '../components/three/ObjLoaderScene'
import GLSLScene from '../components/three/GLSLScene'
import BufferLineScene from '../components/three/BufferLineScene'
import ZoomScene from '../components/three/ZoomScene'
import BoxAnimationScene from '../components/three/BoxAnimationScene'
import BlockchainAnimationScene from '../components/three/BlockchainAnimationScene'
import MLAnimationScene from '../components/three/MLAnimationScene'
import TownScene from '../components/three/TownScene'
import PointLightScene from '../components/three/PointLightScene'
import TessellationScene from '../components/three/TessellationScene'
import AttributeLineScene from '../components/three/AttributeLineScene'
import EffectsAnaglyphScene from '../components/three/EffectsAnaglyphScene'
import WebGLShaderScene from '../components/three/WebGLShaderScene'
import WebGLLineScene from '../components/three/WebGLLineScene'
import InstancingScatterScene from '../components/three/InstancingScatterScene'
import OceanScene from '../components/three/OceanScene'
import GeometryHierarchyScene from '../components/three/GeometryHierarchyScene'
import DrawRangeScene from '../components/three/DrawRangeScene'
import CrossfadeScene from '../components/three/CrossfadeScene'
import AttributePoint2Scene from '../components/three/AttributePoint2Scene'
import CSS3DSpriteScene from '../components/three/CSS3DSpriteScene'
import RollercoasterScene from '../components/three/RollercoasterScene'
import AnimationGroupsScene from '../components/three/AnimationGroupsScene'
import SkinningMorphScene from '../components/three/SkinningMorphScene'

const IndexPage = () => {
  return (
    <SkinningMorphScene />
    // <IndexLayout>
    //   <PeriodicTableScene />
    //   <Page>
    //     <Container>
    //       <h1>Hi people</h1>
    //       <p>Welcome to your new Gatsby site.</p>
    //       <p>Now go build something great.</p>
    //       <Link to="/page-2/">Go to page 2</Link>
    //     </Container>
    //   </Page>
    // </IndexLayout>
  )
}

export default IndexPage
