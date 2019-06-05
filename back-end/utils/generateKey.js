const RandomKey = require('../utils/RandomKey');

function generateKey(data, res) {
  const arrID = [];
  for (let i = 0; i < data.length; i++) {
    arrID[i] = data[i].ID
  }

  try {
    console.log(arrID);
    return new RandomKey(arrID, data.length).startMachine();
  } catch (e) {
    console.error(e);
    res.status(410).send(e.message);
  }
}

module.exports = generateKey;
