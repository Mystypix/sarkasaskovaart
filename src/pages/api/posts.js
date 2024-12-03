export async function GET() {
    const response = await fetch(`https://graph.instagram.com/${process.env.IG_USER_ID}/media?fields=id,caption,media_url,permalink&access_token=${process.env.IG_TOKEN}`);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}