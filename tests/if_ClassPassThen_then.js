//if_ClassPassThen_then.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"if_ClassPassThen_then",
		"Input": true,
		"Function": function( Input ) {
			var bResult = false;
			_if( Input ).then(function() {
				bResult = true;
			});
			return bResult;
		},
		"ExpectedOutput": true
	};
});
