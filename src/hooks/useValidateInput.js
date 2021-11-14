import { useEffect, useState } from 'react';

const useValidateInput = (value, validations) => {
  const [inputValid, setInputValid] = useState(false);

  const [isEmpty, setIsEmpty] = useState(true);
  const [emptyError, setEmptyError] = useState('Please fill out this field');

  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [isEmailCorrectText, setIsEmailCorrectText] = useState(
    'Please enter a valid email address'
  );

  const [isFirstNameCorrect, setIsFirstNameCorrect] = useState(false);
  const [firstNameError, setFirstNameError] = useState('Please enter a valid First Name');

  const [isLastNameCorrect, setIsLastNameCorrect] = useState(false);
  const [lastNameError, setLastNameError] = useState('Please enter a valid Last Name');

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
          case 'isFirstNameCorrect':
            const reFirstName = /^[a-z ,.'-]+$/i;
            if (!reFirstName.test(String(value).toLowerCase())) {
              setIsFirstNameCorrect(true);
            } else {
              setIsFirstNameCorrect(false);
            }
            break;
          case 'isLastNameCorrect':
            const reLastName = /^[a-z ,.'-]+$/i;
            if (!reLastName.test(String(value).toLowerCase())) {
              setIsLastNameCorrect(true);
            } else {
              setIsLastNameCorrect(false);
            }
            break;
          case 'isEmpty':
            value.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
            break;
        }
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isEmailCorrect || isFirstNameCorrect || isLastNameCorrect) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isEmailCorrect, isFirstNameCorrect || isLastNameCorrect]);

  return {
    isEmpty,
    inputValid,
    isEmailCorrectText,
    emptyError,
    isEmailCorrect,
    isFirstNameCorrect,
    firstNameError,
    isLastNameCorrect,
    lastNameError,
  };
};

export default useValidateInput;
