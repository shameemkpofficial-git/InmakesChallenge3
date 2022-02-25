import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

export default class Chapter extends Component{
    render(){
        return(
            <View style={styles.Component}>
                <Text style={styles.ChapterText}>Chapter</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    Component:{
        height:'100%',
        width:'100%',
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    ChapterText:{
        fontSize:24,
        fontWeight:'bold',
        color:"white"
    }
})