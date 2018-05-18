//if_pass_then.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"if_pass_then",
		"Input": {
			"Comparator": true,
			"then": undefined
		},
		"Function": function( Input ) {
			var bResult = false;
			Input.then = function() {
				bResult = true;
			};
			_if( Input );
			return bResult;
		},
		"ExpectedOutput": true
	};
});
