import { rest } from "msw";

const handlers = [
  rest.get("*/api/v1/issues", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Hello world!"
      })
    );
  })
];

export default handlers;