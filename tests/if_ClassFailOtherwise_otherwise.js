//if_ClassFailOtherwise_otherwise.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"if_ClassFailOtherwise_otherwise",
		"Input": false,
		"Function": function( Input ) {
			var bResult = false;
			_if( Input ).otherwise(function() {
				bResult = true;
			});
			return bResult;
		},
		"ExpectedOutput": true
	};
});
