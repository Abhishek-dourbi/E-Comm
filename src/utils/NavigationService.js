import React from 'react';
import {StackActions} from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function getActiveRouteName() {
  if (isReadyRef.current && navigationRef.current) {
    return navigationRef.current.getCurrentRoute().name;
  }
}

export function navigateScreen(routeName, params, key) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(routeName, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function resetAppScreen() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.popToTop());
  } else {
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  } else {
  }
}
