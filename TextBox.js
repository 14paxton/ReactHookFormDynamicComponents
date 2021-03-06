import { useFormContext } from 'react-hook-form';
import React from 'react';
import TextField from '@material-ui/core/TextField';

const inputStyles = {
  backgroundColor: 'white'
};

const TextBox = ({ parentFormId, inputObject, setFormData, formData }) => {
  const { register, errors } = useFormContext();
  const label = useFormatMessage(
    inputObject.label.key,
    inputObject.label.default
  );

  const twoCharError = 'Please type at least 2 characters to search.';

  return (
    <TextField
      id={`text-field-${parentFormId}-${inputObject.id}`}
      name={inputObject.id}
      inputRef={register({
        minLength: {
          value: 2,
          message: twoCharError
        }
      })}
      label={label}
      onChange={setFormData}
      margin="normal"
      variant="filled"
      error={!!errors?.[inputObject.id]}
      helperText={errors?.[inputObject.id]?.message}
      InputLabelProps={{
        shrink: true,
        'data-qa': `${parentFormId}-${inputObject.id}-search-label`
      }}
      inputProps={{
        'data-qa': `${parentFormId}-${inputObject.id}-search-input`,
        style: { ...inputStyles }
      }}
    />
  );
};

export default TextBox;
