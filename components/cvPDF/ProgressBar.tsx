import { StyleSheet, View } from "@react-pdf/renderer";

interface Props {
  level: number;
}

export const ProgressBar = ({ level }: Props) => {
  const styles = StyleSheet.create({
    progressContainer: {
      backgroundColor: "#212121",
      height: 3,
      width: "100%",
    },
    progress: {
      backgroundColor: "white",
      height: 3,
    },
  });

  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progress, { width: `${level * 20}%` }]}></View>
    </View>
  );
};
