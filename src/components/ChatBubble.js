// @flow

import React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

const RootContainer = styled.View`
    border-radius: 6px;
`;

const TouchContainer = styled.TouchableNativeFeedback`
    flex: 1;
`;

const MainContainer = styled.View`
    background-color: ${props => props.theme.chatBubble.background};
    margin: 2px 0;
    padding: 0px 12px 0px 12px;
    height: 72px;
    align-items: center;
    flex-direction: row;
`;

const ProfilePicture = styled.Image`
    width: 44px;
    height: 44px;
    border-radius: 6px;
`;

const ChatDetails = styled.View`
    margin-left: 12px;
    flex: 1;
`;

const ChatDetailsNameTimeRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Name = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 16px;
    color: ${props => props.theme.text.primary};
`;

const LastMessage = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 14px;
    color: ${props => props.theme.text.secondary};
`;

const Time = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 12px;
    color: ${props => props.theme.text.secondary};
`;

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { chat, theme } = this.props;

    return (
      <RootContainer>
        <TouchContainer>
          <MainContainer pointerEvents='box-only'>
            <ProfilePicture source={{ uri: chat.profilePicURL }} />
            <ChatDetails>
              <ChatDetailsNameTimeRow>
                <Name>{ chat.name }</Name>
                <Time>{ chat.lastMessage.time }</Time>
              </ChatDetailsNameTimeRow>
              <LastMessage numberOfLines={1} lineBreakMode={'tail'}>{ chat.lastMessage.text }</LastMessage>
            </ChatDetails>
          </MainContainer>
        </TouchContainer>
      </RootContainer>
    );
  }
}

export default withTheme(ChatBubble);
