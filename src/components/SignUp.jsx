import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase-config';
import { selectUser, login } from '../store/reducers/userSlice';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ButtonPrimary from '../UI/ButtonPrimary';
import ButtonSecondary from '../UI/ButtonSecondary';
import MyInput from '../UI/MyInput';

function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = useSelector(selectUser);

  const signUpUser = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: userFirstName + ' ' + userLastName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userFirstName + ' ' + userLastName,
              })
            );

            history.push('/account');
          });
      })
      .catch(err => alert(err.message));
  };

  const handlerUserFirstName = e => {
    setUserFirstName(e.target.value);
  };

  const handlerUserLastName = e => {
    setUserLastName(e.target.value);
  };

  const handlerUserEmail = e => {
    setUserEmail(e.target.value);
  };

  const handlerUserPassword = e => {
    setUserPassword(e.target.value);
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
          <MyInput
            id="firstName"
            type="text"
            value={userFirstName}
            onChange={handlerUserFirstName}
            text="First Name"
          />
          <MyInput
            id="lastName"
            type="text"
            value={userLastName}
            onChange={handlerUserLastName}
            text="Last Name"
          />
          <MyInput
            id="email"
            type="email"
            value={userEmail}
            onChange={handlerUserEmail}
            text="Email Adress"
          />
          <MyInput
            id="password"
            type="password"
            value={userPassword}
            onChange={handlerUserPassword}
            text="Password"
          />
          <ButtonPrimary name="Create Account" type="submit" onClick={signUpUser} />
        </Form>
        <Driver>
          <hr /> <span>QR</span> <hr />
        </Driver>
        <Link to="/login" style={{ marginBottom: '30px' }}>
          <ButtonSecondary name="Sign In" />
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
    margin-right: 100px;
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
