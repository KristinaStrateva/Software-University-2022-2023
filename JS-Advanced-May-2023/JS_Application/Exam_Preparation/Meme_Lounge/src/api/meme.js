import { del, get, post, put } from "./api.js"

const endpoints = {
    create: '/data/memes',
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    byId: memeId => `/data/memes/${memeId}`,
    userMemes: userId => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
}

export async function createMeme(data) {
    await post(endpoints.create, data);
}

export async function getAllMemes() {
    return await get(endpoints.allMemes);
}

export async function getMemeDetails(id) {
    return await get(endpoints.byId(id));
}

export async function updateMeme(id, data) {
    return await put(endpoints.byId(id), data);
}

export async function deleteMeme(id) {
    await del(endpoints.byId(id));
}

export async function getUserMemes(id) {
    return await get(endpoints.userMemes(id));
}