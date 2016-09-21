import { Meteor } from 'meteor/meteor';

let assert = require('assert');
let pythonBridge = require('python-bridge');
let python = pythonBridge();


let list = [3, 4, 2, 1];

python.ex`import math`;
python`math.sqrt(9)`.then(x => assert.equal(x, 3));
python`sorted(${list})`.then(x => assert.deepEqual(x, list.sort()));
python.end();



Meteor.startup(() => {
  // code to run on server at startup
});
