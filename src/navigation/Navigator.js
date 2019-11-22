import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ComponentA from '../container/ComponentA';
import ComponentB from '../container/ComponentB';
import ImagesPicker from '../container/ImagesPicker';
import ImagesResize from '../container/ImagesResize';
import TestAxios from '../container/TestAxios';

const RootStack = createStackNavigator(
  {
    ManhinhA: ComponentA,
    ManhinhB: ComponentB,
    ManhinhC: ImagesPicker,
    ManhinhD: ImagesResize,
    ManhinhE: TestAxios,
  },
  {
    initialRouteName: 'ManhinhA',
  },
);

export const AppContainer = createAppContainer(RootStack);
