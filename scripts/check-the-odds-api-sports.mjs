import fs from "node:fs/promises";

const apiKey = process.env.THE_ODDS_API_KEY;

if (!apiKey) {
  console.error("Set THE_ODDS_API_KEY before running this check.");
  process.exit(1);
}

const url = new URL("https://api.the-odds-api.com/v4/sports/");
url.searchParams.set("apiKey", apiKey);
url.searchParams.set("all", "true");

const response = await fetch(url);
if (!response.ok) {
  const body = await response.text();
  throw new Error(`The Odds API request failed: ${response.status} ${body}`);
}

const sports = await response.json();
await fs.mkdir("data", { recursive: true });
await fs.writeFile("data/the-odds-api-sports.json", JSON.stringify(sports, null, 2));

const horseMatches = sports.filter((sport) => {
  const haystack = `${sport.group} ${sport.title} ${sport.key} ${sport.description || ""}`.toLowerCase();
  return haystack.includes("horse") || haystack.includes("racing");
});

console.log(`Fetched ${sports.length} sports into data/the-odds-api-sports.json`);
if (!horseMatches.length) {
  console.log("No obvious horse-racing sport key was found.");
} else {
  console.log("Possible horse-racing sport keys:");
  for (const sport of horseMatches) {
    console.log(`- ${sport.key}: ${sport.title}`);
  }
}

console.log(`Requests remaining: ${response.headers.get("x-requests-remaining") ?? "not reported"}`);
