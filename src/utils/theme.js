import { AsyncStorage } from 'react-native';

let darkTheme = {
    background: 'rgba(29,29,33, 0.73)',
    bottomNav: {
        background: '#1D1D21',
        activeIcon: 'rgb(255, 255, 255)',
        inactiveIcon: 'rgba(255, 255, 255, 0.7)',
        rippleColor: 'rgb(255, 255, 255)'
    }
};

let lightTheme = {
    background: '#FAFAFA',    
    bottomNav: {
        background: '#FFFFFF',
        activeIcon: '#3899C3',
        inactiveIcon: 'rgba(0, 0, 0, 0.54)',
        rippleColor: 'rgb(0, 0, 0)'
    }
};


function getTheme(callback){
    try {
        AsyncStorage.getItem('currentTheme')
            .then((currentTheme) => {
                let theme;
                if (currentTheme != null) {
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

function getThemeName(callback){
    try {
        AsyncStorage.getItem('currentTheme')
            .then((currentTheme) => {
                callback(currentTheme);
            })
    } catch (error) {
        //error handling
    }
}

function setTheme(themeName, callback){
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