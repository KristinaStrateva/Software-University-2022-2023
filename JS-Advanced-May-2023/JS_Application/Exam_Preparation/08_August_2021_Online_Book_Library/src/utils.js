export const endpoints = {
    getAllBooks: '/data/books?sortBy=_createdOn%20desc',
    addBook: '/data/books',
    byId: '/data/books/',
    addLike: '/data/likes',
    userBooks: userId => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    likesAmount: bookId => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    userLike: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const formElement = event.currentTarget;

        const formData = new FormData(formElement);

        const data = Object.fromEntries(formData.entries());

        callback(data, formElement, event);
    }
}