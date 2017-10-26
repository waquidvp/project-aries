// @flow

import React from 'react';
import { FlatList } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TopBar from '../components/TopBar';
import CatagoryCard from '../components/CatagoryCard';
import demoData from '../utils/data';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
`;

const ListHeaderFooter = styled.View`
    height: 5px;
`;

class Search extends React.Component {
    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Search',
        tabBarIcon: (
            <Icon
                size={24}
                color={screenProps.theme.bottomNav.inactiveIcon}
                name="search"
            />
        )
    });

    render() {
        let { theme } = this.props;
        let data = demoData.search.catagories;        

        return (
            <MainContainer>
                <TopBar topSearches={true} />
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <CatagoryCard catagory={item} />}
                    ListHeaderComponent={ListHeaderFooter}
                    ListFooterComponent={ListHeaderFooter}
                />
            </MainContainer>
        );
    }
}

export default withTheme(Search);
