import styled from 'styled-components';
import { lightGrey4, secondaryDark3, whiteColor } from '../../Components/GlobalStyle';

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
}
.inner-container{
img{
cursor: pointer;
}
}
`;
export const DashboardStyled=styled.div`

`;

export const RoleAndCommisionsSytled=styled.div`
margin-top: 24px;

p{
font-size: 12px;
margin-bottom: 0;
color: ${secondaryDark3};
font-family: 'EnnVisionsMedium';
}
.row:not(:first-child){
.card{
margin-top: 26px;   
padding: 10px;
background: ${whiteColor};
box-shadow: 0px 0px 2px #0000001A;
border-radius: 2px;
border: none;
}
}
.row:first-child{
margin-top: 12px;
}

`;
export const WeeklyTotalIncomeStyled=styled.div`
margin-top: 24px;
p{
font-size: 12px;
margin-bottom: 0;
color: ${secondaryDark3};
font-family: 'EnnVisionsMedium';
}
.card{
.title{
font-family:'EnnVisionsMedium';
font-size: 14px;
}
.sub_title{
color: ${lightGrey4};
}
}
.row:not(:first-child){
.card{
margin-top: 26px;   
padding: 10px;
background: ${whiteColor};
box-shadow: 0px 0px 2px #0000001A;
border-radius: 2px;
border: none;
}
}


`;
