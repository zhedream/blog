const endpoint = process.env.GRAPHQL_ENDPOINT || "http://127.0.0.1:7200/graphql";
const query = `
  query IntegrationSmoke {
    articles(where: { isPublished: true }, first: 1) {
      id
      title
      tags { id }
      type { id }
    }
    categories(first: 1) { id name }
    tags(first: 1) { id name }
  }
`;

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ query })
});
const body = await response.json();

if (!response.ok || body.errors) {
  console.error(JSON.stringify(body, null, 2));
  process.exit(1);
}

console.log(`API smoke check passed (${endpoint}).`);
