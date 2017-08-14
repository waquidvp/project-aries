import React from 'react';
import { FlatList } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropsTypes from 'prop-types';

import TopBar from '../components/TopBar';
import PostCard from '../components/PostCard';
import demoData from '../utils/data';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
`;

const ListSeperator = styled.View`
  height: 4px;
`;

class Feed extends React.Component {
    static propTypes = {
        theme: PropsTypes.object.isRequired
    };

    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Feed',
        tabBarIcon: (
            <Icon
                size={24}
                color={screenProps.theme.bottomNav.inactiveIcon}
                name="view-agenda"
            />
        )
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

    render() {
        const { theme } = this.props;
        const data = demoData.feed;

        return (
            <MainContainer>
                <TopBar color={theme.topBar.background} />
                <FlatList
                    data={data}
                    onRefresh={this.refresh}
                    refreshing={this.state.refreshing}
                    renderItem={({ item }) =>
                        <PostCard
                            post={item}
                            /* onPress={() =>
                                screenProps.stackNavigation.navigate(
                                    'ViewPost',
                                    { news: item }
                                )} */
                        />}
                    ListHeaderComponent={ListSeperator}
                    ListFooterComponent={ListSeperator}
                />
            </MainContainer>
        );
    }
}

export default withTheme(Feed);
