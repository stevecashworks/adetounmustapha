import styled from "styled-components";
import earth from '../../assets/earth.jpg'
import responsive from "../../responsive";
import EarthModel from "./contactModel.tsx"
import {useEffect,useState} from 'react'
import {motion} from "framer-motion"
const ContactContainer=styled.div`
width:100vw;
height:100vh;
position:relative;
color:white;
${responsive("tablet",{height:"700px"})}

`
const EarthBackground=styled.img`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
z-index:-1;
`
const Content=styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
z-index:1;
background-color:rgb(0,0,0,0.7);
`   
const ContactMidSection= styled.div`
display:flex;
margin:120px auto;
justify-content:center;
gap:30px;
align-items:center;
${responsive("tablet",{flex_direction:"column-reverse",margin:"50px auto"})}

`
const FormContainer=styled.form`
display:flex;
flex-direction:column;
gap:25px;



`
const ModelContainer=styled.div`
`
const Text=styled.h2`
text-align:center;
margin:30px auto;
font-size:35px;
text-transform:capitalize;
transition:all 0.5s ease;
${responsive("tablet",{font_size:"28px", width:"80%"})}
`
const Span=styled.span`
color:blueviolet;
`
const Input=styled.input`
width:250px;
height:35px;
border-radius:20px;
border:1px solid white;
background-color:transparent;
color:white;
padding-left:20px;
`
const TextArea=styled.textarea`
width:250px;
height:65px;
border-radius:10px;
border:1px solid white;
background-color:transparent;
color:white;
padding-left:20px;
font-size:18px;
`
const Button=styled.button`
height:35px;
width:300px;
border-radius:15px;
background-color:blueviolet;
color:white;
margin:20px auto;
display:flex;
align-items:center;
justify-content:center;
${responsive("mobile",{width:"200px"})}
`
const Scroll=styled.a`
`

const ScrollButton=styled.div`
height:40px;
width:20px;
border:1px solid white;
display:block;
border-radius:10px;
display:flex;
justify-content:center;
margin:20px auto;
`
export const ScrollAnimation=({pageName})=>{
    return(
<Scroll href={`#${pageName}`}>
                <ScrollButton>
                    <motion.div
                    style={{width:"7px",height:"7px",backgroundColor:"rgb(255,255,255,0.4)",borderRadius:"50%"}}
                    animate={{y:[0,25,0]}}
                    transition={{
                        duration:1.5,
                        repeat:Infinity,
                        repeatType:"loop"
                    }}
                    
                    >

                    </motion.div>

                </ScrollButton>
                 </Scroll>
    )
}
const inputDetails=["Your name or Company name","Please, tell us how you found us"]
const Contact=()=>{
    const staticText1="Let's make "
    const  purpleText="Some magic "
    const staticText2="together."
    const [text1,setText1]=useState(0)
    const [text2,setText2]=useState(0)
    const [text3,setText3]=useState(0)


    useEffect(()=>{
        const clearText=()=>{
            setText1(0)
            setText2(0)
            setText3(0)
        }
        const addText= ()=>{
    const text1HasLoaded=text1>=staticText1.length
    const text2HasLoaded=text2>=purpleText.length
    const text3HasLoaded=text3>=staticText2.length
    
    if(!text1HasLoaded){

        setText1(text1+1)
    }
    if(text1HasLoaded&&(!text2HasLoaded)){
        setText2(text2+1)
    }
    if(text2HasLoaded&&(!text3HasLoaded)){
        setText3(text3+1)
    }
    if(text1HasLoaded&&text2HasLoaded&&text3HasLoaded){
        
        
    }
 }
 const timeOut= setTimeout(clearText,10000)
    const newInterval=    setInterval(addText,40)
        return ()=>{
            clearInterval(newInterval)
            clearTimeout(timeOut)
        }
    })

    return(
        <ContactContainer id={"contact"}>
            <EarthBackground src={earth}/>
            <Content>
                <Text>{staticText1.substring(0,text1)}<Span>{purpleText.substring(0,text2)}</Span>{staticText2.substring(0,text3)}</Text>
            
                <ContactMidSection>


                <FormContainer>
                    {inputDetails.map(info=><Input placeholder={info}/>)}
                    <TextArea placeholder="How can we serve you"/>
                </FormContainer>

                <ModelContainer>
                    <EarthModel/>
                </ModelContainer>
            </ContactMidSection>
            <Button>Reach out</Button>
            <ScrollAnimation pageName="skills"/>
            </Content>
            
        </ContactContainer>
    )
}

export default Contact