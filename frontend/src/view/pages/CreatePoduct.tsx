import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { FormCreateProduct } from '../components/FormCreateProduct';
import { FormContainer } from '../styles';

type Props = RouteComponentProps;

const CreateProduct: React.FC<Props> = (props) => {
  return (
    <FormContainer>
      <Typography variant='h6' align='center'>
        Cadastrar produto
      </Typography>
      <FormCreateProduct {...props}/>
    </FormContainer>
  );
}

export { CreateProduct };