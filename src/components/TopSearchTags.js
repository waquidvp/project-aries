// @flow

import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import demoData from '../utils/data';

const MainContainer = styled.View`
    height: 40px;
    justify-content: center;
    align-items: center;
`;

const ListSeperator = styled.View`width: 4px;`;

class TopSearchTags extends React.Component {
    render() {
        let data = demoData.search.tags;
        let { theme } = this.props;

        return (
            <MainContainer>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SearchTag tag={item} />}
                    ListHeaderComponent={ListSeperator}
                    ListFooterComponent={ListSeperator}
                    ListSeperator={ListSeperator}
                />
            </MainContainer>
        );
    }
}

const SearchTagContainer = styled.View`
    background-color: ${props => props.theme.searchTagColor};
    padding: 0px 12px 0px 12px;
    border-radius: 6px;
    height: 32;
    justify-content: center;
    align-items: center;
    margin: 0px 4px;
`;

const TagText = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 14px;
    color: ${props => props.theme.text.primary};
`;

const SearchTag = withTheme(({ tag }) => (
    <TouchableOpacity>
        <SearchTagContainer>
            <TagText>{tag}</TagText>
        </SearchTagContainer>
    </TouchableOpacity>
));

export default withTheme(TopSearchTags);
