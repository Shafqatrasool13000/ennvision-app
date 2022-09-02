import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Index';
import RoleAndCommisions from './RoleAndCommisions';
import Sidebar from './Sidebar';
import WeeklyTotalIncome from './WeeklyTotalIncome';

const Index = () => {

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Container>
      <RoleAndCommisions/>
      <WeeklyTotalIncome/>
    </Container>
    </>
  )
}

export default Index