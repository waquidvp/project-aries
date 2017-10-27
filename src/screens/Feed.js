import React from 'react';
import { FlatList, LayoutAnimation, UIManager } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropsTypes from 'prop-types';

import TopBar from '../components/TopBar';
import PostCard from '../components/PostCard';
import FAB from '../components/FAB';
import demoData from '../utils/data';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
`;

const ListSeperator = styled.View`height: 4px;`;

const Header = styled.View`height: 21px;`;

const FABContainer = styled.View`
    position: absolute;
    right: 16px;
    bottom: 16px;
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

        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);

        this.state = {
            refreshing: false,
            isActionButtonVisible: true
        };

        this.refresh = this.refresh.bind(this);
    }

    listViewOffset = 0;

    onScroll = event => {
        // Simple fade-in / fade-out animation
        const CustomLayoutLinear = {
            duration: 100,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            },
            update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            }
        };
        // Check if the user is scrolling up or down by confronting the new scroll position with your own one
        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction =
            currentOffset > 0 && currentOffset > this.listViewOffset
                ? 'down'
                : 'up';
        // If the user is scrolling down (and the action-button is still visible) hide it
        const isActionButtonVisible = direction === 'up';
        if (isActionButtonVisible !== this.state.isActionButtonVisible) {
            LayoutAnimation.configureNext(CustomLayoutLinear);
            this.setState({ isActionButtonVisible });
        }
        // Update your scroll position
        this.listViewOffset = currentOffset;
    };

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
                <FlatList
                    showsVerticalScrollIndicator={false}
                    onScroll={this.onScroll}
                    data={data}
                    onRefresh={this.refresh}
                    refreshing={this.state.refreshing}
                    renderItem={({ item }) => <PostCard post={item} />}
                    ListHeaderComponent={Header}
                    ListFooterComponent={ListSeperator}
                />
                {this.state.isActionButtonVisible ? (
                    <FABContainer>
                        <FAB
                            name="add"
                            color={theme.fab.background}
                            iconColor={theme.fab.fabIcon}
                            elevation={6}
                        />
                    </FABContainer>
                ) : null}
            </MainContainer>
        );
    }
}

export default withTheme(Feed);
