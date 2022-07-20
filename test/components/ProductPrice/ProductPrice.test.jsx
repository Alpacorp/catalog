import { render, screen } from "@testing-library/react";
import ProductPrice from "../../../src/Components/ProductPrice/ProductPrice";

describe("Test on <ProductPrice />", () => {
  const price = 100;
  const formatPrice = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  };

  test("the component tobe match with snapshot", () => {
    render(<ProductPrice price={price} formatPrice={formatPrice} />);
    expect(screen.getByTestId("test-div-product-price")).toMatchSnapshot();
  });
});
