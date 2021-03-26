import React from 'react';
import { Typography } from '@material-ui/core';
import { FormCreateProduct } from '../components/FormCreateProduct';
import { FormContainer } from '../styles';

const CreateProduct: React.FC = () => {
  return (
    <FormContainer>
      <Typography variant='h6' align='center'>
        Cadastrar produto
      </Typography>
      <FormCreateProduct/>
    </FormContainer>
  );
}

export { CreateProduct };