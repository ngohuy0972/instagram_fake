import React, { useEffect, useReducer, useMemo } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Animated, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/components/screens/LoginScreen';
import Tabs from './src/navigation/Tab';
import { AuthContext } from './src/components/context';
import style from './src/themes/style';
import MessageScreen from './src/components/screens/MessageScreen/MessageScreen';
import DirectMessageScreen from './src/components/screens/MessageScreen/DirectMessageScreen';
import CommentScreen from './src/components/screens/CommentScreen/CommentScreen';
import { initialLoginState, loginReducer} from './src/store/reducers/loginReducer';
import { Provider } from 'react-redux';
import { store } from './src/store';
 
 const Stack = createNativeStackNavigator();

 const App = () => {
   
  const [state, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userName', userName);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },

    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken, userName;
      userToken = null;
      userName = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        userName = await AsyncStorage.getItem('userName');
      } catch(e) {
        console.log(e);
      }
      // console.log('username: ', userName);
      dispatch({ type: 'RETRIEVE_TOKEN',id: userName , token: userToken });
    }, 1000);
  }, []);

  if( state.isLoading ) {
    return(
      <View style={style.isLoading}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <Provider store={store}>
      <AuthContext.Provider value={{state, authContext}}>
        <NavigationContainer>
          { state.userToken !== null ? (
            <Stack.Navigator >
              {/* headerShown: false remove top bar in screens */}
              <Stack.Screen name="Tab" component={Tabs} options={{headerShown: false}} />
              <Stack.Screen name="Message" component={MessageScreen} options={{headerShown: false}} />
              <Stack.Screen name="Comment Screen" component={CommentScreen} options={{headerShown: false}} />
              <Stack.Screen name="Direct Message" component={DirectMessageScreen} options={{headerShown: false}} />

            </Stack.Navigator>
          )
        :
          <LoginScreen/>
        }
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
      
  );
}
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;