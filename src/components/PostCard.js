// @flow

import React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Divider from './Divider';
import IconButton from './IconButton';

const MainContainer = styled.View`
    background-color: white;
    elevation: 2;
    margin: 4px 8px 4px 8px;
    border-radius: 2px;
`;

const PostContent = styled.View`
    height: 350px;
`;

const PostImage = styled.Image`
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    height: 350px;
`;

const PostDetail = styled.View`
    padding: 12px 16px 12px 16px;
`;

const UserName = styled.Text`
    font-size: 14px;
    font-family: 'Roboto-Bold';
    color: black;
`;

const Caption = styled.Text`
    font-size: 14px;
    font-family: 'Roboto-Bold';
    color: black;
`;

const TagsContainer = styled.View`
    flex-direction: row;
`;

const Tag = styled.Text`
    font-size: 14px;
    color: #95989A;
    padding-right: 4px;
`;

const PostFooter = styled.View`
    height: 48px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const PostStats = styled.View`
    flex-direction: column;
    margin-left: 16px;
`;

const LikeCount = styled.Text`
    font-size: 12px;
    font-family: 'Roboto-Bold';
    color: black;
`;

const CommentCount = styled.Text`
    font-size: 12px;
    font-family: 'Roboto-Bold';
    color: black;
`;

const PostActions = styled.View`
    flex-direction: row;
    margin-right: 16px;
    align-items: flex-end;
    justify-content: flex-end;
`;

const Action = styled.View`padding-left: 8px;`;

class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.toggleLike = this.toggleLike.bind(this);
    }

    componentWillMount() {
        this.setState({ liked: this.props.post.liked });
    }

    toggleLike() {
        let likeState = this.state.liked;

        likeState === true
            ? this.setState({ liked: false })
            : this.setState({ liked: true });
    }

    render() {
        const { post } = this.props;

        return (
            <MainContainer>
                <PostContent>
                    <PostImage source={{ uri: post.imgURL }} />
                </PostContent>
                <PostDetail>
                    <UserName>{post.user.toUpperCase()}</UserName>
                    <Caption>{`"${post.caption}"`}</Caption>
                    <TagsContainer>
                        {
                            post.tags.map((tag) => {
                                return <Tag>{`#${tag}`}</Tag>
                            })
                        }
                    </TagsContainer>
                </PostDetail>
                <Divider />
                <PostFooter>
                    <PostStats>
                        <LikeCount>{`${post.likes} likes`}</LikeCount>
                        <CommentCount>{`${post.commentNum} comments`}</CommentCount>
                    </PostStats>
                    <PostActions>
                        <Action>
                            <IconButton
                                name="send"
                                iconColor="black"
                                size={40}
                            />
                        </Action>
                        <Action>
                            <IconButton
                                name="mode-comment"
                                iconColor="black"
                                size={40}
                            />
                        </Action>
                        <Action>
                            <IconButton
                                name="repeat"
                                iconColor="black"
                                size={40}
                            />
                        </Action>
                        <Action>
                            <LikeButton
                                liked={this.state.liked}
                                toggleLike={this.toggleLike}
                            />
                        </Action>
                    </PostActions>
                </PostFooter>
            </MainContainer>
        );
    }
}

const LikeButtonContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const LikeButton = props => {
    return (
        <LikeButtonContainer onPress={() => props.toggleLike()}>
            {props.liked === true
                ? <Icon size={24} color="red" name="favorite" />
                : <Icon size={24} color="black" name="favorite-border" />}
        </LikeButtonContainer>
    );
};

export default withTheme(PostCard);
