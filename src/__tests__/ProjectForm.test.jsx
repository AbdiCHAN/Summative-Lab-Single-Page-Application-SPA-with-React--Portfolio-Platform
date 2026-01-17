import { render, screen, fireEvent } from "@testing-library/react";
import ProjectForm from "../components/ProjectForm";

test("adds a project when form is submitted", () => {
  const addProject = jest.fn();

  render(<ProjectForm addProject={addProject} />);

  fireEvent.change(screen.getByPlaceholderText("Title"), {
    target: { value: "My Project" },
  });

  fireEvent.change(screen.getByPlaceholderText("Description"), {
    target: { value: "Project description" },
  });

  fireEvent.click(screen.getByText("Add"));

  expect(addProject).toHaveBeenCalledTimes(1);
});
