import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RoundButton = styled.View`
    border-radius: ${props => props.mini ? 20 : 28};
    elevation: ${props => props.elevation};
    background: ${props => props.color};
`;

const IconContainer = styled.View`
    height: ${props => props.mini ? 40 : 56};
    width: ${props => props.mini ? 40 : 56};
    justify-content: center;
    align-items: center;
`;

export default class FAB extends React.Component {
    render() {
        var { name, mini, elevation, color, iconColor, style, onPress } = this.props;
        return(
            <RoundButton mini={mini} elevation={elevation} color={color} style={style}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(undefined, true)}  onPress={onPress}>
                    <IconContainer mini={mini} elevation={elevation} color={color} pointerEvents='box-only'>
                        <Icon name={name} size={24} color={iconColor ? iconColor : 'white'}/>
                    </IconContainer>
                </TouchableNativeFeedback>
            </RoundButton>
        );
    }
}

FAB.PropTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    mini: PropTypes.bool,
    elevation: PropTypes.number,
    onPress: PropTypes.func
}