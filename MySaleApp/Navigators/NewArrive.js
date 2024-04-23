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
import { Searchbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function NewArrive(props, {navigation}) {
    const data = props.route.params.item;
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredData, setFilteredData] = React.useState(data);
    const emaildata=props.route.params.emaildata  

    const onChangeSearch = query => {
        setSearchQuery(query);
        const filtered = data.filter(item =>
            item.Name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);



    };
    function navigationtodetails(items, emaildata) {
        props.navigation.navigate('DetailsNew', {item:items, emaildata:emaildata})

    }


    console.log("filtered data",filteredData)
    console.log("searchquery",searchQuery)

    return (
        <View style={styles.ref}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <FlatList
                data={filteredData}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <View style={styles.imageItems}>
                        <Image
                            source={{ uri: item.url }}
                            style={styles.imagess}
 
                        />
                            <View>
                                <Text style={styles.nametext}>
                                {item.Name}
                                </Text>
                                <Text style={styles.pricetext}>
                                 Price: {item.Price}$
                                </Text>
                                <Text style={styles.madeintext}>
                                {item.Madein}
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigationtodetails(item, emaildata)}>
                                    <Text style={styles.detailstext}>
                                        Details
                                        

                                    </Text>

                                </TouchableOpacity>
                            </View>
                            <View>
                            <TouchableOpacity>
                                    <Text style={styles.Card}>
                                        Add To Cart
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            

                     </View>

                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ref: {
        backgroundColor:'#43302E',
        flex:1

    },
    imageItems: {
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
    imagess: {
        width: 150,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nametext:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:25,
        fontWeight:'bold',
        textAlign: 'center',
        color:'black',
        margin:20


    },
    pricetext:{
        textAlign: 'center',
        fontSize:20,
        color:'black',
        fontStyle:'italic'



    },
    madeintext:{
        textAlign: 'center',
        fontSize:20,
        color:'black',
        margin:20,
        fontStyle:'italic'

    },
    detailstext: {
        height:30,
        width:55,
        backgroundColor:'#7E3517',
        borderRadius:10,
        borderWidth:10,
        borderColor:'#7E3517',
        padding:5,
        color:'#F5FFFA',
        fontWeight:'bold',
        margin:20,
        marginLeft:-120   
    },
    Card:{
        height:30,
        width:90,
        backgroundColor:'#7E3517',
        borderRadius:10,
        borderWidth:10,
        borderColor:'#7E3517',
        padding:5,
        color:'#F5FFFA',
        fontWeight:'bold',
        marginLeft:200,
        marginTop:-47

    }
});

export default NewArrive;
