import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { LANGUAGES_CV, SKILL_CV } from "../common/data/skills";
import { SkillGroup } from "./SkillGroup";

export const CvSkills = () => {
  const styles = StyleSheet.create({
    skillsTitle: {
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 5,
      fontSize: 12,
    },
  });

  return (
    <View>
      <Text style={styles.skillsTitle}>Skills</Text>
      <SkillGroup skillList={SKILL_CV} />
      <Text style={styles.skillsTitle}>Languages</Text>
      <SkillGroup skillList={LANGUAGES_CV} />
    </View>
  );
};
