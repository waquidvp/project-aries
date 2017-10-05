// @flow

import React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Divider from './Divider';
import IconButton from './IconButton';

const MainContainer = styled.View`
    background-color: ${props => props.theme.card.background};
    elevation: 2;
    margin: 4px 4px 4px 4px;
    border-radius: 6px;
`;

const PostContent = styled.View`
    height: 350px;
`;

const PostImage = styled.Image`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    height: 350px;
`;

const PostDetail = styled.View`
    padding: 12px 12px 12px 12px;
`;

const UserDetails = styled.View`
    flex-direction: row;
    margin-bottom: 6px;
`

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
    font-size: 14px;
    font-family: 'Roboto-Medium';
    color: ${props => props.theme.card.text.primary};
`;

const TagsContainer = styled.View`
    flex-direction: row;
`;

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
    if (post.location){
      LocationDetails = <LocationTag location={post.location}/>
    }

    return (
      <MainContainer>
        <PostContent>
          <PostImage source={{ uri: post.imgURL }} />
        </PostContent>
        <PostDetail>
          <UserDetails>
            <ProfilePicture source={{ uri: post.proPicURL }}/>
            <UserDetailsInnerContainer>
              <UserName>{post.user}</UserName>
              { LocationDetails }
            </UserDetailsInnerContainer>  
          </UserDetails>
          <Caption>{`"${post.caption}"`}</Caption>
          <TagsContainer>
            {
              post.tags.map(tag => <Tag>{`#${tag}`}</Tag>)
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

const LikeButtonContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const LikeButton = props => (
  <LikeButtonContainer onPress={() => props.toggleLike()}>
    {props.liked === true
      ? <Icon size={24} color="red" name="favorite" />
      : <Icon size={24} color={props.theme.card.iconColor} name="favorite-border" />}
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
