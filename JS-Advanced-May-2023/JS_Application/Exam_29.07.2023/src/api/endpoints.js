import { del, get, post, put } from "./api.js"

const endpoints = {
    create: '/data/facts',
    allFacts: '/data/facts?sortBy=_createdOn%20desc',
    byId: factId => `/data/facts/${factId}`,
    likeFact: '/data/likes',
    likesAmount: factId => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    userLikes: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function createFact(data) {
    await post(endpoints.create, data);
}

export async function getAllFacts() {
    return await get(endpoints.allFacts);
}

export async function getFactDetails(id) {
    return await get(endpoints.byId(id));
}

export async function updateFact(id, data) {
    return await put(endpoints.byId(id), data);
}

export async function deleteFact(id) {
    await del(endpoints.byId(id));
}

export async function like(data) {
    return await post(endpoints.likeFact, data);
}

export async function getAllLikes(factId) {
    return await get(endpoints.likesAmount(factId));
}

export async function getUserLikes(factId, userId) {
    return await get(endpoints.userLikes(factId, userId));
}