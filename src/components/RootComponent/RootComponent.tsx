import React from 'react';
import Switch from 'react-bootstrap/Switch';
import { Route } from 'react-router';
import NavBar from '../NavBar';
import Books from '../Books';
import Authors from '../Authors/Authors';
import Publishers from '../Publishers/Publishers';

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
          <Route path="/publishers">
            <Publishers />
          </Route>
        </Switch>
      </main>
    </>
  );
}
