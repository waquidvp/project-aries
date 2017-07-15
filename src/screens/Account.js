import React from 'react';
import {Text} from 'react-native';
import {withTheme} from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TopBar from '../components/TopBar';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
`;

class Account extends React.Component {
    static navigationOptions = ({screenProps}) => ({
        tabBarLabel: 'Account',
        tabBarIcon: <Icon size={24} color={screenProps.theme.bottomNav.inactiveIcon} name="account-circle"/>
    });

    render() {
        let {theme} = this.props;

        return (
            <MainContainer>
                <TopBar
                    color={theme.topBar.background}
                />
                <Text>This is the Account screen</Text>
            </MainContainer>
        )
    }
}

export default withTheme(Account);