// @flow

import React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import IconButton from './IconButton';

const MainContainer = styled.View`
    height: 42px;
    background-color: ${props => props.theme.card.background};
    border-radius: 6px;
    elevation: 2;
    padding: 0 8px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const LeftIconContainer = styled.View`
    padding-left: 8px;
`;

const SearchInput = styled.TextInput`
    position: absolute;
    left: 64px;
    right: 64px;
    font-size: 16px;
    color: ${props => props.theme.card.text.primary};
`;

class SearchBox extends React.Component {
  render() {
    let { theme } = this.props;

    return (
      <MainContainer>
        <LeftIconContainer>
          <Icon
            name="search"
            size={24}
            color={theme.card.searchBarElements}
          />
        </LeftIconContainer>
        <SearchInput
          placeholder="Search"
          underlineColorAndroid={'transparent'}
          placeholderTextColor={theme.card.text.secondary}
          returnKeyType='search'
        />
        <IconButton
          name="more-vert"
          size={40}
          iconColor={theme.card.searchBarElements}
        />
      </MainContainer>
    );
  }
}

export default withTheme(SearchBox);