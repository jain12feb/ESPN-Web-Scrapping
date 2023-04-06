const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/rajasthan-royals-vs-punjab-kings-8th-match-1359482/ball-by-ball-commentary",
  (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(response && response.statusCode, response.statusMessage);
      handleHtml(body);
    }
  }
);

const handleHtml = (html) => {
  let $ = cheerio.load(html);
  let contentArr = $(".ds-ml-4>.ds-leading-none>span");
  let data = $(contentArr[0]).text();
  let data2 = $(contentArr[0]).html();
  console.log(data, data2);
};
