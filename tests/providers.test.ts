import { assertEquals } from "jsr:@std/assert@1.0.2";
import facebook from "../providers/facebook.ts";
import type { Page } from "../providers/types.ts";

const page: Page = {
  url: "https://lume.land",
  title: "Lume static site generator",
  description: "The fast & flexible static site generator for Deno",
  image: "https://lume.land/img/showcase/lume.webp",
  icon: "https://lume.land/avatar.jpg",
};

Deno.test("Facebok", () => {
  assertEquals(
    facebook(page),
    "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com&display=popup&redict_uri=https%3A%2F%2Fwww.facebook.com%2F&t=Example",
  );
});
