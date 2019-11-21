import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ComponentA from '../container/ComponentA';
import ComponentB from '../container/ComponentB';
import ImagesPicker from '../container/ImagesPicker';
import ImagesResize from '../container/ImagesResize';

const RootStack = createStackNavigator(
  {
    ManhinhA: ComponentA,
    ManhinhB: ComponentB,
    ManhinhC: ImagesPicker,
    ManhinhD: ImagesResize,
  },
  {
    initialRouteName: 'ManhinhA',
  },
);

export const AppContainer = createAppContainer(RootStack);
