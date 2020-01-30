import React, { Component } from 'react';

import MainActivity from './src/screens/MainActivity';
import ShowProductListActivity from './src/screens/ShowProductListActivity';
import EditProductRecordActivity from './src/screens/EditProductRecordActivity';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator({
  First: { 
    screen: MainActivity
  },
  Second: {
    screen: ShowProductListActivity
  },
  Third: { 
    screen: EditProductRecordActivity
  }
});
const AppContainer = createAppContainer(RootStack);

export default AppContainer;