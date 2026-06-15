import { readFileSync, writeFileSync } from "node:fs";

const htmlPath = "index.html";
const css = readFileSync("styles.css", "utf8").replace(/<\/style/gi, "<\\/style");
const js = readFileSync("app.js", "utf8").replace(/<\/script/gi, "<\\/script");
let html = readFileSync(htmlPath, "utf8");

html = html
  .replace(/    <link rel="stylesheet" href="styles\.css">|    <style>[\s\S]*?<\/style>/, `    <style>\n${css}\n    </style>`)
  .replace(/    <script src="app\.js"><\/script>|    <script>[\s\S]*?<\/script>\s*<\/body>/, `    <script>\n${js}\n    </script>\n  </body>`);

writeFileSync(htmlPath, html);
