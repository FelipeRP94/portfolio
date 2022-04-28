/* eslint-disable jsx-a11y/alt-text */
import { View, StyleSheet, Image, Text } from "@react-pdf/renderer";
import { primaryColor } from "./styles";

export const CvTitle = () => {
  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    title: {
      fontSize: 22,
    },
    subtitle: {
      fontSize: 16,
      color: primaryColor,
    },
    description: {
      fontSize: 10,
      marginBottom: 20,
    },
    image: {
      width: "15%",
      borderRadius: "50%",
      marginRight: 20,
    },
  });
  return (
    <View>
      <View style={styles.titleContainer}>
        <Image style={styles.image} src="/images/photo.png" />
        <View>
          <Text style={styles.title}>Felipe Ruiz Pinto</Text>
          <Text style={styles.subtitle}>Full Stack Developer</Text>
        </View>
      </View>
      <Text style={styles.description}>
        I would define myself as organized person, centered on details and a
        good coworker, always help my teamates to reach the project goals.
      </Text>
    </View>
  );
};
