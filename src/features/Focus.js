import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null)
  console.log(subject)
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Focus Feature</Text>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} label='what do you like to focus on?' 
        onChangeText={setSubject}
        theme={{colors:{text:colors.ubuntuOrange,
        label:colors.darkAubergine}}}/>
      <View style={styles.roundedButton}>
        <RoundedButton title="+" size={50} onPress={() => addSubject(subject)}/>
      </View>
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
  container:{
  },
  text: {
    color: colors.white,
  },
  textInput: {
    fontStyle:'bold',
    color:colors.ubuntuOrange,
    flex:1,
    marginRight:spacing.sm
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.sm,
    justifyContent: 'top',
  },
  roundedButton: {
    justifyContent: 'center'
  }
});