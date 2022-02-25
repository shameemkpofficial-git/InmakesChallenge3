import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
}from 'react-native'

export default class Videos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.VideosText}>Videos</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    VideosText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }
})