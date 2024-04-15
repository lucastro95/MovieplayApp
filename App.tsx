import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import I18n from './app/assets/strings/l18n';

function App(): React.JSX.Element {
  return (
    <View>
      <Text>{I18n.t('hola')}</Text>
    </View>
  );
}

export default App;
