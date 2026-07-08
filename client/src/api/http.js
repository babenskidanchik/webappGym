const API_URL = "http://localhost:8080";

export default async function http(path, options = {}) {
    const res = await fetch(API_URL + path, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        credentials: "include", 
    });

    const text = await res.text();

    let data;
    try {
        data = JSON.parse(text);
    } catch {
        data = text;
    }

    if (!res.ok) {
        throw new Error(data?.message || text);
    }

    return data;
}