import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { FormEditProduct } from '../components/FormEditProduct';
import { FormContainer } from '../styles';

type Params  = { 
  id: string,
};

const EditProduct = ({ match }: RouteComponentProps<Params>) => {
  return (
    <FormContainer>
      <Typography variant='h6' align='center'>
        Editar produto
      </Typography>
      <FormEditProduct id={match.params.id}/>
    </FormContainer>
  );
}

export { EditProduct };