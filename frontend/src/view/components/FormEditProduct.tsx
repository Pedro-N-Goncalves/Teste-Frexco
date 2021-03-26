import { Button, TextField } from '@material-ui/core';
import { Form } from '../styles';

type FormProps = {
  id: string;
}

const FormEditProduct = ({id}: FormProps) => {
  return (
    <Form>
      <TextField id='name' label='Nome' variant='outlined' size='small'/>
      <TextField id='stock' label='Quantidade' variant='outlined' size='small'/>
      <TextField id='price' label='Preço' variant='outlined' size='small'/>
      <Button type='submit' variant='contained' size='large' color='primary'>
        Salvar
      </Button>
    </Form>
  );
}

export { FormEditProduct };