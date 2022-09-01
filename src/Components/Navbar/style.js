import styled from "styled-components";
import { secondaryDark3, whiteColor } from "../GlobalStyle";


export const StyledContainer=styled.div`
background: ${whiteColor};
display: flex;
justify-content: end;
align-items: center;
padding: 16px 0;
.name{
margin-bottom:0;
color: ${secondaryDark3};
font-size: 14px;
}
img{
margin-left: 8px;
}

`