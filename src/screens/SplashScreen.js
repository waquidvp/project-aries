import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

export default class SplashScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#3899C3', alignItems: 'center'}}>
                <Image 
                    source={require('../assets/img/logo.png')}
                    resizeMode='contain'
                    style={{flex: 2, width: '33%', height: 'auto', margin: 20}}
                />
                <ActivityIndicator style={{flex: 2}} size='large' color='white'/>
            </View>
        );
    }
}