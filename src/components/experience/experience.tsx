import styled from "styled-components"
import shell from "../../assets/shell.png"
import imperial from "../../assets/imperial.jpg"
import { ScrollAnimation } from "../Contact/contact"
import responsive from "../../responsive"

const ExperienceContainer=styled.div`
width:100vw;
color:white;
padding-top:80px;
background-color:rgb(0,0,0,0.7);
padding-left:10px;
height:800px;
${responsive("tablet",{height:"1400px"})}

`
const  Heading=styled.h3`
text-align:center;

`
const LeftHeading=styled.h3`
margin:30px 50px;
color:blueviolet;
font-size:35px;
font-weight:600;
${responsive("tablet",{margin:"30px 30px"})};
`
const AboutText=styled.p`
width:90%;
margin:30px 50px;
${responsive("tablet",{margin:"30px 30px"})};

`
const ExperienceCon=styled.div`
width:95%;
margin:30px auto;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
gap:30px;
padding-top:40px;
${responsive("tablet",{flex_direction:"column",align_items:"center",width:"100%"})}
`
const ExperienceCard=styled.div`
width:500px;
height:250px;
border-radius:20px;
background-color:rgb(54,69,79,0.2);
${responsive("tablet",{width:"300px"})}
`
const CompanyName=styled.p`
color:white;
text-align:center;
text-transform:capitalize;
font-weight:600;
`
const CompanyLogo=styled.img`
display:block;
margin:10px auto 0px auto;

width:70px;
height:70px;
`
const DetailText=styled.p`
font-weight:600;
padding-left:20px;
text-transform:capitalize;
font-size:16px;
display:flex;
width:100%;
justify-content:space-around;
flex-wrap:wrap;
flex-direction:column;

`
const Purple=styled.span`
color:blueviolet; 
font-size:14px;

`

const aboutData=[
    "A multi-skilled professional with over 29 years’ experience of Health, Safety and Environment (HSE) management, Technical Planning, Petroleum Economics, Asset Commercial, Continuous Improvement, Business Transformation and Leadership experience in the energy industry where my work supports United Nations Sustainable Development Goal 7 (affordable and clean energy). A lead facilitator for leadership strategy sessions, performance reviews and team building programs with international experience. Have demonstrated effectiveness at driving change agendas with a track-record of integrating people and processes to improve the bottom line. Trained Lean Six Sigma Black Belt, certified Lean Practitioner, Scrum Fundamentals and Agile Master certified.",
]
const experienceData=[
    {
        img:shell,
        w:"100px",
        companyName:"Shell",
        duration:"29 years and 8 months",
        position:"Head Continous improvement/ Lean implementation, Shell Nigeria"
    },
    {
        img:imperial,
        companyName:"Imperial college london ",
        position:"Research Associate (honorary)",
        duration:"13 years and 6 months"
    }
]
const Experience=()=>{
    return(
        <ExperienceContainer id="experience">
            {/* <Heading>More about me</Heading> */}
            <LeftHeading>About.</LeftHeading>
            {
                aboutData.map(item=><AboutText>{item}</AboutText>)
            }
            <Heading>Work Experience</Heading>
            <ExperienceCon>

                {experienceData.map(detail=>{
                    return(
                        <ExperienceCard>
                            
                            <CompanyLogo w={detail.w} src={detail.img}/>
                            <CompanyName>{detail.companyName}</CompanyName>
                        <div style={{position:"relative", top:"30px"}}>

                        <DetailText><p>Position:</p><Purple> { detail.position}</Purple></DetailText>
                        <DetailText style={{opacity:"0.5"}}>({detail.duration})</DetailText>
                        </div>
                        </ExperienceCard>
                    )
                })}
            </ExperienceCon>
            <ScrollAnimation pageName={"contact"}/>

        </ExperienceContainer>
    )
}
export default Experience