import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../slices/counterSlice';
import { Button, Text, View, StyleSheet } from 'react-native';  // Import from react-native

export default function Index() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();


    function clear() {
    dispatch(reset());  
  }

  return (
    <View style={styles.container}>
      <Button 
        title="Increment" 
        onPress={() => dispatch(increment())} 
        color="#007bff"
      />
      <Button 
        title="Decrement" 
        onPress={() => dispatch(decrement())} 
        color="#dc3545"
      />
      <Text style={styles.countText}>{count}</Text>


      <Button
        title="Clear"
        onPress={clear}  
        color="#28a745"  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  countText: {
    fontSize: 20,
    marginTop: 20,
    color: '#333',
  },
});
