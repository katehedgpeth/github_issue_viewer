import { rest } from "msw";
import successResponse from "./success_response.json";


const handlers = [
  rest.get("*/api/v1/issues", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(successResponse)
    );
  })
];

export default handlers;