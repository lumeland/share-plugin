import { Page } from "./types.ts";

export default function shareUrl(page: Page): string {
  const url = new URL("https://www.facebook.com/sharer/sharer.php");
  url.searchParams.append("u", page.url);

  return url.toString();
}
