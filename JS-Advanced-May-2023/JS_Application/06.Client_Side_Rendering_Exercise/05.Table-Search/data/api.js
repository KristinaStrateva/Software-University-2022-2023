const baseUrl = 'http://localhost:3030/jsonstore/advanced/table';

export async function getStudent() {
    const res = await fetch(baseUrl);
    const students = await res.json();

    return students;
}