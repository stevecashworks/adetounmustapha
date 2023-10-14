import  {useProgress,Html} from "@react-three/drei"
import styled from "styled-components"
const ProgressBar=styled.div`
position:relative;
width:200px;
height:35px;
background-color:red;
z-index:1;
&::before{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:green;
    content:${props=>props.progress.toString()};
    text-align:center;
    color:white;
    z-index(2);
    transition:all 0.5s ease;
   transform: scaleX(${props=>props.progress / 100});
transform-origin:left;
}
`
const CanvasLoader=()=>{
    const progress=useProgress()
return(
    <Html>
        <ProgressBar progress={progress}/>

    </Html>
)

}
export default CanvasLoader