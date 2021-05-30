import React from 'react';
import Switch from 'react-bootstrap/Switch';
import { Route } from 'react-router';
import NavBar from '../NavBar';
import Books from '../Books';
import Authors from '../Authors/Authors';

export default function RootComponent() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
        </Switch>
      </main>
    </>
  );
}
