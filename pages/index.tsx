import { NextPage } from "next";
import React from "react";
import { WithReduxNextPageContext } from "~/interfaces";
const Index: NextPage = () => {
  return <div></div>;
};
Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  return { namespacesRequired: ["common"] };
};
export default Index;
