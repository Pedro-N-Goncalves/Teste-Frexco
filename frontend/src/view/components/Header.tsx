import React, { Fragment } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Brand } from '../styles';

const Header: React.FC = () => {
  return (
    <Fragment>
      <AppBar position='fixed'>
        <Toolbar>
          <Brand href='/'>
            <h1>Gigastore</h1>
          </Brand>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </Fragment>
  );
};

export { Header };