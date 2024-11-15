// In App.js in a new project

import * as React from 'react';
import RootStack from './src/Navigation/RootStack';


export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};


export default function App() {
  return <RootStack />
}