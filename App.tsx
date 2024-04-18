import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from './app/ui/components/Button';

function App(): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View>
      <Button text={"Send"} action={() => {}}/>
    </View>
  );
}

export default App;
