import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { SkillCV } from "../../model/skillCategory";
import { ProgressBar } from "./ProgressBar";

interface Props {
  skillList: SkillCV[];
}

export const SkillGroup = ({ skillList }: Props) => {
  const styles = StyleSheet.create({
    skillsContainer: {
      flexDirection: "column",
    },
    skillGroup: {
      marginVertical: 5,
    },
    skillText: {
      marginBottom: 5,
      fontSize: 10,
    },
  });

  return (
    <View style={styles.skillsContainer}>
      {skillList.map((skill, idx) => (
        <View key={idx} style={styles.skillGroup}>
          <Text style={styles.skillText}>{skill.name}</Text>
          <ProgressBar level={skill.level} />
        </View>
      ))}
    </View>
  );
};
