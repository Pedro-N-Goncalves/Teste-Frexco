import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Form } from '../styles';

const FormCreateProduct: React.FC = () => {
  return (
    <Form>
      <TextField id='name' label='Nome' variant='outlined' size='small'/>
      <TextField id='stock' label='Quantidade' variant='outlined' size='small'/>
      <TextField id='price' label='Preço' variant='outlined' size='small'/>
      <Button type='submit' variant='contained' size='large' color='primary'>
        Cadastrar
      </Button>
    </Form>
  );
}

export { FormCreateProduct };