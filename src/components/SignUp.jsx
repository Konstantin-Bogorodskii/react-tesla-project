import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase-config';
import { login } from '../store/reducers/userSlice';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ButtonPrimary from '../UI/ButtonPrimary';
import ButtonSecondary from '../UI/ButtonSecondary';
import MyInput from '../UI/MyInput';
import useInput from '../hooks/useInput';

function SignUp() {
  const userEmail = useInput('', { isEmpty: true, isEmailCorrect: false });
  const userPassword = useInput('', { isEmpty: true });
  const userFirstName = useInput('', { isEmpty: true, isFirstNameCorrect: false });
  const userLastName = useInput('', { isEmpty: true, isLastNameCorrect: false });
  const dispatch = useDispatch();
  const history = useHistory();

  const signUpUser = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(userEmail.value, userPassword.value)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: userFirstName.value + ' ' + userLastName.value,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userFirstName.value + ' ' + userLastName.value,
              })
            );

            history.push('/account');
          });
      })
      .catch(err => alert(err.message));
  };

  return (
    <Wrap>
      <Header>
        <Logo>
          <Link to="/">
            <img src="/images/logo.svg" alt="Tesla Logo" />
          </Link>
        </Logo>
        <Language>
          <LanguageOutlinedIcon /> <span>en-US</span>
        </Language>
      </Header>
      <Info>
        <h1>Create Account</h1>
        <Form>
          <MyInput id="firstName" type="text" useInput={userFirstName} text="First Name *" />
          <MyInput id="lastName" type="text" useInput={userLastName} text="Last Name *" />
          <MyInput id="email" type="email" useInput={userEmail} text="Email Adress *" />
          <MyInput id="password" type="password" useInput={userPassword} text="Password *" />
          <ButtonPrimary
            name="Create Account"
            type="submit"
            onClick={signUpUser}
            useInputs={[userEmail, userPassword, userFirstName, userLastName]}
          />
        </Form>
        <Driver>
          <hr /> <span>QR</span> <hr />
        </Driver>
        <Link to="/login" style={{ marginBottom: '30px' }}>
          <ButtonSecondary name="Sign In" butt />
        </Link>
      </Info>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 25px;
  padding-top: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 15px;
  transition: all 0.2s;

  span {
    font-weight: 500;
  }

  &:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }
`;

const Logo = styled.div`
  img {
    object-fit: contain;
    flex: 1;
    width: 90px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 330px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-weight: 500;
    font-size: 40px;
    margin-left: -10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #5c5e62;
    font-weight: 600;
    font-size: 15px;
    padding-left: 20px;
    padding-bottom: 5px;
  }

  input {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;

    &:focus {
      border: 1px solid #d6d6d6;
      transition: all 0.2s;
    }
  }
`;

const Driver = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
  }

  span {
    font-weight: 600;
    color: #5c5e62;
  }
`;

export default SignUp;
