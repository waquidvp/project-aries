/* @flow*/

import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainContainer = styled.View`
    border-radius: ${props => props.size / 2};
`;

const IconView = styled.View`
    width: ${props => props.size};
    height: ${props => props.size};
    justify-content: center;
    align-items: center
`;

export default class IconButton extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    iconSize: PropTypes.number.isRequired,
    iconColor: PropTypes.string,
    rippleColor: PropTypes.string,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    size: 48,
    iconSize: 24,
    iconColor: '#747474',
    rippleColor: null,
    onPress: null,
  }

  render() {
    const { name, size, iconSize, iconColor, rippleColor, onPress } = this.props;
    return (
      <MainContainer size={size}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(rippleColor, true)}
          onPress={onPress}
        >
          <IconView size={size} pointerEvents="box-only">
            <Icon name={name} size={iconSize} color={iconColor} />
          </IconView>
        </TouchableNativeFeedback>
      </MainContainer>
    );
  }
}
