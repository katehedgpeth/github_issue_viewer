import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";

describe("App", () => {
  test("renders", async () => {
    render(<App />);
    const response = await screen.findByText("Hello world!");
    expect(response).toBeInTheDocument();
  });
});
