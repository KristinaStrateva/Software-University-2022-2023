const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAllUsers = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const users = Object.values(result);

    return users;
};