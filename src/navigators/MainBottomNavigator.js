// @flow

import React from 'react';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import { withTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Feed from '../screens/Feed';
import Search from '../screens/Search';
import Chats from '../screens/Chats';
import Account from '../screens/Account';

const createRootNavigator = (theme) => {
  return TabNavigator({
    Feed: { screen: Feed },
    Search: { screen: Search },
    Chats: { screen: Chats },
    Account: { screen: Account }
  }, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: NavigationComponent,
    animationEnabled: false,
    tabBarOptions: {
      bottomNavigationOptions: {
        style: {
          borderTopWidth: 0,
          elevation: 8,
        },
        labelColor: theme.bottomNav.inactiveIcon,
        rippleColor: theme.bottomNav.rippleColor,
        backgroundColor: theme.bottomNav.background,
        activeLabelColor: theme.bottomNav.activeIcon,
        tabs: {
          Feed: {
            activeIcon: <Icon size={24} color={theme.bottomNav.activeIcon} name="view-agenda" />,
          },
          Search: {
            activeIcon: <Icon size={24} color={theme.bottomNav.activeIcon} name="search" />,
          },
          Chats: {
            activeIcon: <Icon size={24} color={theme.bottomNav.activeIcon} name="chat" />,
          },
          Account: {
            activeIcon: <Icon size={24} color={theme.bottomNav.activeIcon} name="account-circle" />,
          },
        },
      },
    },
  });
};

class MainBottomNavigator extends React.Component {
  render() {
    let { theme } = this.props;
    let Navigator = createRootNavigator(theme);

    return (
      <Navigator screenProps={{ theme }} />
    );
  }
}

export default withTheme(MainBottomNavigator);
