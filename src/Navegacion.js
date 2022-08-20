import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notificaciones')}
          title="Ir a Notificaciones"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();

const Navegacion = ()=> {

    return (<NavigationContainer>
        <Drawer.Navigator initialRouteName="inicio">
          <Drawer.Screen name="inicio" component={HomeScreen} />
          <Drawer.Screen name="Notificaciones" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>)
}

export default Navegacion;