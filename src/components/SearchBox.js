// @flow

import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import IconButton from './IconButton';

const MainContainer = styled.View`
    height: 42px;
    background-color: #FFFFFF;
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
`;

export default class SearchBox extends React.Component {
  render() {
    return (
      <MainContainer>
        <LeftIconContainer>
          <Icon
            name="search"
            size={24}
            color='#747474'
          />
        </LeftIconContainer>
        <SearchInput
          placeholder="Search"
          underlineColorAndroid={'transparent'}
        />
        <IconButton
          name="more-vert"
          size={40}
        />
      </MainContainer>
    );
  }
}
