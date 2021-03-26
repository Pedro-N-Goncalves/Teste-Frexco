import NumberFormat from 'react-number-format';

interface NumberFormatProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const PriceInput = (props: NumberFormatProps) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange ({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString={true}
      thousandSeparator='.'
      decimalSeparator=','
      prefix='R$ '
    />
  );
}

export { PriceInput };