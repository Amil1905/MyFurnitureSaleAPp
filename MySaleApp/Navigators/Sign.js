import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  string,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Sign (props, {navigation}) {
    const [Email, setEmail]=useState("")
    const [Pass, setPass]=useState("")

    function Signer() {
        auth()
          .createUserWithEmailAndPassword(Email, Pass)
          .then(() => {
            console.log('User account created & signed in!');

            // Navigate to the WelcomePage after successful signup
            props.navigation.navigate('WelcomePage', { item: Email });
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');

            }
    
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
    
            console.error(error);
          });
      }

    




    return(


        <View style={styles.FirstView}>
          <View style={styles.LoginView}>
            <Text style={styles.NewText}>
              Email
            </Text>
            <View style={styles.loginkare}>
              <View>
              <TextInput style={styles.Yazi}
              onChangeText={(Email) =>
                setEmail(Email)
              }
              
    
              />
    
              </View>
    
    
            </View>
            <Text style={styles.NewText2}>
              Password
            </Text>
    
              <View >
              <TextInput style={styles.Yazi2}
                      onChangeText={(Pass) =>
                        setPass(Pass)
                      }
                      secureTextEntry={true}
               
    
              />
    
              </View>
              <View style={styles.loginbutton}>
              <Button 
      title='Sign up'
      onPress={() => {
        Signer();
      }}
    />

      
    
              </View>  
    
          </View>
    
    
    
        </View>
    
      );
    
    
    
    
    }
    const styles=StyleSheet.create( {
      FirstView:{
        backgroundColor:'White',
        flex:1,
    
      },
      NewText: {
        fontWeight:'bold',
        fontSize:25,
        marginRight:375,   
        color:'white',
        
    
      },
      NewText2: {
        fontWeight:'bold',
        fontSize:25,
        marginRight:320,   
        color:'white',
        
    
      },
    
      LoginView:{
        width:500,
        height:500,
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",
        flex:0.8,
        marginTop:100
      },
      loginkare:{
    
     
      },
      Yazi2:{
        color:'black',
        marginRight:400,
        width:350,
        height:70,
        backgroundColor:"white",
        margin:10,
        padding:20,
        marginRight:100,
        borderRadius:7,
        borderWidth:3,
        marginBottom:50,
      },
      Yazi: {
        color:'black',
        marginRight:400,
        width:350,
        height:70,
        backgroundColor:"white",
        margin:10,
        padding:20,
        marginRight:100,
        borderRadius:7,
        borderWidth:3,
        marginBottom:50,
    
      },
      loginbutton: {
        marginRight:100,
        alignItems:'center',
        justifyContent:'center'
        
      },
      erortext: {
        marginRight:100,
        marginTop:50,
        color:"red",
        fontWeight:'bold',
        fontSize:18
        
    
    
      }
    
    
    
    })
    

export default Sign ;