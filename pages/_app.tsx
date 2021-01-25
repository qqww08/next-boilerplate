import App, { AppInitialProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../createStore";
import { WithSagaTaskStore } from "../interfaces";


interface MyAppProps {
  store: WithSagaTaskStore;
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({
    Component,
    ctx,
  }: any): Promise<AppInitialProps> {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    return (
      <React.Fragment>
        <Provider store={store}>

            <Component {...pageProps} />

        </Provider>
      </React.Fragment>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
