// @flow

import React from 'react';
import { Text } from 'react-native';
import { withTheme } from 'styled-components';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TopBar from '../components/TopBar';
import demoData from '../utils/data';
import ChatBubble from '../components/ChatBubble';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
`;

const ListSeperator = styled.View`
    height: 6px;
`;

class Chats extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Chats',
        tabBarIcon: <Icon size={24} color={screenProps.theme.bottomNav.inactiveIcon} name="chat" />
    });

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        };

        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 2000);
    }

    render(){
        let { theme } = this.props; 
        const data = demoData.chats;

        return(
            <MainContainer>
                <TopBar
                    color={theme.topBar.background}
                />
                <FlatList
                    data={data}
                    onRefresh={this.refresh}
                    refreshing={this.state.refreshing}
                    renderItem={({ item }) =>
                        <ChatBubble
                            chat={item}
                        />}
                    ListHeaderComponent={ListSeperator}
                    ListFooterComponent={ListSeperator}
                />
            </MainContainer>
        )
    }
}

export default withTheme(Chats);