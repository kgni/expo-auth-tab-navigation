import React from 'react';
import { Button, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '@/core/store';
import {
  decrement,
  increment,
  incrementByAmount,
} from '@/core/store/counter/counterSlice';

const Counter = () => {
  const { value: count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <View style={{ flexDirection: 'row', gap: 18 }}>
      <Button title='Decrement' onPress={() => dispatch(decrement())} />
      <Text>{count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Button
        title='Increment By 15'
        onPress={() => dispatch(incrementByAmount(15))}
      />
    </View>
  );
};

export default Counter;
