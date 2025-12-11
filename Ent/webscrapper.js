import fetch from "node-fetch";
import { load } from "cheerio";

const res = await fetch("http://books.toscrape.com/");
const html = await res.text();
const $ = load(html);

$("article.product_pod").each((i, el) => {
  const titre = $(el).find("h3 a").attr("title");
  const prix = $(el).find(".price_color").text().trim();
  console.log(titre);
  console.log(prix);
});
