//ifHas_DoesNotHaveProperty_thisConditionFalse.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"ifHas_DoesNotHaveProperty_thisConditionFalse",
		"Input": {
			"Object": new _if().the({}),
			"Options": "PropertyDoesNotExist"
		},
		"Function": function( Input ) {
			return Input.Object.has( Input.Options );
		},
		"ExpectedOutput": { "Thing": {}, "Condition": false },
		"Comparator": {
			"Object": true
		}
	};
});
