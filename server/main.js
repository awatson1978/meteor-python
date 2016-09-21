import { Meteor } from 'meteor/meteor';

let assert = require('assert');
let pythonBridge = require('python-bridge');

let pythonService = pythonBridge();
pythonService.ex`print("Ssssssss....  Python works.")`;
pythonService.end();


Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  launchPythonScript:function(dataPayload){
    console.log("Received a request from the web client.", dataPayload);

    let pythonWorker = pythonBridge();
    pythonWorker.ex`print("Launching a python script....")`;
    pythonWorker.end();
  }
});
