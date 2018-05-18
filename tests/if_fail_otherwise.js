//if_fail_otherwise.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"if_fail_otherwise",
		"Input": {
			"Comparator": false
		},
		"Function": function( Input ) {
			var bResult = false;
			Input.otherwise = function() {
				bResult = true;
			};
			_if( Input );
			return bResult;
			
		},
		"ExpectedOutput": true
	};
});
