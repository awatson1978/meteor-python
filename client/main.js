import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click #launchPythonScript'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    // add data here that you want to send to the Python algorithm
    let dataPayload = {};

    Meteor.call("launchPythonScript", dataPayload, function(error, result){
      if(error){
        console.error("error", error);
      }
      if(result){
        console.log("We got a result!", result);

      }
    });
  },
});
