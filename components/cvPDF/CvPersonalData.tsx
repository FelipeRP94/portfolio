import { View, StyleSheet, Text } from "@react-pdf/renderer";

export const CvPersonalData = () => {
  const styles = StyleSheet.create({
    sectionTitle: {
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 2,
      fontSize: 12,
    },
    contactText: {
      marginVertical: 5,
      fontSize: 10,
    },
  });

  return (
    <View>
      <Text style={styles.sectionTitle}>Contact data</Text>
      <Text style={styles.contactText}>Málaga, Spain</Text>
      <Text style={styles.contactText}>felipe.r.p.1994@gmail.com</Text>
      <Text style={styles.contactText}>
        https://linkedin.com/in/felipe-ruiz-pinto
      </Text>
      <Text style={styles.contactText}>https://feliperuiz.info/</Text>
    </View>
  );
};
