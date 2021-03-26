import React from 'react';
import { Fab, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ProductList } from '../components/ProductList';
import { Container, Row } from '../styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Typography variant='h6' align='center'>
          Produtos
        </Typography>
        <Fab color="primary" aria-label='create' href='/products/create'>
          <AddIcon/>
        </Fab>
      </Row>
      <ProductList/>
    </Container>
  );
}

export { Home };