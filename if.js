//if.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	if ( Input.Comparator ) {
		Input.then();
	} else {
		if ( _.has( Input, "otherwise" ) ) {
			Input.otherwise();
		}
	}
  };
});
