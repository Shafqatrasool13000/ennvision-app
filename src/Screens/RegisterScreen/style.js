import styled from "styled-components";
import { PrimaryColor, pureDark, secondaryDark3, tertiaryGrey2, tertiaryGrey6 } from "../../Components/GlobalStyle";
import banner from '../../assets/icons/ic_side_banner.svg'

export const RegisterStyledContainer = styled.div`
.left-side-img{
background-image:url(${banner});
background-size: cover;
height: 100vh;
background-repeat: no-repeat;

}
.right-section{
overflow-y: auto;
height: 100vh;
overflow-y: auto;

&-inner-container{
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
font-size: 19px;
font-weight:700;
}

.ant-checkbox-wrapper{
font-size: 16px;
font-weight: 700;

}
}  
.terms{
font-size: 15px;
}
}
}

`;


export const AddMoreOptionsStyled=styled.div`
.heading{
font-size:20px;
color:${secondaryDark3};
font-weight: 700;
letter-spacing: 0.5px;
}
.location-section{
&-box{
border: 1px solid ${tertiaryGrey6};
border-radius: 7px;
}
&-map{
height:150px;
width:100%;
background-color:${tertiaryGrey2}
}
}
.serve-events{
.ant-checkbox-wrapper{
font-size: 17px;
}
}
.timing{
border: 1px solid ${tertiaryGrey6};
padding: 10px;
&-days{
display:grid;
grid-template-columns: repeat(4,1fr);
}
&-crud{
.add-time-btn{
margin-top: 38px;
}
}
&-details-list{
&-single-day{
p{
margin-bottom: 0;
}
.name{
text-transform: capitalize;
}
.time{
color: ${tertiaryGrey2};
}
.mark-close{
color: ${PrimaryColor};
}
img{
width: 16px;
}
}
}
}

`