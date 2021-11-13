import { useEffect, useState } from 'react';

const useValidateInput = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [emptyError, setEmptyError] = useState('Please fill out this field.');
  const [isEmailCorrectText, setIsEmailCorrectText] = useState('Please, enter valid email address');

  useEffect(() => {
    for (const validation in validations) {
      if (Object.hasOwnProperty.call(validations, validation)) {
        switch (validation) {
          case 'isEmailCorrect':
            const re =
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            if (!re.test(String(value).toLowerCase())) {
              setIsEmailCorrect(true);
            } else {
              setIsEmailCorrect(false);
            }
            break;
          case 'isEmpty':
            value ? setIsEmpty(false) : setIsEmpty(true);
            break;
        }
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isEmailCorrect) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isEmailCorrect]);

  return { isEmpty, inputValid, isEmailCorrectText, emptyError, isEmailCorrect };
};

export default useValidateInput;
