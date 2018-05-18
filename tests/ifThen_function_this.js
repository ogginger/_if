//ifThen_function_this.js: Testing logic.

define([
  "if"
], function(
  _if
) {
	return {
		"Name":"ifThen_function_this",
		"Input": function() {
			return {
				"Object": xObject,
				"Options": 
			};
		},
		"Function": function( Input ) {
			return Input.Object.then( Input.Options );
		},
		"ExpectedOutput": { "Thing": true },
		"Comparator": {
			"Object": true,
			"Debug": true
		}
	};
});
