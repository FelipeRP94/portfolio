import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { EXPERIENCE } from "../common/data/experience";
import { commonStyles } from "./styles";

export const CvExperience = () => {
  const styles = StyleSheet.create({
    ...commonStyles,
    description: {
      fontSize: 10,
    },
  });

  return (
    <View>
      <Text style={styles.sectionTitle}>Experience</Text>
      {EXPERIENCE.map((exp, idx) => (
        <View key={idx} style={styles.item}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>{exp.position}</Text>
            <Text style={styles.itemDate}>({exp.date})</Text>
          </View>

          <Text style={styles.itemSubtitle}>{exp.company}</Text>
          <Text style={styles.description}>{exp.description}</Text>
        </View>
      ))}
    </View>
  );
};
