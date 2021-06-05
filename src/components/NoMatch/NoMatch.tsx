import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-bootstrap';

const NoMatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function NoMatch() {
  return (
    <NoMatchContainer>
      Oops...
      <NavLink href="/">back to homepage</NavLink>
    </NoMatchContainer>
  );
}

export default NoMatch;
