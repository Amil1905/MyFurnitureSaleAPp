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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
a=[]
function AddtoCard(props,{navigation}) {
  const pricedata=props.route.params.item
  const usert=props.route.params.userpricer
  const alls = props.route.params.dataall
  const furnitures=props.route.params.data
  const [totalPrice, setTotalPrice] = useState(0)
  //console.log(pricedata)
  //console.log(usert)
  a.push(pricedata);
  let b=0;
  for(i=0; i<a.length;i++){
    b+=a[i];
  };

  function NavigateToLogin() {
    props.navigation.navigate('Purchase',{furns:totalPrice.toFixed(2), usert:usert})
  };

  //console.log(usert);

  const stringValue = JSON.stringify(b)
  let STORAGE_KEY=usert
  const stringValues=JSON.stringify(usert)
  const saveData = async () => {
    try {
      // Get existing cart data (if any) for the user
      const existingCartData = await AsyncStorage.getItem(STORAGE_KEY);
      const parsedExistingCartData = JSON.parse(existingCartData) || [];
  
      // Add the new cart items to the existing cart data
      const updatedCartData = [...parsedExistingCartData, { imageUrl: alls.url, price: pricedata   }];
  
      // Save the updated cart data
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCartData));
  
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const saveDatas = async () => {
    try {
      // Get existing cart data (if any) for the user
      const existingCartData = await AsyncStorage.getItem(STORAGE_KEY);
      const parsedExistingCartData = JSON.parse(existingCartData) || [];
  
      // Add the new cart items to the existing cart data
      const newupdatedCartData=[...parsedExistingCartData, { fur:furnitures.url, pr:furnitures.Price}]

  
      // Save the updated cart data
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newupdatedCartData));
  
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };



  const [mydata, setMydata]=useState([]);

  const readData = async () => {
  try {
    const savedCartData = await AsyncStorage.getItem(STORAGE_KEY);
   //AsyncStorage.clear()
    
    if (savedCartData !== null) {
      const parsedSavedCartData = JSON.parse(savedCartData);
      console.log(parsedSavedCartData);
      setMydata(parsedSavedCartData);
      
      // Here you can update your cart state or perform any other actions with the saved cart data
    } else {
      console.log("No saved cart data found.");
    }
  } catch (e) {
    alert('Failed to fetch the cart data from storage');
  }
};

//console.log(alls.url)
//console.log(AsyncStorage)
console.log("mydata " ,mydata)

useEffect (() => {
  saveData();
  saveDatas();
 clearData();
 readData();

},[])
useEffect(() => {
  // Calculate total price whenever mydata changes
  let calculatedTotalPrice = mydata.reduce((total, item) => {
    if (item.price !== undefined) {
      return total + item.price;
    } else if (item.pr !== undefined) {
      return total + item.pr;
    }
    return total;
  }, 0);

  setTotalPrice(calculatedTotalPrice);
}, [mydata]);
const clearData = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setMydata([]); // Update the state to clear the displayed data
    console.log('Data successfully cleared from AsyncStorage');
  } catch (e) {
    console.log('Failed to clear data from AsyncStorage');
  }
};



  

return (
  <View style={styles.main}>
       <TouchableOpacity onPress={() => NavigateToLogin()}>
      <Text>
  Purchase
      </Text>
    </TouchableOpacity>

      <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
   
    {/* Your component JSX */}
    <TouchableOpacity onPress={() => clearData()}>
      <Text>
        DeleteAll
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => readData()}>
      <Text>
        Show Me My Cart
      </Text>
    </TouchableOpacity>
    <View style={styles.flatview}>
    <FlatList
  data={mydata}
  renderItem={({ item }) => (
    <View style={styles.inview}>
      <Text style={styles.textin}>
        {item.price !== undefined ? `$${item.price}` : `$${item.pr}`}
      </Text>
      {item.fur !== undefined || item.imageUrl !== undefined ? (
        <Image source={{ uri: item.fur || item.imageUrl }} style={styles.image} />
      ) : null}
    </View>
  )}
/>
       
     

    </View>
 


  </View>
);
}

const styles =StyleSheet.create({
  main:{
    flex:1

  },
  image:{
    height:200,
    width:200,

  },
  flatview:{

  },
  inview:{
    alignItems:'center',

  },
  textin:{
    fontSize:15,
    fontWeight:'bold'
  }




}

)

export default AddtoCard;