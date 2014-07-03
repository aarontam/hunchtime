/**
* The view that allows a user to create a hunch and/or a pool, depending on the context. 
* When in pool-creation mode, the originating question is specified in addition to the
* pool creator's initial hunch. For example:
* ```
* Question: _Who will win the 2014 FIFA World Cup?_
* My hunch: _Brazil_
* ```
* 
* When in hunch-only mode, which occurs when responding to a pool invitation to make a 
* hunch about a given event, only the hunch is specified:
* ```
* My hunch: _6_
* ```
*
* @class nos.CreateView
* @public
*/
enyo.kind({
	name: "nos.CreateView",
	kind: "FittableRows",
	fit: true
});
