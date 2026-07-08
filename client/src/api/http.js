const API_URL = "https://webappgym.onrender.com";

export default async function http(path, options = {}) {
    console.log("API:", API_URL + path);
    
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