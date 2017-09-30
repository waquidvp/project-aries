// @flow

import { AsyncStorage } from 'react-native';

let darkTheme = {
  background: '#303030',
  topBar: {
    background: '#212121'
  },
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  card: {
    background: '#424242',
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
  chatBubble: {
    background: '#424242'
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
    }
  },
  chatBubble: {
    background: 'rgba(0, 0, 0, 0.05)'
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
