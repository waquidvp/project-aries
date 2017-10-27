/* @flow*/

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { getTheme, setTheme } from './src/utils/theme';
import MainBottomNavigator from './src/navigators/MainBottomNavigator';
import SplashScreen from './src/screens/SplashScreen';

console.disableYellowBox = true;

const MainContainer = styled.View`
  flex: 1;
  background: white;
`;

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {};

        this.updateTheme = this.updateTheme.bind(this);
    }

    updateTheme(themeName) {
        setTheme(themeName, () => {
            let theme = getTheme(theme => {
                this.setState({ theme: theme });
            });
        });
    }

    componentWillMount() {
        let theme = getTheme(theme => {
            this.setState({ theme: theme });
        });
    }

    render() {
        return (
            <MainContainer>
                <StatusBar translucent={true} backgroundColor='rgba(0, 0, 0, 0.25)' animated={true}/>
                {this.state.theme ? (
                    <ThemeProvider theme={this.state.theme}>
                        <MainBottomNavigator
                            props={{ updateTheme: this.updateTheme }}
                        />
                    </ThemeProvider>
                ) : (
                    <SplashScreen />
                )}
            </MainContainer>
        );
    }
}
