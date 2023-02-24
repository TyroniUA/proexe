import styled from "styled-components";


const StyledForm = styled.div`
  background: white;
  position: relative;
  height: auto;
  min-width: 20;
  max-width: 40vw;
  max-height: 50vh;
  display: block;
  margin: auto;
  border-radius: 8px;
  padding: 20px;
  top: 30%;
`;

const StyledDiv = styled.div`
padding: 10px 5px;
margin-bottom: 3px;
`


const StyledButton = styled.button`
  background-color: red;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

const AddButton = styled(StyledButton)`
  background-color: blue;
  color: white;
`;

const EditButton = styled(StyledButton)`
  background-color: orange;
  color: white;
`;

const HomePage = styled.div`
background: white;
padding: 5vw 10vw;
`

const StyledModalBackground = styled.div`
  background: rgba(0,0,0,0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const StyledModal = styled.div`
  background: white;
  position: relative;
  height: auto;
  min-width: 40vw;
  max-width: 60vw;
  max-height: 50vh;
  display: block;
  margin: auto;
  border-radius: 8px;
  padding: 20px;
  top: 30%;
`;



const StyledCancelButton = styled(StyledButton)`
background: white;
color: black;
border: 1px solid grey;
`

const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTh = styled.th`
  
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;




export {
  HomePage, EditButton, AddButton, StyledButton,
  StyledDiv, StyledForm, StyledModalBackground,
  StyledModal,
  Flex,
  StyledCancelButton,
  StyledTable,
  StyledTd,StyledTh
}