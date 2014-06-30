/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to enyo.ready().
*/

enyo.kind({
	name: "nos.Application",
	kind: "enyo.Application",
	view: "nos.StartView"
});

enyo.ready(function () {
	new nos.Application({name: "app"});
});
