import { View, StyleSheet } from 'react-native';

import {RoundedButton} from '../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return (
    <>
    <View style={styles.timingButton}>
        <RoundedButton title="5" size={75} onPress={() => onChangeTime(5)} />
    </View>
    <View style={styles.timingButton}>
        <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)} />
    </View>
    <View style={styles.timingButton}>
        <RoundedButton title="15" size={75} onPress={() => onChangeTime(15)} />
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  timingButton: {
    flex:1,
    alignItems: 'center'
  }
})