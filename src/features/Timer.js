import { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  0 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];
export const Timer = ({ focusSubject, clearSubject, onTimerEnd}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ flex: 0.13, justifyContent: 'center' }}>
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject.toUpperCase()}</Text>
        </View>
        <ProgressBar
          color={colors.ubuntuOrange}
          progress={progress}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.cancelSubjectWrapper}>
        <RoundedButton size={50} title="X" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  timingWrapper: {
    flex: 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: spacing.sm,
  },
  cancelSubjectWrapper: {
    flex: 0.1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 8,
  },
  task: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
