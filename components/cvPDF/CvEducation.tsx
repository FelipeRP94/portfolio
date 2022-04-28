import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { STUDIES } from "../common/data/education";
import { commonStyles } from "./styles";

export const CvEducation = () => {
  const styles = StyleSheet.create({
    ...commonStyles,
    section: {
      marginTop: 20,
    },
  });

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Education</Text>
      {STUDIES.map((st, idx) => (
        <View key={idx} style={styles.item}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>{st.title}</Text>
            <Text style={styles.itemDate}>({st.date})</Text>
          </View>

          <Text style={styles.itemSubtitle}>{st.center}</Text>
        </View>
      ))}
    </View>
  );
};
