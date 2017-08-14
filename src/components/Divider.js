import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const Line = styled.View`
    height: 1px;
    margin-top: ${props => props.marginTop};
    margin-right: ${props => props.marginRight};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    background-color: ${props => props.theme.divider};
`;

class Divider extends React.Component {
    render(){
        let { marginTop, marginRight, marginBottom, marginLeft} = this.props;
        
        return(
            <Line marginTop={marginTop} marginRight={marginRight} marginBottom={marginBottom} marginLeft={marginLeft}/>
        );
    }
}

Divider.defaultProps = {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
}

Divider.PropTypes = {
    marginTop: PropTypes.number,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
}

export default withTheme(Divider);