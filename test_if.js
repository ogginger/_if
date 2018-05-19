//test_if.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "if",
  "tests/if_pass_then",
  "tests/if_fail_NoOtherwiseSoDoesNothing",
  "tests/if_fail_otherwise",
  "tests/if_bool_ReturnsIfClassInstance",
  "tests/if_ClassPassThen_then",
  "tests/if_ClassFailOtherwise_otherwise"
], function(
  TestSuite,
  log,
  _if,
  if_pass_then,
  if_fail_NoOtherwiseSoDoesNothing,
  if_fail_otherwise,
  if_bool_ReturnsIfClassInstance,
  if_ClassPassThen_then,
  if_ClassFailOtherwise_otherwise
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_if initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "if" );
 	
	//Functional Tests         
	xTestSuite.add( if_pass_then );
  	xTestSuite.add( if_fail_NoOtherwiseSoDoesNothing );
	xTestSuite.add( if_fail_otherwise );	

	//Class Constructor Tests
	xTestSuite.add( if_bool_ReturnsIfClassInstance );
	xTestSuite.add( if_ClassPassThen_then );
	xTestSuite.add( if_ClassFailOtherwise_otherwise );

	//Validation Tests
      xTestSuite.test();

    }
  });
});
