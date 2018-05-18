//build.js: Configuration file for optimizing the ifSetup function. 
/*
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
