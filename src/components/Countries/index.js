import React from 'react'
import { Container, Divider } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CountriesList from './CountriesList';
import Country from '../Country/';

const Countries = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Container >
        <h2>Countries</h2>
        <Divider />

        <Switch>
          <Route exact path={path}>
            <CountriesList />
          </Route>
          <Route path={`${path}/:countryId`}>
            <Country />
          </Route>
        </Switch>

      </Container>
    </div>
  );
};

export default Countries;
