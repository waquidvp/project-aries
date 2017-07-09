import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Chats extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Chats',
        tabBarIcon: <Icon size={24} color={screenProps.theme.bottomNav.inactiveIcon} name="chat" />
    });

    render(){
        return(
            <Text>This is the Chats screen</Text>
        )
    }
}