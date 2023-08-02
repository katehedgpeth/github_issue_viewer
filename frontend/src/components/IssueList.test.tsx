import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import server from "../../test/mocks/server";
import { rest } from "msw";
import { ApiProvider } from "../contexts/ApiContext";
import IssueList from "./IssueList";

describe("IssueList", () => {
  test("renders a list of issues when response is successful", async () => {
    render(
      <ApiProvider>
        <IssueList />
      </ApiProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    const successfulRender = await screen.findByText(
      "Error: Requiring @playwright/test second time"
    );
    expect(successfulRender).toBeInTheDocument();
  });

  test("renders an error message when response is not successful", async () => {
    server.use(rest.get("*/api/v1/issues", (_req, res, ctx) => res(ctx.status(500))));
    render(
      <ApiProvider>
        <IssueList />
      </ApiProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    const errorMessage = await screen.findByText("Error loading issues, please try again");
    expect(errorMessage).toBeInTheDocument();
  });
});
