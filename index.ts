// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     return new Response("Bun!");
//   },
// });

// console.log(Listening on http://localhost:${server.port} ...);
const AUTH_1C = process.env.AUTH_1C

const customHeaders = new Headers;
customHeaders.append("Authorization", "Basic "+Buffer.from(AUTH_1C).toString('base64'))

const response = await fetch("https://dummy-1c.server/dh/hs/finance/ping",
        {
            headers: customHeaders,
        }
    )
console.log(await response.status);
console.log(await response.text());