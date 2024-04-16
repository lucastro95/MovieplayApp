import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import I18n from './app/assets/strings/l18n';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View>
      <Text>{I18n.t('hola')}</Text>
    </View>
  );
}

export default App;
