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
import { Searchbar } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

function Popular (props, {navigation}) {
    const data=props.route.params.item;
    const emaildata=props.route.params.emaildata   
    console.log(data)

    
    const [filterer, useFilterer]=useState('')
    const [filterers, useFilterers]=useState(data)
    const onChangeSearch =query => {
        useFilterer(query);
        const filtersearch= data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        useFilterers(filtersearch)
    }
    function NavigateToDetails (item,emaildata) {
        props.navigation.navigate('PopularDesc',{item:item, emaildata:emaildata})
        
    }

    return (
        <View style={styles.top}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={filterer}
            />
            <FlatList
                data={filterers}
                keyExtractor={({id}) => id}
                renderItem={({ item }) =>                    
                {
                    return <View style={styles.imageItem}>

                        <Image source={{uri:item.url}}style={styles.images}
                        /> 
                        <Text style={styles.desc}>
                            {item.description}
                        </Text>
                        <Text style={styles.pr}>
                           Price: {item.price}$
                        </Text>
                        <TouchableOpacity onPress={() => NavigateToDetails(item, emaildata) }>
                            <Text style={styles.dugme}>
                                Go To Details!
                            </Text>
                        </TouchableOpacity>


                    </View>
  
                }
            }
            />

        </View>

    );


};


const styles=StyleSheet.create ( {
    top: {
        flex:1,
        backgroundColor:'#43302E'

    },
    images: {
        width:200,
        height:200,
        borderRadius:5,
        borderWidth:10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:120
    },
    imageItem: {
        height:500,
        width:410,
        borderRadius:35,
        borderWidth:10,
        borderColor:'#FFE87C',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F3E5AB',
        marginBottom:20

        

    },
    desc:{
        marginTop:-100,
        fontWeight:'bold',
        fontSize:19

      
     
    },
    dugme:{
        height:30,
        width:100,
        backgroundColor:'#1E90FF',
        borderRadius:10,
        borderWidth:10,
        borderColor:'#1E90FF',
        padding:5,
        color:'#F5FFFA',
        fontWeight:'bold',
        margin:5
    },
    pr:{
        margin:20,
        fontWeight:'bold',
        fontSize:15
    }

})



export default Popular;