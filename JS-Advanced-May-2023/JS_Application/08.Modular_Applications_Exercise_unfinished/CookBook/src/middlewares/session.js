import { getUserData } from "../utils.js";


export function addSession(ctx, next) {
    ctx.user = getUserData();

    next();
}