import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './screens/HomePage';
import Student from './screens/Student';
import Employee from './screens/Employee';
import Teachers from './screens/Teachers';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Student') {
              iconName = focused? 'ios-star-outline':'man';
            } else if (route.name === 'Teachers') {
              iconName = focused ? 'checkbox' : 'ios-list';
            } else if (route.name === 'Employee') {
              iconName = focused ? 'people' : 'people-outline';
            }else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff0000',
          tabBarInactiveTintColor: '#101010',
        })}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Student" component={Student} />
        <Tab.Screen name="Teachers" component={Teachers} />
        <Tab.Screen name="Employee" component={Employee} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
