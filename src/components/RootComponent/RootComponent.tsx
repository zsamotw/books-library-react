import React from 'react';
import Switch from 'react-bootstrap/Switch';
import { Redirect, Route } from 'react-router';
import NavBar from '../NavBar';
import Books from '../Books';
import Authors from '../Authors/Authors';
import Publishers from '../Publishers/Publishers';
import BooksCreate from '../Books/BooksCreate';

export default function RootComponent() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/books" />)} />
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/books/create">
            <BooksCreate />
          </Route>
          <Route exact path="/authors">
            <Authors />
          </Route>
          <Route exact path="/publishers">
            <Publishers />
          </Route>
        </Switch>
      </main>
    </>
  );
}
