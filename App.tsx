import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './app/navigation/RootNavigator';

function App(): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <RootNavigator />
  );
}

export default App;
