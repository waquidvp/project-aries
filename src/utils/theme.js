// @flow

import { AsyncStorage } from 'react-native';

let darkTheme = {
  background: '#303030',
  topBar: {
    background: '#212121'
  },
  bottomNav: {
    background: '#212121',
    activeIcon: 'rgb(255, 255, 255)',
    inactiveIcon: 'rgba(255, 255, 255, 0.7)',
    rippleColor: 'rgb(255, 255, 255)'
  },
  divider: 'rgba(0, 0, 0, 0.12)'
};

let lightTheme = {
  background: 'rgba(0, 0, 0, 0.15)',
  topBar: {
    background: '#F5F5F5'
  },
  bottomNav: {
    background: '#F5F5F5',
    activeIcon: '#3899C3',
    inactiveIcon: 'rgba(0, 0, 0, 0.54)',
    rippleColor: 'rgb(0, 0, 0)'
  },
  divider: 'rgba(0, 0, 0, 0.12)'  
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
