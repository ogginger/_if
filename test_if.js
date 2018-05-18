//test_if.js: Testing Logic.

define([
  "TestSuite",
  "Functions/log",
  "tests/ifThe_Thing_thisThing",
  "tests/ifHas_Property_thisConditionTrue",
  "tests/ifHas_DoesNotHaveProperty_thisConditionFalse",
  "tests/ifThen_function_this"
], function(
  TestSuite,
  log,
  ifThe_Thing_thisThing,
  ifHas_Property_thisConditionTrue,
  ifHas_DoesNotHaveProperty_thisConditionFalse,
  ifThen_function_this
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_if initialized successfully!");
      var xTestSuite = this;
     	xTestSuite.set("MethodUnderTest", "if");
	
	//tests the
	xTestSuite.add(ifThe_Thing_thisThing);      

	//tests has
	xTestSuite.add( ifHas_Property_thisConditionTrue );
	xTestSuite.add( ifHas_DoesNotHaveProperty_thisConditionFalse );

	//tests then
	xTestSuite.add( ifThen_function_this );

      xTestSuite.test();
    }
  });
});
