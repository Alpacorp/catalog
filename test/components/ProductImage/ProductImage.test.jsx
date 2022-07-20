import { render, screen } from "@testing-library/react";
import ProductImage from "../../../src/Components/ProductImage/ProductImage";

describe("Test in <ProductImage />", () => {
  const id = 1;
  const image = "https://via.placeholder.com/150";
  const name = "Product 1";
  const styleImg = "product-image";

  test("should render to match snapshot", () => {
    const { container } = render(
      <ProductImage id={id} image={image} name={name} styleImg={styleImg} />
    );
    expect(container).toMatchSnapshot();
  });

  test("should render image with SRC and ALT attributes", () => {
    render(
      <ProductImage id={id} image={image} name={name} styleImg={styleImg} />
    );
    expect(screen.getByRole("img").src).toBeTruthy();
    expect(screen.getByRole("img").alt).toBeTruthy();
  });

  test("should render to match snapshot main DIV with styleImg", () => {
    render(
      <ProductImage id={id} image={image} name={name} styleImg={styleImg} />
    );
    expect(screen.getByTestId("test-div-img").className).toBeTruthy();
  });
});
