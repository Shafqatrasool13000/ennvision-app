import styled from "styled-components";
import { lightGrey3, PrimaryColor, pureDark, secondaryDark4, whiteColor } from "../../Components/GlobalStyle";
import banner from '../../assets/Image/ic_image_1.png'

export const HomeStyled =styled.div`
.arrow-box{
position: absolute;
bottom: 6%;
right:5%;
border-radius: 50%;
cursor: pointer;
}
`
export const HeroSectionStyled=styled.div`
background: url(${banner});
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
margin-top: -70px;
.inner-container{
height: 100vh;
&-main-heading{
font-size: 52px;
color: ${whiteColor};
margin: 0;
.house-up{
font-family: 'EnnVisionsMedium';
}
}
.purchase-btns{
max-width: 300px;
margin-top: 45px;
background-color: ${whiteColor};
border-radius: 7px;
height: 50px;
padding: 3px;
.active{
background-color: ${PrimaryColor};
height: 100%;
border-radius: 4px;
color: ${whiteColor};
}
button{
background: transparent;
font-size: 18px;

}
}
.location-select-section{
max-width: 1000px;
margin-top: 45px;
background-color: ${whiteColor};
border-radius: 7px;
.title{
color: ${pureDark};
font-size: 16px;
font-family: 'EnnVisionsMedium';
}
.sub-title{
color: ${secondaryDark4};
font-size: 14px;
}
.property-type{
border-left: 1px solid ${lightGrey3};
height: 70%;
.search-box{
background-color: ${PrimaryColor};
border-radius: 4px;
padding: 12px;
img{
vertical-align: super;
}
}
}
}
.hero-footer{
background-color: ${whiteColor};
margin-top: 70px;
}
.icon{
cursor: pointer;
&:not(:first-child){
margin-left: 12px;
}
}
}
`