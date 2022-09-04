import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Index';
import RoleAndCommisions from './RoleAndCommisions';
import WeeklyTotalIncome from './WeeklyTotalIncome';

const Index = () => {

  return (
    <>
      <Navbar />
      <Container>
        <RoleAndCommisions />
        <WeeklyTotalIncome />
      </Container>
    </>
  )
}

export default Index