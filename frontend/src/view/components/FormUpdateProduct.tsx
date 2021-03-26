import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { updateProductController } from '../../useCases/UpdateProduct';
import { Product } from '../../entities/Product';
import { Button, TextField } from '@material-ui/core';
import { PriceInput } from './PriceInput';
import { Form } from '../styles';

type Props = {
  routeProps: RouteComponentProps;
  data: Product | undefined;
}

const FormEditProduct: React.FC<Props> = ({ routeProps, data }) => {
  const [ id, setID ] = useState <string> ('');
  const [ name, setName ] = useState <string> ('');
  const [ stock, setStock ] = useState <string> ('');
  const [ price, setPrice ] = useState <string> ('');
  
  const fillForm = () => {
    if (data) {
      setID (data.id);
      setName (data.name);
      setStock (data.stock.toString ());
      setPrice (data.price.toString ());
    }
  }

  useEffect (fillForm, [data]);

  const handleUpdate = async (e: React.FormEvent <HTMLFormElement>): Promise<void> => {
    e.preventDefault ();
    await updateProductController.handle ({
      id, name, stock, price
    });
    routeProps.history.push ('/');
  }

  return (
    <Form onSubmit={e => handleUpdate (e)}>
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
        Salvar
      </Button>
    </Form>
  );
}

export { FormEditProduct };