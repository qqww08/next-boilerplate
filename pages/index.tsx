import React from "react";

import { I18nPage } from "~/utils/i18n";
import { WithReduxNextPageContext } from "~/interfaces";

const Index: I18nPage = () => {
  return <div>123</div>;
};
Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  return {
    namespacesRequired: ["common"],
  };
};
export default Index;
