import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
} from 'react-native'


export default class Resources extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.ResourcesText}>Resources</Text>
            </View>
        )
    }

}

const styles= StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',

    },
    ResourcesText:{
        fontWeight:'bold',
        fontSize:24,
        color:'#fff'
    }
})