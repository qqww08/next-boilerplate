import { NextPage } from "next";
import React from "react";
import { WithReduxNextPageContext } from "~/interfaces";
import styled from "styled-components";
const Index: NextPage = () => {
  return <__Div>123</__Div>;
};

const __Div = styled.div``;
Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  return;
};
export default Index;
