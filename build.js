//build.js: Configuration file for optimizing _.if.js. 
/*

	Dependencies: 1. underscore.
*/ 
({
    paths: {
	"log": "lib/log.min",
	"jquery": "empty:",
	"underscore": "lib/underscore.min"
    },
    exclude: [ "jquery", "underscore", "log" ],
    name: "if",
    out: "if.min.js"
})
