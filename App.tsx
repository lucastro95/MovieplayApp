import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './app/navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from './app/redux/Store';

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
