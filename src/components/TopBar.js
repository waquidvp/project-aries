import React from 'react';
import styled from 'styled-components/native';

import SearchBox from './SearchBox';

const MainContainer = styled.View`
    height: 80px;
    background-color: ${props => props.color};
    padding-top: 24px;
    elevation: 4;
`;

const InnerContainer = styled.View`
    height: 56px;
    justify-content: center;
    padding: 0 8px;
`;

export default class TopBar extends React.Component {
    render(){
        let { color, iconColor } = this.props;

        return(
            <MainContainer color={color}>
                <InnerContainer>
                    <SearchBox iconColor={iconColor}/>
                </InnerContainer>
            </MainContainer>
        )
    }
}