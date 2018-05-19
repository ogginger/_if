//if_bool_ReturnsIfClassInstance.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"if_bool_ReturnsIfClassInstance",
		"Input": true,
		"Function": _if,
		"ExpectedOutput": {
			"Comparator": true
		},
		"Comparator": {
			"Object": true,
			"Debug": false
		}
		
	};
});
