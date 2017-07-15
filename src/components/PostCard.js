// @flow

import React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

const MainContainer = styled.View`
    height: 400px;
    background-color: white;
    elevation: 2;
    margin: 8px 8px;
    border-radius: 2px;
`;

const PostContent = styled.View`

`;

const PostDetail = styled.View`

`;

const PostFooter = styled.View`
    
`;

class PostCard extends React.Component {
    render(){
        return(
            <MainContainer>
                <PostContent>

                </PostContent>
                <PostDetail>

                </PostDetail>
                <PostFooter>

                </PostFooter>
            </MainContainer>
        )
    }
}

export default withTheme(PostCard);