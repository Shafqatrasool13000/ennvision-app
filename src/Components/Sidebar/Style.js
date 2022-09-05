import styled from "styled-components";
import { lightGrey4, secondaryDark3 } from "../GlobalStyle";

export const SidebarStyled = styled.div`
width: 250px;
background-color: ${secondaryDark3};
height: 93vh;
position: fixed;
padding: 20px;
overflow-y: auto;
z-index: 20;

p{
color: ${lightGrey4};
margin: 0;
cursor: pointer;
}
.inner-container{
img{
cursor: pointer;
}
}
`;