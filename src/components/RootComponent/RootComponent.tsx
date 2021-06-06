import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NavBar from '../NavBar';
import Books from '../Books';
import Authors from '../Authors/Authors';
import Publishers from '../Publishers/Publishers';
import BookCreate from '../Books/BookCreate';
import BookUpdate from '../Books/BookUpdate';
import NoMatch from '../NoMatch';

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
            <BookCreate />
          </Route>
          <Route exact path="/books/edit/:id">
            <BookUpdate />
          </Route>
          <Route exact path="/authors">
            <Authors />
          </Route>
          <Route exact path="/publishers">
            <Publishers />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </>
  );
}
