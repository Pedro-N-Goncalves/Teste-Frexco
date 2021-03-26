import React, { useState, useEffect } from 'react';
import { IconButton, List, ListItem , ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Product } from '../../entities/Product';
import { listProductController } from '../../useCases/ListProduct';
import { deleteProductController } from '../../useCases/DeleteProduct';
import NumberFormat from 'react-number-format';
import { materialStyles } from '../styles';

const ProductList: React.FC = () => {
  const styles = materialStyles ();
  const [ products, setProducts ] = useState <Product[]> ([]);

  useEffect (() => {
    getProducts ();
  }, []);

  const getProducts = async () => {
    const result = await listProductController.handle ();
    setProducts (result);
  }

  const deleteProduct = async (id: string): Promise<void> => {
    await deleteProductController.handle (id);
    getProducts ();
  }

  return (
    <List component='nav' aria-label='products'>
      {products.map (product => (
        <ListItem className={styles.item} key={product.id}>
          <ListItemText primary={product.name}/>
          {product.stock !== 0 ?
            <ListItemText primary={`${product.stock} ${product.stock > 1 ? 'disponíveis' : 'disponível'}`}/>
            : <ListItemText primary='Produto indisponível' className={styles.unavaliableText}/>
          }
          <ListItemText className={styles.priceTag} primary={
            <NumberFormat 
              value={product.price}
              displayType={'text'}
              thousandSeparator='.'
              decimalSeparator=','
              isNumericString={true}
              prefix={'R$ '}
            />
          }/>
          <ListItemSecondaryAction>
            <IconButton edge='start' aria-label='edit' href={`/products/${product.id}/edit`}>
              <EditIcon />
            </IconButton>
            <IconButton edge='end' aria-label='delete' onClick={e => deleteProduct (product.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
 
export { ProductList };