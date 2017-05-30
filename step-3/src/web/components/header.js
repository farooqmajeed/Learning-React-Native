import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Headers extends Component {
    render() {
        return (
            <View style={styles.header} >
                <Text style={styles.text}>{this.props.header}</Text>
            </View>
        );
    }
}

const styles = {
    header : {
        backgroundColor : '#F8F8F8',
        justifyContent  : 'center',
        alignItems : 'center',
        height : 50
    },
    text : {
        fontSize : 20,
        color : 'black'
    }
}