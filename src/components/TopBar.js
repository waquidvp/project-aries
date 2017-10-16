// @flow

import React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import SearchBox from './SearchBox';
import TopSearchTags from './TopSearchTags';

const MainContainer = styled.View`
    background-color: ${props => props.theme.topBar.background};
    padding-top: 24px;
    elevation: 4;
`;

const InnerContainer = styled.View`
    height: 56px;
    justify-content: center;
    padding: 0 8px;
`;

const TabBar = ({ topSearches }) => (
    <MainContainer>
        <InnerContainer>
            <SearchBox />
        </InnerContainer>
        {topSearches == true ? <TopSearchTags /> : null}
    </MainContainer>
);

export default withTheme(TabBar);
