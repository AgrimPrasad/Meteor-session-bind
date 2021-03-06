if (Meteor.isClient) {
  sessionBind(Template.hello);
  //create a simple helper to get the session key and objects
  Template.hello.helpers({
    sessionGet: function(key, object) {
      if (object.hash != undefined) {
        return Session.get(key);
      } else {
	var ind = Session.get(object);
	if (ind == undefined) {
	  return undefined;
	} else {
	  return ind[key];
	}
      }
    }
  });
}

Tinytest.add('Range input binding', function (test) {
  var testVal = 43;
  //render the template on screen
  UI.insert(UI.render(Template.hello), document.body);
  //set the control value
  $(".rangeTest")[0].value = testVal;
  //get and execute the event for meteor to react
  var event = {target:$(".rangeTest")[0]};
  sessionBind.events["range"](event);
  Meteor.flush();
  //test that the data propagated reactively
  test.equal(parseInt($("#rangeTest").text()), testVal);
});

Tinytest.add('Text input binding', function (test) {
  var testVal = "sfljsl34893";
  UI.insert(UI.render(Template.hello), document.body);
  $(".textTest")[0].value = testVal;
  var event = {target:$(".textTest")[0]};
  sessionBind.events["text"](event);
  Meteor.flush();
  test.equal($("#textTest").text(), testVal);
});

Tinytest.add('Textarea input binding', function (test) {
  var testVal = "dfjklsj3434";
  UI.insert(UI.render(Template.hello), document.body);
  $(".textareaTest")[0].value = testVal;
  var event = {target:$(".textareaTest")[0]};
  sessionBind.events["textarea"](event);
  Meteor.flush();
  test.equal($("#textareaTest").text(), testVal);
});


Tinytest.add('checkbox input binding', function (test) {
  UI.insert(UI.render(Template.hello), document.body);
  $(".checkboxTest")[0].checked = true;
  var event = {target:$(".checkboxTest")[0]};
  sessionBind.events["checkbox"](event);
  Meteor.flush();
  test.equal($("#checkboxTest").text(), "true");
});


Tinytest.add('number input binding', function (test) {
  var testVal = "324983489";
  UI.insert(UI.render(Template.hello), document.body);
  $(".numberTest")[0].value = testVal;
  var event = {target:$(".numberTest")[0]};
  sessionBind.events["number"](event);
  Meteor.flush();
  test.equal($("#numberTest").text(), testVal);
});

Tinytest.add('select input binding', function (test) {
  var testVal = "wine";
  UI.insert(UI.render(Template.hello), document.body);
  $(".selectTest")[0].value = testVal;
  var event = {target:$(".selectTest")[0]};
  sessionBind.events["select"](event);
  Meteor.flush();
  test.equal($("#selectTest").text(), testVal);
});


