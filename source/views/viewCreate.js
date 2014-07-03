/**
* The view that allows a user to create a hunch and/or a pool, depending on the context. 
* When in pool-creation mode, the originating question is specified in addition to the
* pool creator's initial hunch. For example:
* ```
* What do you want to make a hunch about?
* _Who will win the 2014 FIFA World Cup?_
* 
* My hunch: _Brazil_
* ```
* 
* When in hunch-only mode, which occurs when responding to a pool invitation to make a 
* hunch about a given event, only the hunch is specified in addition to name, if not
* logged-in and/or name has not been previously specified:
* ```
* Name: Aaron
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
