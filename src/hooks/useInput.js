import { useState } from 'react';
import useValidateInput from './useValidateInput';

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidateInput(value, validations);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

export default useInput;
