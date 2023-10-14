import styled from "styled-components";
import {BsFacebook,BsTwitter,BsInstagram,BsWhatsapp, BsLinkedin} from "react-icons/bs"
import responsive from "../../responsive";

const Container=styled.div`
width:100vw;
background-color:rgb(0,0,0,0.7);
color:white;
`
const LogoContainer=styled.div`
padding-top:30px;
display:flex;
width:50px;
height:50px;
align-items:center;
color:${props=>props.cl};
`
const SocialsCon=styled.div`
display:flex;
width:30%;
margin:10px auto;
justify-content:space-around;
${responsive("tablet",{width:"80%"})}
`
const Tribute=styled.div`
font-size:12px;
opacity:0.2;
`
const socials=[
    {
        site:"facebook",
        icon:BsFacebook,
        cl:"blue"
    },
    {
        site:"twitter",
        icon:BsTwitter,
        cl:"lightblue"
    },
    {
        site:"instagram",
        icon:BsInstagram,
        cl:"lightblue"
    },
    {
        site:"whatsapp",
        icon:BsWhatsapp,
        cl:"lightblue"
    },
    {
        site:"linkedin",
        icon:BsLinkedin,
        cl:"lightblue"
    },
]

const Skills=()=>{
    return(
        <Container id="skills">
            <SocialsCon>
                {socials.map(
                    item=>{
                        const Icon=item.icon
                        return(
                            <LogoContainer><Icon/></LogoContainer>
                        )
                    }
                )}
            </SocialsCon>
            <Tribute>Built by : Metaverse LLC</Tribute>
            

        </Container>
    )
}
export default Skills
