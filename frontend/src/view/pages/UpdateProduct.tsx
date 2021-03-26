import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getProductController } from '../../useCases/GetProduct';
import { Product } from '../../entities/Product';
import { Typography } from '@material-ui/core';
import { FormEditProduct } from '../components/FormUpdateProduct';
import { FormContainer } from '../styles';

type Props = RouteComponentProps<Params>;

type Params = {
  id: string;
};

const EditProduct: React.FC<Props> = (props) => {
  const [ product, setProduct ] = useState <Product> ();

  useEffect (() => {
    getProduct (props.match.params.id);
  }, [props.match.params.id]);
  
  const getProduct = async (id: string): Promise<void> => {
    const result: Product = await getProductController.handle (id);
    setProduct (result);
  };

  return (
    <FormContainer>
      <Typography variant='h6' align='center'>
        Editar produto {}
      </Typography>
      <FormEditProduct routeProps={props} data={product}/>
    </FormContainer>
  );
}

export { EditProduct };