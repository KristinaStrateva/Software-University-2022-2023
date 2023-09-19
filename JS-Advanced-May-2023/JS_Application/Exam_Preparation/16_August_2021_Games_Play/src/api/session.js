const itemName = 'userData';

export function getUserData() {
    return JSON.parse(localStorage.getItem(itemName));
}

export function setUserData(data) {
    localStorage.setItem(itemName, JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem(itemName);
}