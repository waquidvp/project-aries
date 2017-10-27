// @flow

import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Divider from './Divider';
import IconButton from './IconButton';

const { height, width } = Dimensions.get('window');

const MainContainer = styled.View`
    background-color: ${props => props.theme.card.background};
    elevation: 2;
    margin: 4px 0px 4px 0px;
`;

const PostHeader = styled.View``;

const PostContent = styled.View`height: ${props => props.height};`;

const PostContentText = styled.View`padding: 24px 16px;`;

const PostImage = styled.Image`height: ${props => props.height};`;

const PostText = styled.Text`
    font-size: ${props => (props.big ? 16 : 14)};
    font-family: 'Roboto-Medium';
    color: ${props => props.theme.card.text.primary};
`;

const UserDetails = styled.View`flex-direction: row;`;

const ProfilePicture = styled.Image`
    width: 44px;
    height: 44px;
    border-radius: 6px;
`;

const UserDetailsInnerContainer = styled.View`
    flex-direction: column;
    margin-left: 12px;
    justify-content: center;
`;

const UserName = styled.Text`
    font-size: 14px;
    font-family: 'Roboto-Bold';
    color: ${props => props.theme.card.text.primary};
`;

const Caption = styled.Text`
    margin-top: 6px;
    font-size: 14px;
    font-family: 'Roboto-Medium';
    color: ${props => props.theme.card.text.primary};
`;

const TagsContainer = styled.View`flex-direction: row;`;

const Tag = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.card.text.secondary};
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
    margin-left: 12px;
`;

const LikeCount = styled.Text`
    font-size: 12px;
    font-family: 'Roboto-Bold';
    color: ${props => props.theme.card.text.primary};
`;

const CommentCount = styled.Text`
    font-size: 12px;
    font-family: 'Roboto-Bold';
    color: ${props => props.theme.card.text.primary};
`;

const PostActions = styled.View`
    flex-direction: row;
    margin-right: 12px;
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
        const likeState = this.state.liked;

        likeState === true
            ? this.setState({ liked: false })
            : this.setState({ liked: true });
    }

    render() {
        const { post, theme } = this.props;

        let LocationDetails = null;
        if (post.location) {
            LocationDetails = <LocationTag location={post.location} />;
        }

        let GetPostContent = () => {
            if (post.imgURL) {
                return (
                    <PostContent height={width}>
                        <PostImage height={width} source={{ uri: post.imgURL }} />
                    </PostContent>
                );
            } else if (post.text) {
                return (
                    <PostContentText>
                        {post.text.length < 60 ? (
                            <PostText big>{post.text}</PostText>
                        ) : (
                            <PostText>{post.text}</PostText>
                        )}
                    </PostContentText>
                );
            }
        };

        return (
            <MainContainer>
                <PostHeader>
                    {GetPostContent()}
                    <Divider />
                    <PostDetail post={post} LocationDetails={LocationDetails} />
                </PostHeader>
                <Divider />
                <PostFooter>
                    <PostStats>
                        <LikeCount>{`${post.likes} likes`}</LikeCount>
                        <CommentCount
                        >{`${post.commentNum} comments`}</CommentCount>
                    </PostStats>
                    <PostActions>
                        <Action>
                            <IconButton
                                name="send"
                                iconColor={theme.card.iconColor}
                                size={40}
                            />
                        </Action>
                        <Action>
                            <IconButton
                                name="mode-comment"
                                iconColor={theme.card.iconColor}
                                size={40}
                            />
                        </Action>
                        <Action>
                            <IconButton
                                name="repeat"
                                iconColor={theme.card.iconColor}
                                size={40}
                            />
                        </Action>
                        <Action>
                            <LikeButton
                                liked={this.state.liked}
                                toggleLike={this.toggleLike}
                                theme={theme}
                            />
                        </Action>
                    </PostActions>
                </PostFooter>
            </MainContainer>
        );
    }
}

const PostDetailContainer = styled.View`padding: 12px 12px 12px 12px;`;

const PostDetail = ({ post, LocationDetails }) => (
    <PostDetailContainer>
        <UserDetails>
            <ProfilePicture source={{ uri: post.proPicURL }} />
            <UserDetailsInnerContainer>
                <UserName>{post.user}</UserName>
                {LocationDetails}
            </UserDetailsInnerContainer>
        </UserDetails>
        {post.caption ? <Caption>{`"${post.caption}"`}</Caption> : null}
        {post.tags ? (
            <TagsContainer>
                {post.tags.map(tag => <Tag>{`#${tag}`}</Tag>)}
            </TagsContainer>
        ) : null}
    </PostDetailContainer>
);

const LikeButtonContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const LikeButton = props => (
    <LikeButtonContainer onPress={() => props.toggleLike()}>
        {props.liked === true ? (
            <Icon size={24} color="#FF5252" name="favorite" />
        ) : (
            <Icon
                size={24}
                color={props.theme.card.iconColor}
                name="favorite-border"
            />
        )}
    </LikeButtonContainer>
);

const LocationTagContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const TagCircle = styled.View`
    width: 7px;
    height: 7px;
    border-radius: 3.5px;
    background-color: ${props => props.theme.card.text.secondary};
`;

const Location = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 13px;
    padding-left: 4px;
    color: ${props => props.theme.card.text.secondary};
`;

const LocationTag = props => (
    <LocationTagContainer>
        <TagCircle />
        <Location>{props.location}</Location>
    </LocationTagContainer>
);

export default withTheme(PostCard);
