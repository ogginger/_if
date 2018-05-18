//ifHas_Property_thisConditionTrue.js: Testing logic.

define([
	"if"
], function(
	_if
) {
	return {
		"Name":"ifHas_Property_thisConditionTrue",
		"Input": function() {
			var xIf = new _if();
			return {
				"Object": xIf.the({ "Property": "Value" }),
				"Options": "Property"
			};
		},
		"Function": function( Input ) {
			return Input.Object.has( Input.Options );
		},
		"ExpectedOutput": { "Thing": { "Property": "Value" }, "Condition": true },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
