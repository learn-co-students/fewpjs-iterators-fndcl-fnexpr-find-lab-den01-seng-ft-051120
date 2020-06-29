const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  return findRecordYear(records) ? findRecordYear(records).year : undefined
}

function findRecordYear(records) {
  return records.find(record => {
    return record.result === "W"
  })
}