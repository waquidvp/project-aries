import React from 'react';
import { Text } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
`;

class Feed extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Feed',
        tabBarIcon: <Icon size={24} color={screenProps.theme.bottomNav.inactiveIcon} name="view-agenda" />
    });
    
    render(){
        return(
            <MainContainer>
                <Text>This is the Feed screen</Text>
            </MainContainer>
        )
    }
}

export default withTheme(Feed);