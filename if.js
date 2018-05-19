//if.js: Functional Logic.

define([
	"underscore",
	"log"
], function(
	_,
	log
) {
  return function( Input ) {
	if ( typeof Input === "boolean" ) {
	//Boolean input overload.
		//Create class instance.
		return {
                	"Comparator": Input,
                	"then": function( Callback ) {
				var xIfClassInstance = this;
                        	if ( xIfClassInstance.Comparator ) {
                        	        Callback();
                	        }
        	        },
			"otherwise": function( Callback ) {
				var xIfClassInstance = this;
				if ( !xIfClassInstance.Comparator ) {
					Callback();
				}
			}
	        };
 
	} else {
	//Default functionality.
		if ( Input.Comparator ) {
			Input.then();
		} else {
			if ( _.has( Input, "otherwise" ) ) {
				Input.otherwise();
			}
		}
	}
  };
});
