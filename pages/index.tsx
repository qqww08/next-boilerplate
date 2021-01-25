import { NextPage } from 'next';
import React from 'react';
import { State, wrapper } from '../createStore';
import { getAction } from '../store/action';
import styled from '../../boilerplate/styles/themed-components';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ActionInterfaces } from '../store/reducer';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(getAction());
});
const Index: NextPage<State> = () => {
  // const dispatch = useDispatch();
  // dispatch(getAction());
  const Input = styled.div`
    color: #6700ce;
  `;
  return (
    <div>
      <Input>123</Input>
    </div>
  );
};

export default connect((state: State) => state)(Index);
