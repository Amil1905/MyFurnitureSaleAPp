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
import firestore from '@react-native-firebase/firestore';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Stars from 'react-native-stars';
import { useRoute } from '@react-navigation/native';


function WelcomePage(props,{navigation}) {
    const [productions, setProductions]=useState([]);
    const [resimler, setResimler]=useState([]);
    const [news, setnews]=useState([]);
    const [sales, setSales]=useState([]);
    const email= props.route.params.item
      
    
    useEffect(() => {
        const fetchData = async () => {
            const data = [];
            const imageursi=[];
            const Arrival=[];
            const saler=[]
            const querySnapshot = await firestore().collection('Products').get();
            const ImageSnapshot= await firestore().collection('Images').get();
            const ArrivalSnapshot= await firestore().collection('New').get();
            const sale=await firestore().collection('Sale').get();

            
            sale.forEach(documentSnapshot => {
               saler.push(documentSnapshot.data()) 
                
            });
            setSales(saler)


            querySnapshot.forEach(documentSnapshot => {
                data.push(documentSnapshot.data());
            });

            setProductions(data);

            ImageSnapshot.forEach(documentSnapshot => {
                imageursi.push(documentSnapshot.data());
               
                

            });
            setResimler(imageursi);

            ArrivalSnapshot.forEach(documentSnapshot => {
                Arrival.push(documentSnapshot.data());

            });
            setnews(Arrival);


           
        };


        fetchData();
    }, []);

    //console.log(resimler);
    //console.log(news);

    function NavigatePopular(emaildata) {
        props.navigation.navigate('Popular', {item:resimler, emaildata:emaildata});
    }

    function NavigateNewArrive (emaildata) {
        props.navigation.navigate('NewArrive',{item:news, emaildata:emaildata});

    }
    function NavigatePopulars(items, emaildata) {
        props.navigation.navigate('PopularDesc', {item:items, emaildata:emaildata});
    }
    function NavigatetoDetailsNew (itemp, emaildata) {
        props.navigation.navigate('DetailsNew', {item:itemp, emaildata:emaildata});

    }




    return (
        <View style={styles.ref}>

                <View style={styles.top}>
                    <Text style={styles.TextSales}>
                        Sale Up
                    </Text>
                <FlatList style={styles.topflat}
                    data={sales}
                    renderItem={({item}) =>
                    {
                        return <View>
                                                                    
                            <Image
                                source={{uri:item.url}}style={styles.imagefirst}
                                horizontal={true} 

                            />
                                
                            <Text style={styles.TextSale}>
                                 
                              To {item.Sale}% Off
                            </Text>



                        </View>
                       

                    }
                }
                />
                <TouchableOpacity>
                    <Text style={styles.BUY}>
                        BUY NOW!
                    </Text>

                </TouchableOpacity>
  

                </View>

            <View style={styles.imagesW} >


                <TouchableOpacity onPress={() => NavigatePopular(email)}>
                    <Text style={styles.see}> 
                     See All
                    </Text>
                    
               </TouchableOpacity>
               <Text style={styles.imagePop}>
                    Popular             
                </Text>
                <FlatList style={styles.imageFF}
                     data={resimler.slice(0, 5) }
                    keyExtractor={({id}) => id}
                    renderItem={({item}) =>
                    {
                       return<View style={styles.imageItem} >
                                    <TouchableOpacity onPress={() => NavigatePopulars(item,email)}>
                                    <Image source={{uri:item.url}}style={styles.images}
                                    /> 
                                    </TouchableOpacity>
                             </View>
                    }
                }
                horizontal={true} 
                />
            </View>
            <View>
                <Text style={styles.newtextarriv}>
                    New Arrivals
                </Text>
                <TouchableOpacity onPress={() => NavigateNewArrive(email)}>
                    <Text style={styles.sees}> 
                     See All
                    </Text>
               </TouchableOpacity>
            <FlatList style={styles.imageFF}
                    data={news.slice(0,2)}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) =>
                    {
                       return<View style={styles.imageItems} >
                                    <Image source={{uri:item.url}}style={styles.imagess}
                                    />
                                    <Text style={styles.ImageName}>
                                        {item.Name}
                                    </Text>
                                    <View style={{alignItems:'center'}}>
                                        <Stars
                                            display={item.star}
                                            spacing={5}
                                            count={5}
                                            starSize={13}
                                            fullStar= {require('./starFilled.png')}
                                            emptyStar= {require('./starEmpty.png')}/>
                                            
                                            
                                        </View>

                                    <TouchableOpacity style={styles.priceitem}  onPress={() => NavigatetoDetailsNew(item, email)}>
                                    <Text style={styles.pricetag}>
                                        {item.Price}$
                                        
                                    </Text>

                                    </TouchableOpacity>


                             </View>
                    }
                }
                horizontal={true} 
                />


            </View>
        </View>
    );
}



const styles=StyleSheet.create ( {
    top: {
        backgroundColor:'#F5F5F5',
        width:500,
        height:200
     

    },
    ref: {
        flex:1,

        backgroundColor:'white'
    

    },
    topflat:{
        flexDirection:"row",


    },
    TextSale: {
        fontSize:30,
        marginLeft:5,
        marginTop:-140,
        color:'black',
        fontWeight:'bold',
        


    },
    TextSales: {
        fontSize:30,
        color:'black',
        fontWeight:'bold',
        


    },
    imagesW:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:-25

    },
    BUY: {
        height:30,
        width:80,
        backgroundColor:'#1E90FF',
        borderRadius:10,
        borderWidth:10,
        borderColor:'#1E90FF',
        padding:5,
        color:'#F5FFFA',
        fontWeight:'bold',
        marginTop:-75
        
    },
    images: {
        width:70,
        height:70,
        borderRadius:5,
        borderWidth:10,


        
    },
    imageFF:{
        flexDirection:"row",
    },
    imageItem: {
        marginRight: 10,
    },
    imagePop: {
        fontSize:20,
        fontWeight:'bold',
        marginRight:340,
        color:'black',
    },
    see: {
        marginLeft:340,
        fontSize:12,
        fontWeight:'bold',
        color:'#1E90FF',
        justifyContent:'center',
        marginBottom:-40,
        padding:15,
        marginTop:10

    },
    tocuh: {
        height:50,
        width:50,

    },
    imageItems: {
        height:200,
        width:150,
        backgroundColor:'#F5F5F5',
        marginLeft:50,
        borderRadius:35,
        borderWidth:10,
        borderColor:'#F5F5F5',

    },
    imagess:{
        width:90,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginTop:10
  

    },
    pricetag: {
        height:30,
        width:45,
        backgroundColor:'#1E90FF',
        borderRadius:10,
        borderWidth:10,
        borderColor:'#1E90FF',
        padding:5,
        color:'#F5FFFA',
        fontWeight:'bold',
        margin:5


    },
    priceitem:{
        height:30,
        width:45

    },
    ImageName: {
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        marginTop:10,
        margin:8

    },
    newtextarriv: {
        marginTop:50,
        fontSize:20,
        fontWeight:'bold',
        marginLeft:53,
        color:'black',
        marginBottom:-10
    },
    sees:{
        marginLeft:340,
        fontSize:12,
        fontWeight:'bold',
        color:'#1E90FF',
        margin:5,
        marginTop:-10

    },
    imagefirst: {
        width:110,
        height:190,
        marginLeft:220,
        marginTop:-30,
        

    }
})

export default WelcomePage;








/*     useEffect(() => {
        const fetchData = async () => {
            const usersCollection = firestore().collection('Products');
            console.log(usersCollection);

            const userDocument = await firestore().collection('Products').doc('Product').get();

            const pricetag=userDocument.get("Price");


            const product2Snapshot = await firestore().collection('Products').doc('Product2').get();
            const productName = product2Snapshot.get("price");
        };

        fetchData();
    }, []); */


