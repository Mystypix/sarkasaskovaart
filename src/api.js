async function get(
    incomingReq,
    endpoint,
    cb,
) {
    const origin = new URL(incomingReq.url).origin;
    const response = await fetch(`${origin}${endpoint}`, {
        credentials: 'same-origin',
        headers: incomingReq.headers,
    });
    if (!response.ok) {
        throw new Error('Fetch failed');
    }
    return cb(response);
}

export async function getPosts(incomingReq) {
    return get(incomingReq, `/api/posts`, async (response) => {
        const posts = await response.json();
        return posts;
    });
}