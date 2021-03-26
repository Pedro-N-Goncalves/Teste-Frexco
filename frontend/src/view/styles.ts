import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core' ;

export const Container = styled.div`
  padding: 30px 100px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.a`
  text-decoration: none;

  h1 {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 3px;
  }

  &:hover h1{
    box-shadow: none;
    color: #cccccc;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 300px;
  height: 300px;
  background: #f5f5f5;
  margin-top: 15px;
  border-radius: 8px;
  padding: 0 20px;
`;

export const materialStyles = makeStyles ((theme: Theme) =>
  createStyles ({
    item: {
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      height: 58,
      backgroundColor: theme.palette.grey[100],
      borderRadius: 5,
    },
    priceTag: {
      color: '#019901',
    },
    unavaliableText: {
      color: '#ee0a0a',
    },
  }),
);


