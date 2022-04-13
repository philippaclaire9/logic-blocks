const fs = require('fs/promises');

//format data
//order dates
//calculate num of mins asleep
//work out the most likely sleep time
//multiply by guard num

const formatData = async () => {
  const contents = await fs.readFile('./data.txt', 'utf-8');
  //   console.log(typeof contents);
  return contents;
};

const orderRecords = (contents) => {
  const recordsArr = contents.split('\n');
  const manageableData = recordsArr.map((record, i) => {
    const splitRecord = record.split(']');
    const tidiedDate = splitRecord[0].slice(1, splitRecord[0].length);
    const tidiedAction = splitRecord[1].slice(1, splitRecord[1].length);
    return [tidiedDate, tidiedAction];
  });
  return manageableData;
};

// (async () => {
//   const savedContents = await formatData();
//   orderRecords(savedContents);
// })();

module.exports = { orderRecords, formatData };
