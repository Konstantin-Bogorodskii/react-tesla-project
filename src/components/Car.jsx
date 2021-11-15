import React from 'react';
import ButtonSecondary from './../UI/ButtonSecondary';
import styled from 'styled-components';

function Car({ img, model, testDrive }) {
  return (
    <CarWrap>
      <CarImg>
        <img src={img} alt="" />
      </CarImg>
      <h2>{model}</h2>
      <Actions>
        <ButtonCar>order</ButtonCar>
        {testDrive && <ButtonSecondary name="test drive" />}
      </Actions>
      <Info>
        <span>Request a Call</span> to speak with a product specialist, value your trade-in or apply
        for leasing
      </Info>
    </CarWrap>
  );
}

const ButtonCar = styled.button`
  background-color: #3e6ae1;
  border: none;
  padding: 11px 0;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-bottom: 30px;
  transition: all 0.4s;
  border: 3px solid #3e6ae1;
  margin-right: 10px;

  &:hover {
    background-color: #3457b1;
  }
`;

const CarWrap = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid #d0d1d2;

  h2 {
    font-weight: 500;
    font-size: xx-large;
    margin-top: -180px;
    text-transform: capitalize;

    @media (max-width: 502px) {
      margin-top: -80px;
    }
  }
`;
const CarImg = styled.div`
  img {
    object-fit: contain;
    width: 1000px;
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -40px;

  button {
    width: 230px;
    margin-bottom: 30px;
  }

  @media (max-width: 502px) {
    gap: 0px;
    justify-content: center;
    margin-top: 10px;
  }
`;
const Info = styled.p`
  max-width: 350px;
  text-align: center;
  font-size: smaller;
  line-height: 1.5;
  font-weight: 500;
  color: #393c41;

  span {
    color: #3e6be2;
    cursor: pointer;
  }
`;

export default Car;
