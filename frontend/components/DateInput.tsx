
import { EventEmitter, StyleSheet, TextInput, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const DateInput: React.FC<{ selectedDate: Date; onChange: (date: Date) => void }> = (
  props
) => {

    const setDate = (event: DateTimePickerEvent, date: Date | undefined) => {
      props.onChange(date!);
    };


  return (
    <View style={styles.TextInputContainer}>
      <DateTimePicker
        display="compact"
        value={props.selectedDate}
        maximumDate={new Date()}
        onChange={setDate}
        style={styles.picker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    justifyContent:'center',
    alignItems:'flex-start',
    paddingLeft:8
  },
  picker:{
    width:'80%', 
  }
});

export default DateInput;
