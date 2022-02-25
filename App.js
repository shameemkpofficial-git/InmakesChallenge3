import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

import Videos from './src/TopTab/Videos';
import Chapter from "./src/TopTab/Chapter";
import Bank from "./src/TopTab/QNBank";
import Resources from "./src/TopTab/Ressources";

import { View } from "react-native";

const Stack=createStackNavigator()
const Tab = createMaterialTopTabNavigator()

function MyStack(){
  return(
    <Stack.Navigator>

      


      <Stack.Screen
      name='MyTab'
      component={MyTab}
      options={{headerShown:false}}>

      </Stack.Screen>
      

    </Stack.Navigator>
  )
}


function MyTab(){
  return(

    <View style={styles.container}>
      <View style={styles.SearchContainer}>

         

           <Searchbar 
                  style={styles.SearchField}
                  placeholder='Search for a service'></Searchbar>
                  </View>
                  

    
    <Tab.Navigator
    tabContent= {(props)=> <TabContent {...props}></TabContent>}
      screenOptions={{tabBarLabelStyle:{
      fontSize:12},
      tabBarItemStyle:{width:100},
      tabBarStyle:'black'}} >



          <Tab.Screen
            name='Videos'
            component={Videos}
            options={{
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'black',
                tabBarLabelStyle:{fontSize:15},
                tabBarIndicatorStyle:{backgroundColor:'red'}}}></Tab.Screen>

          <Tab.Screen
                      name='Chapter'
                      component={Chapter}
                      options={{
                          tabBarActiveTintColor:'red',
                          tabBarInactiveTintColor:'black',
                          tabBarLabelStyle:{fontSize:15},
                          tabBarIndicatorStyle:{backgroundColor:'red'}
                          }}></Tab.Screen>

                          <Tab.Screen
                          name='Bank'
                          component={Bank}
                          options={{
                            tabBarActiveTintColor:'red',
                            tabBarInactiveTintColor:'black',
                            tabBarLabelStyle:{fontSize:15},
                            tabBarIndicatorStyle:{backgroundColor:'red'}
                          }}></Tab.Screen>

                          <Tab.Screen
                          name='Resources'
                          component={Resources}
                          options={{
                            tabBarActiveTintColor:'red',
                            tabBarInactiveTintColor:'black',
                            tabBarLabelStyle:{fontSize:14},
                            tabBarIndicatorStyle:{backgroundColor:'red'}
                          }}></Tab.Screen>

                          


          

    </Tab.Navigator>
    </View>
  )
}



export default function App(){
  return(
    <NavigationContainer>
      <MyStack>

      </MyStack>
    </NavigationContainer>
  )
}



const styles=StyleSheet.create({
  SearchField: {
    borderWidth: 1,
    paddingLeft: 25,
    borderRadius: 20,
    borderColor: '#888888',
    fontSize: 18,
    height: 50,
    width:350,
    marginTop:15
},
container:{
  height:'100%',
  width:'100%',
  backgroundColor:'blue',
  paddingLeft:0
},
SearchContainer:{
  marginLeft:20,

}


})
