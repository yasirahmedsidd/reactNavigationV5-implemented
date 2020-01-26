import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListItem = ({navigation, route}) => (
  <View>
    {console.log(route.params.id)}
    <Text>ListItem</Text>
  </View>
);
const HomeScreen = ({navigation}) => (
  <View>
    <Text>HomeScreen</Text>
    <Button
      title="goto listItem"
      onPress={() => navigation.navigate('Listitem', {id: 1921680101})}
    />
  </View>
);
const AccountScreen = ({navigation}) => (
  <View>
    <Text>AccountScreen</Text>
  </View>
);
const listStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeS"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Listitem" component={ListItem} />
    </HomeStack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationNativeContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={listStack} />
        <BottomTab.Screen name="Account" component={AccountScreen} />
      </BottomTab.Navigator>
    </NavigationNativeContainer>
  );
};
export default App;
