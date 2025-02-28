/* eslint-disable jsx-a11y/alt-text */
import { Page, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { CvEducation } from "./CvEducation";
import { CvExperience } from "./CvExperience";
import { primaryColor } from "./styles";
// import Montserrat from "../../assets/fonts/Montserrat-Regular.ttf";
// import MontserratBold from "../../assets/fonts/Montserrat-Bold.ttf";
import { CvSkills } from "./CvSkills";
import { CvPersonalData } from "./CvPersonalData";
import { CvTitle } from "./CvTitle";
import { useExperiences } from "../../pods/admin/ExperienceList/hooks/useExperiences";

export const CvPDF = () => {
  const { experiences } = useExperiences();

  // Font.register({
  //   family: "Montserrat",
  //   format: "truetype",
  //   fonts: [{ src: Montserrat }, { src: MontserratBold, fontWeight: 800 }],
  // });

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      // fontFamily: "Montserrat",
    },
    mainData: {
      flex: 3,
      padding: 20,
    },
    secondaryData: {
      backgroundColor: primaryColor,
      flex: 1,
      padding: 10,
      paddingVertical: 80,
      color: "white",
      fontSize: 12,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainData}>
          <CvTitle />
          <CvExperience experiences={experiences} />
          <CvEducation />
        </View>
        <View style={styles.secondaryData}>
          <CvPersonalData />
          <CvSkills />
        </View>
      </Page>
    </Document>
  );
};
