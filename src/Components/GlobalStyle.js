import styled from "styled-components";

export const BasicColor = '#C0922E';
export const PrimaryColor = '#C7112B';
export const pureDark='#000000';
export const lightDark='#4D4D4D';
export const secondaryDark='#221E30';
export const secondaryGrey='#AAB2BA';
export const secondaryDark2='#1C1C1E';
export const secondaryDark3='#1B283F';
export const tertiaryDark = '#1A1B1E';
export const lightGrey = '#909090';
export const lightGrey2 = '#EFEFF4';

export const tertiaryGrey = '#808896';
export const tertiaryGrey2='#80808F';
export const tertiaryGrey3='#B5B5C3';
export const tertiaryGrey4='#AEAEB2';
export const tertiaryGrewish='#C6C6C8';

export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px;
`
export const ButtonContainer = styled.div`
width: 100%;
.ant-btn {
background-color: ${(props) => props.bkColor};
color: ${(props) => props.color};
width: ${(props) => props.width};
padding: ${(props) => props.padding};
font-size: 16px;
height: auto;
}
`
export const TertiaryHeading = styled.h3`
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
color:#1A1B1E ; 
@media screen and (max-width:480px) {
font-size: 19px;
line-height: 21px;
font-weight: bold;
}
`
export const InputErrorMessage = styled.div`
color: red;
text-align: start;
margin-left: 3px;
font-size: 12px;
letter-spacing: 1px;
margin-top: 5px;
`