import { useFetch } from "../../src/hooks/useFetch";

describe("Pruebas en el hook useFetchGifts", () => {
  test("Debe de regresar el estado inicial", () => {
    useFetch();
  });
});
