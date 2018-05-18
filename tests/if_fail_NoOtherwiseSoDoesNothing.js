//if_fail_NoOtherwiseSoDoesNothing.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"if_fail_NoOtherwiseSoDoesNothing",
		"Input": {
			"Comparator": false
		},
		"Function": function( Input ) {
			var bResult = false;
			Input.then = function() {
				bResult = true;
			};
			_if( Input );
			return bResult;
		},
		"ExpectedOutput": false
	};
});
