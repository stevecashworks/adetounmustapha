import styled from "styled-components"
import {HiMenuAlt1} from "react-icons/hi"
import responsive from "../../../responsive.ts"
import {useState} from "react"
import {AiOutlineClose} from "react-icons/ai"
import logo from "../../../assets/adetoun logo.png"
import "./header.css"
const HeaderContainer=styled.div`
display:flex;
align-items:center;
width:100vw;
padding:10px 30px; 
justify-content:space-between;
box-sizing:border-box;
position:relative;
height:70px;

`
const ContactBtn=styled.button`
background-color:darkblue;
font-weight:bold;
width:150px;
height:40px;
background-color:transparent;
border:1px solid lightblue;
border-radius:20px;
${responsive("tablet",{display:"none"})}

`
const Logo=styled.div`
font-weight:600;
font-size:25px;
 color:rgb(131, 11, 243);
 ${responsive("mobile",{font_size:"10px"})}
 display:flex;
 flex-direction:column;


`
const V= styled.span`
color:white;
font-size:8px;
margin-top:5px;
`
const Nav=styled.nav`
display:flex;
height:30px;
justify-content:center;
gap:15px;
${responsive("tablet",{display:"none"})}

`
const NavItem=styled.a`
color:white;
text-decoration:none;
`
const MenuIcon=styled.div`
display:none;
${responsive("tablet",{display:"block"})}
`
const Menu=styled.div`
background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
padding-bottom:10px;
padding-top:10px;
width:200px;
right:0px;
border-radius:20px;
top:0px;
position:absolute;
z-index:2;
display:flex;
align-items:center;
gap:10px;
flex-direction:column;
`
const LogoImg=styled.img`
height:30px;
width:30px;
margin:0 auto;
`
const NavLinks=[
    {title:"About me",path:"#hero"},
    {title:"Skills",path:"#skills"},
    {title:"Projects",path:"#projects"},
    {title:"Experience",path:"#experience"},
    {title:"Contact",path:"#contact"},
    

]
const Header=()=>{
    const [menuOpen,setMenuOpen]=useState(false)
    const MenuLogo=menuOpen?AiOutlineClose:HiMenuAlt1
return(
<>
    <HeaderContainer>
<Logo id="logo">
    <LogoImg src ={logo} />
{/* <V style={{color:"yello"}}>🏐</V> Ste
            <V>v</V>
            eca<V>s</V>hworks */}
            <V>Innovating for better health</V>
            </Logo>

            <Nav>
                {NavLinks.map(item=><NavItem href={item.path}>{item.title}</NavItem>)}

            </Nav>
            <ContactBtn>Let's Connect</ContactBtn>
            <MenuIcon>
                <MenuLogo onClick={()=>{setMenuOpen(!menuOpen)}} style={{fontSize:"23px", color:"white"}}/>
            </MenuIcon >
    </HeaderContainer>
    {
     menuOpen&&(
        <div style={{position:"relative"}}>

        <Menu>
        {NavLinks.map(item=><NavItem href={item.path}>{item.title}</NavItem>)}

        </Menu>
</div>
     )   
    }
   
</>
) 
}
export default Header