import  * as React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs'


import { Startseite} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainPage () {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Startseite} options={{headerShown: false}}/>
           
        </Stack.Navigator>
    )

}




function Router () {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='MainComponentPage' component={MainPage} />
                {/* <Tab.Screen name='Seiten' component={Schlagzeilen}/>
                <Tab.Screen name='Plus' component={SPIEGEL + '+'} />
                <Tab.Screen name='Hören' component={Audio}/>
                <Tab.Screen name='Ich' component={FürMich}/> */}

            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Router;