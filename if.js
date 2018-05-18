//_if.js: Class. Function that returns a new instance of an object that acts as a constructor.

define([
	"Functions/the",
	"Functions/has",
	"Functions/then"
], function(
	the,
	has,
	then
) {
  return function( Bool ) {
	return {

		"Thing": undefined,
		"Condition": Bool,

		"the": the,
		"has": has,
		"then": then
	};
  };
});
