import { useGLTF,Preload,OrbitControls } from "@react-three/drei";
import {Suspense} from "react"
import CanvasLoader from "./canvasLoader";
import { Canvas } from "@react-three/fiber";
const Earth=()=>{
    const  planet=useGLTF('./planet/scene.gltf')
    return(
        <mesh>
            <hemisphereLight intensity={1}/>
            <pointLight intensity={1}/>
            <primitive
            object={planet.scene}
            scale={5}
            />
        </mesh>

    )
}
const EarthCanvas=()=>{
    return(
        <Canvas
        frameloop="demand"
        gl={{preserveDrawingBuffer:true}}
        camera={{position:[20,3,5],fov:25}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls 
                enableZoom={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                />
                <Earth/>

            </Suspense>

        </Canvas>
    )
}
export default EarthCanvas