let record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

const testVar = {}

superbowlWin = () => {
  let winningSeason = record.find (record => record.result === "W")
  return !!winningSeason ? winningSeason.year : undefined
}
