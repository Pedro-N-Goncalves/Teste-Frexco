import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { PriceInput } from './PriceInput';
import { createProductController } from '../../useCases/CreateProduct';
import { Form } from '../styles';

type Props = RouteComponentProps;

const FormCreateProduct: React.FC<Props> = ({ history }) => {
  const [ name, setName ] = useState <string> ('');
  const [ stock, setStock ] = useState <string> ('');
  const [ price, setPrice ] = useState <string> ('');

  const handleCreate = async (e: React.FormEvent <HTMLFormElement>): Promise<void> => {
    e.preventDefault ();
    await createProductController.handle ({
      name, stock, price
    });
    history.push ('/');
  }

  return (
    <Form onSubmit={e => handleCreate (e)}>
      <TextField 
        id='name'
        label='Nome'
        variant='outlined'
        size='small'
        value={name}
        onChange={e => setName (e.target.value)}
      />
      <TextField 
        id='stock'
        label='Quantidade'
        variant='outlined'
        type='number'
        size='small'
        value={stock}
        onChange={e => setStock (e.target.value)}
      />
      <TextField 
        id='price'
        label='Preço'
        variant='outlined'
        size='small'
        InputProps={{
          inputComponent: PriceInput as any,
        }}
        value={price}
        onChange={e => setPrice (e.target.value)}
      />
      <Button
        type='submit'
        variant='contained'
        size='large'
        color='primary'
      >
        Cadastrar
      </Button>
    </Form>
  );
}

export { FormCreateProduct } ;