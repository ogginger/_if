//function.js: Functional Logic.

define([], function() {
  return function( Input ) {
	console.log( this );
	if ( this.Condition === true ) {
		Input();
	}
	return this;
  };
});
