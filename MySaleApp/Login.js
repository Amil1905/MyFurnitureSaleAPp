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




 function Login(props,{navigation}) {
  //const dataCard=props.route.params.item
  //console.log(dataCard)
  const [Email, setEmail]=useState("")
  const [Pass, setPass]=useState("")
  const [errortxt, setErortxt]=useState("")
  const [Pagepasser, setPagepasser]=useState(false)



 

  const handlLogin =() => {
    setErortxt("");
    if(!Email){
      alert("Please fill Email")
      return;
    }
    if(!Pass){
      alert("Please fill Password")
      return;
    }
    auth()
    .signInWithEmailAndPassword(Email,Pass)
    .then ((user) => {
      //console.log(user);
      if(user) {
        //setSignedIn(true)   
        setPagepasser(true)
        props.navigation.navigate('WelcomePage',{item:Email});
        //console.log(stringValues)  

        //navigator()
        


      }
      else {
        setPagepasser(false)
        //setSignedIn(false)

      }
    })
    .catch((error) => {
      console.log(error);
      if(error.code=="auth/invalid-email")
        setErortxt(error.message);
      else if (error.code === "auth/user-not-found")
        setErortxt("No User Found");
      else {
        setErortxt("Please check your email id or password");
      }  
    });
   
  };
  function navigaetosignup() {
    props.navigation.navigate('Sign')
  }

/*   const saveData = async () => {
    try {
      await AsyncStorage.setItem(stringValues, stringValue)
      alert('Data successfully saved')
      console.log(AsyncStorage)
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(stringValues);
      console.log(value);
  
      if (value !== null) {
        setInput(value);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };
  useEffect(() => {
    readData();
  }, []);
   */





 
 
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
  title='login'
  onPress={() => {
    handlLogin(Email);
    //readData();
  }}
/>
<View style={styles.sign}> 
<Button 
  title='Sing Up?'
  onPress={() => {
    navigaetosignup();
  }}
/>

</View>



  

          </View>
          {errortxt !="" ? (
                      <Text style={styles.erortext}>
                        {errortxt}

                      </Text>

          ):null}





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
    justifyContent:'center',
    marginRight:200
    
  },
  erortext: {
    marginRight:100,
    marginTop:50,
    color:"red",
    fontWeight:'bold',
    fontSize:18
    


  },
  sign:{
    alignItems:'center',
    margin:5,
    marginLeft:200,
    marginTop:-36
  }



})



export default Login;

