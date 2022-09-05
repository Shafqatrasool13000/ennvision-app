import React from 'react';
import { Container } from 'react-bootstrap';
import RoleAndCommisions from './RoleAndCommisions';
import WeeklyTotalIncome from './WeeklyTotalIncome';

const Index = () => {

  return (
    <>
      <Container>
        <RoleAndCommisions />
        <WeeklyTotalIncome />
      </Container>
    </>
  )
}

export default Index