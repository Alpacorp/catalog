import { render, screen } from "@testing-library/react";
import Tags from "../../../src/Components/Tags/Tags";
import propTypes from "prop-types";

describe("Test on <Tags /> component", () => {
  const tags = ["tag1"];
  const id = 1;

  test("Component should render to match snapshot", () => {
    render(<Tags tags={tags} id={id} />);
    expect(screen.getByTestId("test-div-tags")).toMatchSnapshot();
  });

  test("The component have two props is requiered", () => {
    render(<Tags tags={tags} id={id} />);
    expect(Tags.propTypes).toEqual({
      tags: propTypes.array.isRequired,
      id: propTypes.number.isRequired,
    });
    expect(Object.keys(Tags.propTypes).length).toBe(2);
  });

  test('The component main div to have "tags" className and <small> tag to have "tag" className', () => {
    render(<Tags tags={tags} id={id} />);
    expect(screen.getByTestId("test-div-tags").className).toBe("tags");
    expect(screen.getByTestId("test-small-tag").className).toBe("tag");
  });
});
