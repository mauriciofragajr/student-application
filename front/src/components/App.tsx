import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';

import { ApolloProvider } from '@apollo/client';
import { client } from '../modules/graphql/apolloClient';

import StudentList from './student-list/StudentList';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/">
            <StudentList/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
