import styled from "styled-components";
import { PrimaryColor, pureDark } from "../../Components/GlobalStyle";
import banner from '../../assets/icons/ic_side_banner.svg'

export const RegisterStyledContainer = styled.div`
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
margin: 0 auto;
.img-logo{
margin-top: 150px;
img{
width: 332px;
height: 66px;
}
}
.main-heading{
font-size: 26px;
color: ${PrimaryColor};
font-weight: 700;
margin-top: 30px;
line-height: 30px;
letter-spacing: 1px;
}  
.mini-heading{
color: ${pureDark};
font-size: 18px;
font-weight:700;
}

.ownership{
&-heading{
font-size: 22px;
font-weight:700;
}

.ant-checkbox-wrapper{
font-size: 19px;
font-weight: 700;

}
}  
.terms{
font-size: 15px;
}
}


`;
