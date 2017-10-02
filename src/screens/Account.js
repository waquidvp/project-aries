// @flow

import React from 'react';
import { Text, Switch } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TopBar from '../components/TopBar';
import { getThemeName } from '../utils/theme';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    justify-content: center;
    align-items: center;
`;

class Account extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Account',
        tabBarIcon: (
            <Icon
                size={24}
                color={screenProps.theme.bottomNav.inactiveIcon}
                name="account-circle"
            />
        )
    });

    constructor(props) {
        super(props);

        this.state = {};

        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    componentWillMount() {
        getThemeName(currentTheme => {
            if (currentTheme == 'light') {
                this.setState({ switchValue: false });
            } else if (currentTheme == 'dark') {
                this.setState({ switchValue: true });
            }
        });
    }

    toggleSwitch(value) {
        if (value == true) {
            this.setState({ switchValue: true });
            this.props.screenProps.updateTheme('dark');
        } else if (value == false) {
            this.setState({ switchValue: false });
            this.props.screenProps.updateTheme('light');
        }
    }

    render() {
        let { theme } = this.props;

        return (
            <MainContainer>
                {/* <TopBar
                    color={theme.topBar.background}
                /> */}
                <Switch
                    value={this.state.switchValue}
                    onValueChange={value => this.toggleSwitch(value)}
                    onTintColor='#4ab2e0'
                    thumbTintColor='#3899C3'
                />
            </MainContainer>
        );
    }
}

export default withTheme(Account);
