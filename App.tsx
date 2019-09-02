import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App = (): React.ReactElement => {
  return <AppContainer />;
};

export default App;
