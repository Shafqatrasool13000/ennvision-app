import styled from 'styled-components';
import {lightblue, lightGrey5, PrimaryColor, pureDark, secondaryDark4, tertiaryGrey2, tertiaryGrey7, tertiaryGrey8, tertiaryGrey9, whiteColor } from '../../Components/GlobalStyle';

export const ProfessionalProfileStyled=styled.div`
background-color: ${tertiaryGrey8}; 
height: 100%;
`

export const ProfileBoxStyled=styled.div`
border: 1px solid ${tertiaryGrey8};
padding-top: 16px;
max-width: 1040px;
margin: 0 auto;
background: #FFFFFF;
.owner-details{
    border: 1px solid ${lightGrey5};
    border-radius: 5px;
    padding: 14px;
    margin-top: 22px;

    .bio{
    h6{
    font-size: 18px;
    font-family: 'EnnVisionsMedium';
    color: ${pureDark};
    }
    .branch{
    color: ${tertiaryGrey7};
    font-size: 16px;
    }
    .location{
    color: ${secondaryDark4};
    font-size: 14px;
    }
    }
    .sold-properties{
    background: ${tertiaryGrey8};
    border: 1px solid ${tertiaryGrey8};
    border-radius: 5px;
    
    .properties{
    background: ${tertiaryGrey9};
    border: 1px solid #F5F5F5;
    border-radius: 5px;

    .quantity{
    font-size: 18px;
    font-family: 'EnnVisionsMedium';
    }
    }
    padding: 15px;
    .title{
    color: ${tertiaryGrey7};
    font-size: 15px;
    }
    .chat-btn{
    background: ${lightblue};
    border-radius: 5px;
    font-size: 15px;
    padding: 4px;
    color: ${whiteColor};
    width: 90%;
    }
    .call-btn{
    background: ${PrimaryColor};
    border-radius: 5px;
    font-size: 15px;
    padding: 4px;
    color: ${whiteColor};
    width: 90%;

    }
    @media screen and (min-width:576px){
    margin-top: -10px;
    button{
    width: 100%;
    }    
    }
    @media screen and (max-width:576px){
    margin-top: 10px;
    button{
    width: 50%;   
    }  
    }
    }
    .about-us-text {
    color: ${tertiaryGrey7};
    border-top:1px solid ${tertiaryGrey2};
    width: 98%;
    }
    }
`