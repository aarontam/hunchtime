/**
* Represents a view of a given hunch pool. This consists of the original hunch event
* itself, as well as all of the hunches that have been made. For example:
* ```
* Who will win the 2014 FIFA World Cup?
* 
* John's hunch: _Brazil_
* Jane's hunch: _Argentina_
* Scott's hunch: _Argentina_
* Sam's hunch: _Belgium_
* Lucy's hunch: _Colombia_
*
* @class nos.PoolView
* @public
*/
enyo.kind({
	name: "nos.PoolView",
	kind: "FittableRows",
	fit: true
});
