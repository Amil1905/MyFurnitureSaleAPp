import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from '../Login';
import WelcomePage from '../Navigators/WelcomePage';
import Popular from '../Navigators/Popular';
import NewArrive from '../Navigators/NewArrive';
import DetailsNew from '../Navigators/DetailsNew';
import PopularDesc from '../Navigators/PopularDesc';
import AddtoCard from '../Navigators/AddToCard';
import Sign from '../Navigators/Sign';
import Purchase from '../Navigators/Purchase';


const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}

/>
                <Stack.Screen name='Sign' component={Sign}
                />

                <Stack.Screen name='WelcomePage' component={WelcomePage}
                />
                <Stack.Screen name= 'Popular' component={Popular}
                />
                <Stack.Screen name= 'NewArrive' component={NewArrive}
                />
                <Stack.Screen name= 'DetailsNew' component={DetailsNew}
                />
                <Stack.Screen name= 'PopularDesc' component={PopularDesc}
                />
                <Stack.Screen name= 'AddToCard' component={AddtoCard}
                />
                <Stack.Screen name= 'Purchase' component={Purchase}
                />


    
            </Stack.Navigator>

        </NavigationContainer>

    );
    
};

export default App;