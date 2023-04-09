import { rest } from "msw";
import { baseURL } from "../constants/constant";

export const handlers = [
  rest.get(`${baseURL}/todo`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];
