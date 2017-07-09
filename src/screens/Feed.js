import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Feed extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Feed',
        tabBarIcon: <Icon size={24} color={screenProps.theme.bottomNav.inactiveIcon} name="view-agenda" />
    });
    
    render(){
        return(
            <Text>This is the Feed screen</Text>
        )
    }
}