/* 
1. leetcode data sample
[
  { difficulty: 'All', count: 140 },
  { difficulty: 'Easy', count: 57 },
  { difficulty: 'Medium', count: 70 },
  { difficulty: 'Hard', count: 13 }
]

2. codingninjas data sample
[ [ 'Easy', 236 ], [ 'Medium', 52 ], [ 'Hard', 6 ] ]

3. gfg data sample
{
  School: 6,
  Basic: 28,
  Easy: 63,
  Medium: 46,
  Hard: 4,
  userName: 'devangsvaghani',
  totalProblemsSolved: 147
}

*/

import { SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const createPlatforms = ({leetcodeData, codingninjasData, gfgData}) => {

  
  let codingNinjasCountAll = (codingninjasData.Easy || 0) + (codingninjasData.Medium || 0) + (codingninjasData.Hard || 0);

  let array = [
    {
      "icon" : <SiCodingninjas />,
      "platform" : "Coding Ninjas",
      "problems" : [
        {
          "level" : "All",
          "count" : codingNinjasCountAll,
        },
        {
          "level" : "Easy",
          "count" : codingninjasData.Easy || 0,
        },
        {
          "level" : "Medium",
          "count" : codingninjasData.Medium || 0,
        },
        {
          "level" : "Hard",
          "count" : codingninjasData.Hard || 0,
        },
      ]
    },

    {
      "icon" : <SiLeetcode />,
      "platform" : "Leetcode",
      "problems" : [
        {
          "level" : "All",
          "count" : leetcodeData[0].count,
        },
        {
          "level" : "Easy",
          "count" : leetcodeData[1].count,
        },
        {
          "level" : "Medium",
          "count" : leetcodeData[2].count,
        },
        {
          "level" : "Hard",
          "count" : leetcodeData[3].count,
        },
      ]
    },

    {
      "icon" : <SiGeeksforgeeks />,
      "platform" : "Geeksforgeeks",
      "problems" : [
        {
          "level" : "All",
          "count" : gfgData.totalProblemsSolved || 0,
        },
        {
          "level" : "School",
          "count" : gfgData.School || 0,
        },
        {
          "level" : "Basic",
          "count" : gfgData.Basic || 0,
        },
        {
          "level" : "Easy",
          "count" : gfgData.Easy || 0,
        },
        {
          "level" : "Medium",
          "count" : gfgData.Medium || 0,
        },
        {
          "level" : "Hard",
          "count" : gfgData.Hard || 0,
        },
      ]
    },
  ]

  return array;
}

export default createPlatforms;