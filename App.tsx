import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FirstPage from './src/Pages/FirstPage';
import SecondPage from './src/Pages/SecondPage';
import ThirdPage from './src/Pages/ThirdPage';
import { RootStackParamList } from './src/Helpers/typees';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <Provider store={store} >
        <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
            headerShown: true,
            }}>
            <Stack.Screen 
            name="FirstPage" 
            component={FirstPage} 
            options={{ headerShown: false, headerStyle: { backgroundColor: "#FFFFFF" }}} 
            />
            <Stack.Screen 
            name="SecondPage" 
            component={SecondPage} 
            options={{ headerShown: true, headerStyle: { backgroundColor: "#FFFFFF" }}} 
            />
            <Stack.Screen 
            name="ThirdPage" 
            component={ThirdPage} 
            options={{ headerShown: false, headerStyle: { backgroundColor: "#FFFFFF" }}} 
            />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF'
  },
});

export default App;
