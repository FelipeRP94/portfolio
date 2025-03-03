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
      marginBottom: 10,
    },
    image: {
      width: "15%",
      borderRadius: 50,
      marginRight: 20,
    },
    titleWrapper: {
      marginBottom: 20,
    },
  });
  return (
    <View style={styles.titleWrapper}>
      <View style={styles.titleContainer}>
        <Image style={styles.image} src="/images/photo.png" />
        <View>
          <Text style={styles.title}>Felipe Ruiz Pinto</Text>
          <Text style={styles.subtitle}>Full-Stack Developer</Text>
        </View>
      </View>
      <Text style={styles.description}>
        I describe myself as a Front-End developer with a Full-Stack mindset.
        Throughout my career, I have played both roles, predominantly
        Full-Stack, as I have always enjoyed understanding and learning all
        aspects of a web project.
      </Text>
      <Text style={styles.description}>
        I consider myself a person with great problem-solving abilities, as well
        as a knack for learning and adapting to new teams and projects.
      </Text>
      <Text style={styles.description}>
        Continuous education and learning are fundamental pillars in my career.
        Therefore, I am constantly updating my skills and knowledge to stay
        up-to-date with the latest trends and technologies in web development.
      </Text>
    </View>
  );
};
