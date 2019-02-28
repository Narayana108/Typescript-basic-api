import express from 'express';
import { bubbleSort, flatten, rmNull } from './index';
export const app = express();

export function sortArray(arr) {
  arr = flatten(arr);
  arr = rmNull(arr);

  const sortedArr = bubbleSort(arr);
  console.log(`Sorted array: ${sortedArr}`);
  return sortedArr;
}

app.use(express.json()); // parse JSON

// @route   POST /
// @desc    Sort and filter array
// @access  Public
app.post('/', function(req, res) {
  if (Array.isArray(req.body)) {
    if (req.body.length < 10000) {
      console.log(`Request body: ${req.body}`); // your JSON
      res.send(sortArray(req.body)); // send the result back
    } else {
      console.error('Array max length is 10 000');
      res.status(500).send('Array max length is 10 000');
    }
  } else {
    console.error('Invalid array');
    res.status(500).send('Invalid array');
  }
});
