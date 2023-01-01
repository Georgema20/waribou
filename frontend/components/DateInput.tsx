
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
        display="spinner"
        value={props.selectedDate}
        maximumDate={new Date()}
        onChange={setDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    width: 400,
    height: 150,
    margin: 40,
    padding: 8,
    justifyContent: 'center',
  },
});

export default DateInput;
