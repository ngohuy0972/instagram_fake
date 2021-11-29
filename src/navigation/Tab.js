import React from 'react';
import HomeScreen from '../components/screens/HomeScreen/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../themes/colors';
import SearchScreen from '../components/screens/Search/SearchScreen';
import ReelsScreen from '../components/screens/Reels/ReelsScreen';
import ActivityScreen from '../components/screens/Activity/ActivityScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                      let iconName;

                      if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                      } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                      } else if (route.name === 'Reels') {
                        iconName = focused ? 'aperture' : 'aperture-outline';
                      } else if (route.name === 'Activity') {
                        iconName = focused ? 'heart' : 'heart-outline';
                      } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                      }

                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={27} color={colors.black} />;
                    },
                    // tabBarActiveTintColor: 'tomato',
                    // tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false
                  })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>  
      <Tab.Screen name="Reels" component={ReelsScreen} options={{headerShown: false}}/>  
      <Tab.Screen name="Activity" component={ActivityScreen} options={{headerShown: false}}/>  
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>  
    </Tab.Navigator>
  );
}
  
export default Tabs;