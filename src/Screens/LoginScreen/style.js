import styled from "styled-components";
import { PrimaryColor, secondaryDark3, tertiaryGrey4 } from "../../Components/GlobalStyle";
import banner from '../../assets/icons/ic_side_banner.svg'

export const LoginStyledContainer = styled.div`
.left-side-img{
background-image:url(${banner});
background-size: cover;
height: 100vh;
background-repeat: no-repeat;
}

.right-side{
max-width: 575px;
display: flex;
flex-direction: column;
justify-content: center;
height: 90vh;
margin: 0 auto;
.img-logo{
img{
width: 332px;
height: 66px;
}
}
.main-heading{
font-size: 36px;
color: ${secondaryDark3};
font-weight: 700;
margin-top: 24px;
line-height: 30px;
letter-spacing: 1px;
font-family: 'EnnVisionsBold';
margin-top: 40px;
}
.create-account-linking{
margin-top: 10px;
h6{
color: ${tertiaryGrey4};
font-size: 22px;
margin: 0;
}
p{
color: ${PrimaryColor};
font-size: 22px;
margin: 0;
cursor: pointer;
}
}
.password-input{
h6{
right: 4%;
bottom: 15%;
color: ${PrimaryColor};
cursor: pointer;
font-size: 18px;
}
}
.forget-password{
color: ${PrimaryColor};
font-weight: 500;
font-size: 18px;
cursor: pointer;
}  
.inputs-section{
.login-btns{
margin-top: 20px;
.sign-in-btn{
cursor: pointer;
}

.sign-google-btn{
z-index: -1;
img{
z-index: 10;
width: 26px;
margin-left: 14px;
}
}
}
}
} 
.login-footer{
p{
color: ${PrimaryColor};
font-weight: 500;
cursor: pointer;
font-size: 18px;
}
} 

`;
