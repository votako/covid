import styled from "styled-components";

export const Head = styled.div`
display: inline-block;
width: 76%;
box-sizing: border-box;
`;

export const Search = styled.input`
  float: right;
  width: 10em;
  margin-top: 20px;
  max-width: 100%;
  border: 1px solid orange;
  background: #fff5d7;
  font-size: 18px;
  padding: 10px;
  width: 200px;
  height: 20px;
  background: white;
  border: 1px outset white;
  -webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61); 
  box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61);
  border-radius: 7px 7px 7px 7px;
  ::placeholder {
    color: grey;
  }
`;

export const MakeCenter = styled.div`
margin-left: auto;
margin-right: auto;
width: 800px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  background-color: #FFFAFA;
  overflow: scroll; //без этого всплывающее окно показывает только верху
  height: 100vh; //без этого всплывающее окно показывает только верху
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border: 1px black;
  border-radius: 6px;
  cursor: pointer;
`;

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
  border-radius: 0px 7px 0px 7px;
  background-color: white;
  font-weight: bold;
`;
export const BoxTotal = styled.div`
font-family: Gill Sans Extrabold, sans-serif;
  font-weight: bold;
  width: 15%;
  height: 21px;
  text-align: left;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px outset white;
  border-top: #1E90FF;
  border-bottom: 1px inset rgba(28,110,164,0.27);
  border-right: 1px inset rgba(28,110,164,0.27);
  border-radius: 0px 0px 7px 0px;
  // -webkit-box-shadow: 7px 7px 8px 1px #000000; 
  // box-shadow: 7px 7px 8px 1px #000000;
  background-color: white;
  font-weight: bold;
  
`;

export const HeaderName = styled.div`
  font-family: Gill Sans Extrabold, sans-serif;
  font-weight: bold;
  width: 67.5%;
  height: 25px;
  text-align: left;
  padding: 5px;
  padding-left: 15px;
  margin-top: 5px;
  background-color: #1E90FF;
  color: white;
  //border: 1px outset black;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;
export const HeaderTotal = styled.div`
  font-family: Gill Sans Extrabold, sans-serif;
  font-weight: bold;
  width: 13.9%;
  height: 25px;
  text-align: left;
  padding: 5px;
  margin-top: 5px;
  background-color: #1E90FF;
  color: white;
  //border: 1px solid black;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalInfoBox = styled.div`
  font-family: Gill Sans Extrabold, sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  // width: 20vw;
  // height: 40vh;
  background: #fff;
  border-radius: 8px; 
  -webkit-box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61); 
  box-shadow: 0px 7px 17px 6px rgba(0,0,0,0.61);
`;

export const CloseButton = styled.p`
  color: red;
  cursor: pointer;
`;

export const SortBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const FilterItem = styled.p<{ isSelected: boolean }>`
  display: flex;
  border-bottom: ${(props) => (props.isSelected ? "1px solid red;" : "none")};
  font-weight: ${(props) => (props.isSelected ? "600" : "normal")};
  font-size: ${(props) => (props.isSelected ? "20px" : "15px")};
  padding: 0 10px;
`;