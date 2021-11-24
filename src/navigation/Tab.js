import React from 'react';
import HomeScreen from '../components/screens/HomeScreen/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../themes/colors';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                      } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                      }

                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={25} color={colors.black} />;
                    },
                    // tabBarActiveTintColor: 'tomato',
                    // tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false
                  })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>  
    </Tab.Navigator>
  );
}
  
export default Tabs;