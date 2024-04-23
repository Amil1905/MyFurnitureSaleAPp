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
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



function DetailsNew (props, {navigation}) {
    const data= props.route.params.item;
    const userpricer=props.route.params.emaildata
    console.log(data)
    console.log(userpricer)
    const [shoudshow, setShouldshow]=useState(false);
    const [shoudshows, setShouldshows]=useState(false);
    function NavigationToaddCart (data, userpricer) {
        props.navigation.navigate('AddToCard', {data:data,userpricer:userpricer})

    }

    return (
        <View >
            <View style={styles.resimview}>
                
            <Image source={{ uri: data.url }} style={styles.urunresmi}
                />

            </View>
 
                        <View style={styles.details}>
                            <View style={styles.dene}>
                            <Text style={styles.desc} >
                                {data.Description}
                              

                            </Text>
                            {shoudshows ?(
                                <View>
                                <Text style={styles.feature}>
                                Features
                                </Text>
                                <Text style={styles.textfeature}>
                                {data.features}
                                </Text>

                                </View>

                            ):null
                            
                        }
                            <View>
                            <TouchableOpacity onPress={() =>setShouldshows(!shoudshows)}>
                            <Text>
                                Read More
                             </Text>
                            </TouchableOpacity>
                            </View>
                            

  
                            </View>
                            <View style={styles.pp}>
                            <Text style={styles.ad} >
                                ${data.Price}
                            </Text>
                            <TouchableOpacity onPress={() =>NavigationToaddCart(data, userpricer) }>
                                <Text style={styles.ads}>
                                    Add To Cart
                                </Text>
                            </TouchableOpacity>


                            </View>




                           
                        </View>

                <View style={styles.viewdt}>
                    <TouchableOpacity onPress={() =>setShouldshow(!shoudshow)}>
                        <Text style={styles.pricedetais}>
                            Price details ^
                        </Text>
                        
                    </TouchableOpacity>
                </View>




        </View>
    );




};

const styles = StyleSheet.create({
    resimview:{
     justifyContent: 'center',
     alignItems: 'center',

    },

    urunresmi:{
        width:200,
        height:200,
        marginTop:10
        


    },
    details:{
        width:418,
        height:450,
        borderRadius:30,
        borderWidth:8,
        borderColor:'#DADBDD',
        justifyContent:'center',
        alignItems:'center',

     

    },
    pricedetais:{
        height:30,
        width:100,
        borderRadius:10,
        borderWidth:5,
        borderColor:'#E5E4E2',
        padding:5,
        fontWeight:'bold',
        marginTop:370,
        marginLeft:10,
        textAlign: 'center',

    },
    pricedet:{
        marginRight:300,
        height:30,
        width:110,
        borderRadius:10,
        borderWidth:5,
        borderColor:'#E5E4E2',
        padding:5,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom:-10

    },
    dene:{
        marginBottom:100

    },
    pp:{
        marginBottom:50,
        marginLeft:-300
    },
    ad:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:-50,
        marginLeft:270,
        marginBottom:50
        
    },
    desc: {
        padding:15,
        marginTop:43
    },
    feature:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:5
    },
    textfeature:{
        padding:10,
        margin:10
    },
    ads:{
        marginTop:-75,
        marginLeft:500,
        height:30,
        width:90,
        backgroundColor:'#1E90FF',
        borderRadius:10,
        borderWidth:10,
        borderColor:'#1E90FF',
        color:'#F5FFFA',
        fontWeight:'bold',
        textAlign:'center'
 

    }


   
});


export default DetailsNew;