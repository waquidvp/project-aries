import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

export default class SplashScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#249991', alignItems: 'center'}}>
                <Image 
                    source={require('../assets/img/logo-full.png')}
                    resizeMode='contain'
                    style={{flex: 2, width: '45%', height: 'auto', marginTop: '25%'}}
                />
                <ActivityIndicator style={{flex: 3}} size='large' color='white'/>
            </View>
        );
    }
}