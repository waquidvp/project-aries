import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Account extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Account',
        tabBarIcon: <Icon size={24} color={screenProps.theme.bottomNav.inactiveIcon} name="account-circle" />
    });

    render(){
        return(
            <Text>This is the Account screen</Text>
        )
    }
}