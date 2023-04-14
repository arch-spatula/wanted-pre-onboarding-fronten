import { rest } from "msw";
import { baseURL, TODO_PATH } from "../constants/constants";

export const handlers = [
  rest.get(`${baseURL + TODO_PATH}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];
