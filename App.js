/* @flow*/

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { getTheme, setTheme } from './src/utils/theme';
import MainBottomNavigator from './src/navigators/MainBottomNavigator';

console.disableYellowBox = true;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    setTheme('light', () => {
      getTheme((theme) => {
        this.setState({ theme: theme });
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
