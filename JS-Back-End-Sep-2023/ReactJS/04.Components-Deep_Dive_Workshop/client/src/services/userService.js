const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAllUsers = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const users = Object.values(result);

    return users;
};

export const getUserById = async (userId) => {
    const response = await fetch(baseUrl + '/' + userId);
    const user = await response.json();

    return user;
};

export const createUser = async (formData) => {
    const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        imageUrl: formData.imageUrl,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: formData.country,
            city: formData.city,
            street: formData.street,
            streetNumber: formData.streetNumber
        }
    }
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
};

export const deleteUser = async (userId) => {
    await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });
};