import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
//import CreatePost from './screens/CreatePost';
//import List from './screens/List';
//import Profile from './components/ProfilePage';

import { useEffect, useState } from 'react';

const stack = createNativeStackNavigator();
const insideStack = createNativeStackNavigator();

function insideLayout(){
  return (
    <insideStack.Navigator>
      {<SignUp />
      /* <insideStack.Screen name='Posts' component={List}/>
      <insideStack.Screen name='Create Post' component={CreatePost}/>
      <insideStack.Screen name='Profile' component={Profile}/> */}

    </insideStack.Navigator>
  );
}

export default function App() {
const [user, setUser] = useState(null);

  useEffect(() => {
    
  });
 //return unsubscribe;

  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName='login'>
      {user ? (
        <stack.Screen 
          name="inside" 
          component={insideLayout} 
          options={{ headerShown: false}}
        />
      ) : (
        <stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false}}  
        />
      )}
      <stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false}} />
      <stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
    </stack.Navigator>
  </NavigationContainer>
  );
}