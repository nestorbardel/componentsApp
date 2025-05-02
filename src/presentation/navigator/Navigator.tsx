import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen.tsx';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
