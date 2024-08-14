import facebook from "../providers/facebook.ts";
import type { Page } from "../providers/types.ts";

const page: Page = {
  url: "https://lume.land",
  title: "Lume static site generator",
  description: "The fast & flexible static site generator for Deno",
  image: "https://lume.land/img/showcase/lume.webp",
  icon: "https://lume.land/avatar.jpg",
};

const links = [
  ["Facebook", facebook(page)],
];

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Share</title>
  </head>
  <body>
    <h1>Share</h1>
    <ul>
      ${
  links.map(([name, url]) =>
    `<li><a href="${url}" target=_blank>${name}</a></li>`
  ).join("\n")
}
    </ul>
  </body>
</html>
`;

export default {
  fetch() {
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  },
};
