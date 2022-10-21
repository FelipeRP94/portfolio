import { render, screen } from "@testing-library/react";
import { Experience } from "../../../../model/experience";
import { ExperienceList } from "../ExperienceList";

describe("ExperienceList component", () => {
  test("Show all experiences", async () => {
    // ARRANGE
    const experienceList: Experience[] = [
      {
        position: "Position 1",
        company: "Company 1",
        date: "2020-2021",
        description: "Test experience",
      },
    ];

    render(<ExperienceList experiences={experienceList} />);

    // ACT
    const experiencesElements = screen.getAllByRole("article");

    // ASSERT
    expect(experiencesElements).toHaveLength(experienceList.length);
  });

  test("Show fail text if no experiences", async () => {
    // ARRANGE
    render(<ExperienceList experiences={[]} />);

    // ASSERT
    expect(screen.getByText("No experiences found")).toBeTruthy();
  });
});
