import { StyleSheet } from "@react-pdf/renderer";

export const primaryColor = "#2e488f";
export const secondaryColor = "#959ead";

export const commonStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    color: primaryColor,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    marginVertical: 5,
  },
  itemTitle: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  itemSubtitle: {
    fontSize: 10,
    color: secondaryColor,
    marginBottom: 5,
  },
  itemDate: {
    fontSize: 10,
  },
});
