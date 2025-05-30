import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen.tsx';
import {Animation101Screen} from '../screens/animations/Animation101Screen.tsx';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
    </Stack.Navigator>
  );
};
