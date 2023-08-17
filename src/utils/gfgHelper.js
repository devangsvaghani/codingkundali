import { load } from "cheerio";

const gfgHelper = async (url, options) => {
  const res = await fetch(url, options);
  const html = await res.text();

  var $ = load(html)
  let values = {};
  let problemDificultyTag = ["School", "Basic", "Easy", "Medium", "Hard"];
  let k = 0;
  let data = $(".tabs.tabs-fixed-width.linksTypeProblem");

  if (data.length == 0) {
    // user not exist
    return 0;
  } else {
    let totalProblemSolved = 0;

    let rawData = $(data[0]).text();
    for (let i = 0; i < rawData.length; i++) {
      if (rawData[i] == "(") {
        let tempStart = i + 1;
        while (rawData[i] != ")") {
          i++;
        }
        let tempProblems = parseInt(rawData.substring(tempStart, i));
        values[problemDificultyTag[k++]] = tempProblems;
        totalProblemSolved += tempProblems;
      }
    }

    values["userName"] = "devangsvaghani";
    values["totalProblemsSolved"] = totalProblemSolved;
    return values;
  }

};

export default gfgHelper;
