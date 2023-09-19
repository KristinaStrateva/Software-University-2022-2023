import { get } from "./api.js";

export async function getAllBooks() {
    return await get();
}