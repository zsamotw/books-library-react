import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>Library</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Books</Nav.Link>
        <Nav.Link href="authors">Authors</Nav.Link>
        <Nav.Link href="publishers">Publishers</Nav.Link>
      </Nav>
    </Navbar>
  );
}
