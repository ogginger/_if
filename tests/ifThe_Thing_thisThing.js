//ifThe_Thing_this.Thing.js: Testing logic.

define([
	"if",
	"Functions/the",
	"Functions/log"
], function(
	_if,
	the,
	log
) {
	return {
		"Name":"ifThe_Thing_this.Thing",
		"Input": {
			"Object": new _if(),
			"Thing": { "Property": "Value" }
		},
		"Function": function( Input ) {
			return Input.Object.the( Input.Thing );
		},
		"ExpectedOutput": {"Thing": { "Property": "Value" }},
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
