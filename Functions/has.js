//has.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	if (_.has( this.Thing, Input ))	{
		this.Condition = true;
	} else {
		this.Condition = false;
	}
	return this;
  };
});
