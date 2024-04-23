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
import Stars from 'react-native-stars';
import { useNavigation } from '@react-navigation/native';

function PopularDesc (props, {navigation}) {
    const data=props.route.params.item
    const userpricer=props.route.params.emaildata
    console.log(userpricer)
    console.log(data);
    const [shoudshow, setShouldshow]=useState(false);
    const [kupon, setKupon]=useState('');
    const [reducedPrice, setReducedPrice] = useState(data.price);
    function kuponkontrol () {
        console.log(kupon)
        if(kupon==data.kupon){

            
            setReducedPrice(data.price=data.price*0.75);           
        }
        
        else {
            return setReducedPrice(data.price);
        }

    }
    useEffect(() => {
        if (kupon === data.kupon) {
            setReducedPrice(data.price * 0.75);
            alert('You Won 25% sale');
        } else {
            setReducedPrice(data.price);
        }
    }, [kupon, data.kupon, data.price]);

    function NavigateToAddToCard (item, userpricer, dataall) {
        props.navigation.navigate('AddToCard',{item:item, userpricer:userpricer, dataall:dataall})

    }
    console.log(reducedPrice)

 

    return (
        <View>
                        <Image source={{uri:data.url}} style={styles.Imagea}

                    />
            {
                shoudshow ? (
                    <View style={styles.altview}>
                                <TouchableOpacity onPress={() =>setShouldshow(!shoudshow)}>
                                <Text style={styles.pricedet}>
                                  Go Back
                                 </Text>
                        
                            </TouchableOpacity>
                            <View style={styles.indirimkuponu}>
                                <TextInput style={styles.input}
                                placeholder='COUPON'
                                onChangeText={(kupon) =>
                                    setKupon(kupon)
                                  }
                                />
                                    

                                

                            </View>

                            <View>
                            <Stars style={styles.stars}
                                            display={data.star}
                                            spacing={5}
                                            count={5}
                                            starSize={13}
                                            fullStar= {require('./starFilled.png')}
                                            emptyStar= {require('./starEmpty.png')}/>   
                                            <Text style={styles.text1}>
                                                ${reducedPrice}</Text>     
                            </View>
                            <View>
                                <TouchableOpacity  onPress={() => NavigateToAddToCard(reducedPrice, userpricer, data) }>
                                    <Text style={styles.sepet}>
                                        Add To Cart
                                    </Text>
                                    </TouchableOpacity>
                                
                            </View>

                                     
                </View>

                ):null
            }
             <View style={styles.viewdt}>
                    <TouchableOpacity onPress={() =>setShouldshow(!shoudshow)}>
                        <Text style={styles.pricedetais}>
                            Price details
                        </Text>
                        
                    </TouchableOpacity>
            </View>

            <View style={styles.altviews}>
            <Text style={styles.contenttxt}>
                Contents
            </Text>
            <Text style={styles.desc}>
               
                {data.in}

            </Text>

            </View>



 








        </View>

    );
};
const styles = StyleSheet.create ({
    Imagea:{
        width:412,
        height:250,
        
    },
    altview:{
        width:418,
        height:400,
        borderRadius:30,
        borderWidth:8,
        borderColor:'#DADBDD',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15

    },
    altviews:{
        width:418,
        height:400,
        borderRadius:30,
        borderWidth:8,
        borderColor:'#DADBDD',
        justifyContent:'center',
        alignItems:'center',

    },
    Imageas:{
        height:250,
        width:400
    },
    desc:{
        marginTop:20,
        margin:10

    },
    text1: {
        marginTop:50,
        marginLeft:-100,
        fontWeight:'bold',
        fontSize:18,
        color:'black'


    },
    pricedet:{
        marginTop:-95
    },
    indirimkuponu:{
        width:300,
        height:60,
        borderRadius:10,
        borderWidth:8,
        borderColor:'#DADBDD',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50

    },
    input:{

        alignItems:'center',


    },
    contenttxt:{
        marginTop:-100
        
    },
    sepet:{
        width:90,
        height:25,
        marginLeft:235,
        marginTop:-23,
        backgroundColor:'#1E90FF',
        textAlign:'center',
        borderRadius:10,
        borderWidth:10,
        borderColor:'#1E90FF',
        color:'#F5FFFA',
        fontWeight:'bold',

        
    }



})
export default PopularDesc;