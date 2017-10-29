// @flow

import { AsyncStorage } from 'react-native';

let darkTheme = {
  background: '#37474F',
  topBar: {
    background: '#263238'
  },
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  card: {
    background: '#405059',
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    iconColor: 'rgba(255, 255, 255, 0.7)',
    searchBarElements: 'rgba(255, 255, 255, 1)'
  },
  chatBubble: {
    background: '#405059'
  },
  fab: {
    background: '#249991',
    fabIcon: '#FFFFFF',
  },
  bottomNav: {
    background: '#263238',
    activeIcon: 'rgb(255, 255, 255)',
    inactiveIcon: 'rgba(255, 255, 255, 0.7)',
    rippleColor: 'rgb(255, 255, 255)'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  searchTagColor: '#37474F'
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
    iconColor: 'rgba(0, 0, 0, 0.87)',
    searchBarElements: 'rgba(0, 0, 0, 0.54)'
  },
  chatBubble: {
    background: 'rgba(255, 255, 255, 0.3)'
  },
  fab: {
    background: '#249991',
    fabIcon: '#FFFFFF',
  },
  bottomNav: {
    background: '#F5F5F5',
    activeIcon: '#249991',
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
