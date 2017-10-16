// @flow

import { AsyncStorage } from 'react-native';

let darkTheme = {
  background: '#213142',
  topBar: {
    background: '#18232f'
  },
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  card: {
    background: '#26384c',
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    iconColor: 'rgba(255, 255, 255, 0.7)'
  },
  chatBubble: {
    background: '#26384c'
  },
  fab: {
    background: '#3899C3',
    fabIcon: '#FFFFFF',
  },
  bottomNav: {
    background: '#18232f',
    activeIcon: 'rgb(255, 255, 255)',
    inactiveIcon: 'rgba(255, 255, 255, 0.7)',
    rippleColor: 'rgb(255, 255, 255)'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  searchTagColor: '#213142'
};

let lightTheme = {
  background: 'rgba(0, 0, 0, 0.10)',
  topBar: {
    background: '#F5F5F5'
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  card: {
    background: 'white',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)'
    },
    iconColor: 'rgba(0, 0, 0, 0.87)'
  },
  chatBubble: {
    background: 'rgba(255, 255, 255, 0.3)'
  },
  fab: {
    background: '#3899C3',
    fabIcon: '#FFFFFF',
  },
  bottomNav: {
    background: '#F5F5F5',
    activeIcon: '#3899C3',
    inactiveIcon: 'rgba(0, 0, 0, 0.54)',
    rippleColor: 'rgb(0, 0, 0)'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  searchTagColor: '#FFFFFF'  
};

function getTheme(callback) {
  try {
    AsyncStorage.getItem('currentTheme')
      .then((currentTheme) => {
        let theme;
        if (currentTheme !== null) {
          switch (currentTheme) {
            case 'dark':
              theme = darkTheme;
              break;

            case 'light':
              theme = lightTheme;
              break;

            default:
              theme = lightTheme;
              break;
          }
        } else {
          theme = darkTheme;
        }
        callback(theme);
      })
  } catch (error) {
    return 'Error';
  }
}

function getThemeName(callback) {
  try {
    AsyncStorage.getItem('currentTheme')
      .then((currentTheme) => {
        callback(currentTheme);
      })
  } catch (error) {
    //error handling
  }
}

function setTheme(themeName, callback) {
  try {
    AsyncStorage.setItem('currentTheme', themeName)
      .then((newTheme) => {
        callback(newTheme);
      });
  } catch (error) {
    // Error saving data
  }
}

export { getTheme, getThemeName, setTheme };
