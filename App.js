import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/views/Home/index';


export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        background="transparent"
        translucent
        />
      <Home/>
    </>
  );
}

