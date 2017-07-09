import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Search extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Search',
        tabBarIcon: <Icon size={24} color={screenProps.theme.bottomNav.inactiveIcon} name="search" />
    });

    render(){
        return(
            <Text>This is the Search screen</Text>
        )
    }
}