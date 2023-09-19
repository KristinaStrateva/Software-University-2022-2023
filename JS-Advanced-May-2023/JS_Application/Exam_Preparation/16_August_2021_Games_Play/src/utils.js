export const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    allGames: '/data/games?sortBy=_createdOn%20desc',
    createGame: '/data/games',
    byId: id => `/data/games/${id}`,
    allComments: gameId => `/data/comments?where=gameId%3D%22${gameId}%22`,
    createComment: '/data/comments'
}

export function createEventHandler(callback) {
    return function (event) {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        callback(data, form, event);
    }
}