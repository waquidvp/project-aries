import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TopBar from '../components/TopBar';
import PostCard from '../components/PostCard';

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
        let { theme } = this.props;

        return(
            <MainContainer>
                <TopBar
                    color={theme.topBar.background}
                />
                <PostCard />
            </MainContainer>
        )
    }
}

export default withTheme(Feed);