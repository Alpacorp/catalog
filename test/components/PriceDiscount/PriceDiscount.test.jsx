import { render, screen } from "@testing-library/react";
import PriceDiscount from "../../../src/Components/PriceDiscount/PriceDiscount";
import { formatPrice } from "../../../src/utils/formatPrice.";
import propTypes from "prop-types";

describe("Test on <PriceDiscount />", () => {
  const price = 100;
  const className = "price-discount";
  const ariaLabel = price;
  const tabIndex = 0;

  test("the component should render to match snapshot", () => {
    render(<PriceDiscount price={price} formatPrice={formatPrice} />);
    expect(
      <PriceDiscount price={price} formatPrice={formatPrice} />
    ).toMatchSnapshot();
  });

  test("the component should have H3 tag", () => {
    render(<PriceDiscount price={price} formatPrice={formatPrice} />);
    expect(screen.getByRole("heading", { level: 3 })).toBeTruthy();
  });

  test('The component should have in H3 tag "price-discount" className and "price" aria-label and "tab-index" properties', () => {
    render(<PriceDiscount price={price} formatPrice={formatPrice} />);
    expect(screen.getByRole("heading", { level: 3 }).className).toBe(className);
    expect(
      screen.getByRole("heading", { level: 3 }).getAttribute("aria-label")
    ).toBe(ariaLabel.toString());
    expect(
      screen.getByRole("heading", { level: 3 }).getAttribute("tabIndex")
    ).toBe(tabIndex.toString());
  });

  test("The component should have two props", () => {
    render(<PriceDiscount price={price} formatPrice={formatPrice} />);
    expect(PriceDiscount.propTypes).toEqual({
      price: propTypes.number.isRequired,
      formatPrice: propTypes.object.isRequired,
    });
    expect(Object.keys(PriceDiscount.propTypes).length).toBe(2);
    // console.log(Object.keys(PriceDiscount.propTypes)[0]);
  });
});
