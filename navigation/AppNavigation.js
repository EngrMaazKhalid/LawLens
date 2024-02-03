import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome, Login, Register, Home, Chat } from '../screens'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'

const stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
    <stack.Navigator>
        <stack.Screen 
            name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
        />
        <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        headerShown: false,
                    }}
                />
    </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation