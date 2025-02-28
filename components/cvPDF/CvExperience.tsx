import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { formatExperienceDate } from "../../common/utils/date.utils";
import { commonStyles } from "./styles";
import { useExperiences } from "../../pods/admin/ExperienceList/hooks/useExperiences";

export const CvExperience = () => {
  const { experiences } = useExperiences();

  const styles = StyleSheet.create({
    ...commonStyles,
    description: {
      fontSize: 10,
    },
  });

  return (
    <View>
      <Text style={styles.sectionTitle}>Experience</Text>
      {experiences.map((exp, idx) => (
        <View key={idx} style={styles.item}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>{exp.position}</Text>
            <Text style={styles.itemDate}>
              (
              {`${formatExperienceDate(new Date(exp.dateFrom))} - ${
                exp.dateTo
                  ? formatExperienceDate(new Date(exp.dateTo))
                  : "present"
              }`}
              )
            </Text>
          </View>

          <Text style={styles.itemSubtitle}>{exp.company}</Text>
          <Text style={styles.description}>{exp.description}</Text>
        </View>
      ))}
    </View>
  );
};
