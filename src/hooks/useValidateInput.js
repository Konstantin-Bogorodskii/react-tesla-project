import { useEffect, useState } from 'react';

const useValidateInput = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      if (Object.hasOwnProperty.call(validations, validation)) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation]
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
          case 'isEmpty':
            value ? setIsEmpty(false) : setIsEmpty(true);
            break;
        }
      }
    }
  }, [value]);
};

export default useValidateInput;
