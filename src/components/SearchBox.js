import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import IconButton from './IconButton';

const MainContainer = styled.View`
    height: 42px;
    background-color: #FFFFFF;
    border-radius: 2px;
    elevation: 2;
    padding: 0 8px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const SearchInput = styled.TextInput`
    position: absolute;
    left: 64px;
    right: 64px;
    font-size: 16px;
`;

export default class SearchBox extends React.Component {
    render(){
        let { iconColor } = this.props;

        return(
            <MainContainer>
                <IconButton
                    name='menu'
                    size={40}
                    iconSize={24}
                    iconColor={iconColor}
                />
                <SearchInput 
                    placeholder='Search'
                    underlineColorAndroid={'transparent'}
                />
                <IconButton
                    name='more-vert'
                    size={40}
                    iconSize={24}
                    iconColor={iconColor}
                />
            </MainContainer>
        )
    }
}

SearchBox.PropTypes = {
    iconColor: PropTypes.string,
}