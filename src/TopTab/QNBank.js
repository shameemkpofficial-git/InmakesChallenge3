import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text
} from 'react-native'

export default class Bank extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.BankText}>Qn - Bank</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    BankText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
})