import styled from "styled-components"
import  background from "../../assets/glowing.jpg"
import Header from "./header/header.tsx"
import me from "../../assets/adetoun.png"

import { ScrollAnimation } from "../Contact/contact.tsx"

import "./hero.css"
import responsive from "../../responsive.ts"
const HeroSection=styled.div`
width:100vw;
overflow-x:hidden;
height:100vh;
position:relative;
margin:0px;
${responsive("tablet",{height:"800px"})}
`
const BackgroundImg=styled.img`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:-1;
filter:blur(10px);

`
const  Content=styled.div`
width:100%;
height:100%;
position:absolute;
z-index:1;
background-color:rgb(0,0,0,0.7);
`
const MidHeroSection=styled.div`
width:80%;
height:400px;
align-items:center;
display:flex;
margin:60px auto 20px auto;
flex-direction:row-reverse;
align-items:center;
justify-content:space-around;
${responsive("tablet",{
    flex_direction:"column-reverse",
    margin:"40px auto 20px auto",
     align_items:"center",
    height:"fit-content"
    })}

`
const SmallText=styled.div`
font-size:18px;
opacity:0.5;
margin-top:20px;
${responsive("tablet",{background_color:"rgb(0,0,0,0.5)"})}
`
const Text=styled.div`
font-size:36px;
 color:white;
 font-weight:700;
 margin-left:30px;
 width:400px;
 background-color:rgb(0,0,0,0.2);
 text-transform:capitalize;
 ${responsive("mobile",{font_size:"24px",height:"200px",text_align:"center",width:"300px",background_color:"rgb(0,0,0,0.3)"})}
`
const PurpleText=styled.span`
color:blueviolet;
`
const Left=styled.div`

display:flex;
position:relative;
transform:scale(0.7) translateY(-100px) ;
${responsive("tablet",{transform:"scale(0.9) translateY(0)"})}


`
const Line=styled.div`
width:2px;
height:300px;
background-color:white;

`
const Right= styled.div`
transform:translateY(100px)
${responsive("tablet",{transform:"translateY(0)"})}

`
const MyImageBackground=styled.div`
background-color:blueviolet;
margin:20px auto;
padding: 5px;
opacity:0.9;
border-radius:15px;
`
const  Steve=styled.img`
width:300px;
height:300px;
border-radius:50%;
object-fit:cover;
${responsive("tablet",{
    width:"200px",
    height:"200px",
    margin_bottom:"30px"
})}

`

const Hero=()=>{
return(
    <HeroSection>
        <BackgroundImg src={background}/>
    <Content>

        <Header/>
        <MidHeroSection>
            <Left>
            <Line/>
            <Text>
                I am <PurpleText>Adetoun </PurpleText> Mustapha
                <br /> 
                A reknowned and seasoned  <PurpleText> Environmental </PurpleText>  epidermologist
                {/* <SmallText id="fadingText">I'm just some dude who enjoys coding</SmallText> */}
            </Text>

            </Left>
            <Right>
                <MyImageBackground id="myImgBg">
                    <Steve src={me} alt="Your favourite dev" />

                </MyImageBackground>

            </Right>
        </MidHeroSection>
        <ScrollAnimation style={{position:"relative", top:"30px"}} pageName={"experience"}/>
    </Content>
    </HeroSection>
)
}
export default Hero