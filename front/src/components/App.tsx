import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';

import { ApolloProvider } from '@apollo/client';
import { client } from '../modules/graphql/apolloClient';

import StudentList from './student-list/StudentList';
import StudentForm from './student-form/StudentForm';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <StudentList/>
          </Route>
          <Route path="/add-student">
            <StudentForm/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
