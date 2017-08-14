/* @flow*/

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { getTheme, setTheme } from './src/utils/theme';
import MainBottomNavigator from './src/navigators/MainBottomNavigator';

export default class App extends React.Component {
  state: {
    theme: Object
  };

  constructor() {
    super();

    this.state = {
      theme: {},
    };
  }

  componentWillMount() {
    setTheme('dark', () => {
      getTheme((theme) => {
        this.setState({ theme });
      });
    });
  }

  render() {
    return (
      this.state.theme ?
        <ThemeProvider theme={this.state.theme}>
          <MainBottomNavigator />
        </ThemeProvider>
        : null
    );
  }
}
