// @flow

import React from 'react';
import styled from 'styled-components/native';

import SearchBox from './SearchBox';

const MainContainer = styled.View`
    height: 80px;
    background-color: ${props => props.color};
    padding-top: 24px;
    elevation: 4;
`;

const InnerContainer = styled.View`    height: 56px;
    justify-content: center;
    padding: 0 8px;
`;

type Props = {
  color: string
}

const TabBar = ({ color }: Props) => (
  <MainContainer color={color}>
    <InnerContainer>
      <SearchBox />
    </InnerContainer>
  </MainContainer>
);

export default TabBar;
