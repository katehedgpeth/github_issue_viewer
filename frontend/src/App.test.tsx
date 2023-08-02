import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";

describe("App", () => {
  test("renders", async () => {
    render(<App />);
    const response = await screen.findByText("620 open issues");
    expect(response).toBeInTheDocument();
  });
});
