import styled from "styled-components";
export const Head = styled.div`
display: inline-block;
width: 100%;
box-sizing: border-box;
`
export const MakeCenter = styled.div`
margin-left: auto;
margin-right: auto;
width: 60%;
`
export const Img = styled.img`
src: url(${props => props.src});
width: 70px;
height:70px;
float: left;
`
export const GlobalBox = styled.div`
text-align: center;
text-padding-bottom: 20px;
border: 1px outset white;
-webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61); 
box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61);
border-radius: 7px 7px 7px 7px;
`
export const GlobalInfo = styled.div`
float: left;
padding 5px;
`
export const GlobalInfoBtn = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
padding: 15px;
font-size: 250%;
color: #00008B;
`
export const Search = styled.input`
float: left;
margin-top: 5px;
border: 1px solid #1E90FF;
font-size: 18px;
padding: 10px;
width: 200px;
height: 20px;
background: white;
-webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61); 
box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61);
border-radius: 7px 7px 7px 7px;
::placeholder {
  color: grey;
}
`
export const ItemWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
border: 1px black;
border-radius: 6px;
cursor: pointer;
`
export const BoxNum = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
width: 5%;
height: 20px;
text-align: center;
padding: 5px;
margin-top: 5px;
margin-bottom: 5px;
border: 1px outset white;
border-bottom: 1px inset rgba(28,110,164,0.27);
border-left: 1px inset rgba(28,110,164,0.27);
border-radius: 0px 0px 0px 7px;
background-color: white;
font-weight: bold;
`
export const BoxName = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
width: 75%;
height: 20px;
text-align: left;
padding: 5px;
margin-top: 5px;
margin-bottom: 5px;
padding-left: 15px;
border: 1px outset white;
border-bottom: 1px inset rgba(28,110,164,0.27);
border-right: 1px inset rgba(28,110,164,0.27);
border-left: 1px inset rgba(28,110,164,0.27);
background-color: white;
font-weight: bold;
`
export const BoxTotal = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
width: 15%;
height: 20px;
text-align: left;
padding: 5px;
margin-top: 5px;
border: 1px outset white;
border-bottom: 1px inset rgba(28,110,164,0.27);
border-radius: 0px 0px 7px 0px;
background-color: white;
font-weight: bold;
`
export const HeaderNum = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
width: 5%;
height: 20px;
text-align: center;
padding: 5px;
margin-top: 5px;
background-color: #1E90FF;
color: white;
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
`
export const HeaderName = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
width: 75%;
height: 20px;
text-align: left;
padding: 5px;
padding-left: 15px;
margin-top: 5px;
background-color: #1E90FF;
color: white;
`
export const HeaderTotal = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
width: 15%;
height: 20px;
padding: 5px;
text-align: center;
margin-top: 5px;
background-color: #1E90FF;
color: white;
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
`
export const ModalWrapper = styled.div`
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.4);
top: 0;
left: 0;
`
export const ModalInfoBoxTotal = styled.div`
position: fixed;
margin-top: 2%;
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
display: flex;
flex-direction: column;
justify-content: center;
float: left;
align-items: center;
width: 20%;
background: #fff;
border-radius: 8px; 
-webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61); 
box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61);
`
export const ModalInfoBox = styled.div`
position: fixed;
margin-top: 12%;
font-family: Gill Sans Extrabold, sans-serif;
font-weight: bold;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 20%;
background: #fff;
border-radius: 8px; 
-webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61); 
box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61);
`
export const CloseButton = styled.p`
position: fixed;
margin-left: 20%;
margin-top: -15%;
color: red;
cursor: pointer;
width: 50px;
height: 30px;
background-color: #8B0000;
color: white;
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
text-align: center;
padding-top: 15px;
`
export const SortBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: flex-start;
align-items: center;
`
export const FilterItem = styled.p<{ isSelected: boolean }>`
display: flex;
border-bottom: ${(props) => (props.isSelected ? "1px solid red;" : "none")};
font-weight: ${(props) => (props.isSelected ? "600" : "normal")};
font-size: ${(props) => (props.isSelected ? "20px" : "15px")};
padding: 0 10px;
`