/**
* The view that allows a user to create a hunch and/or a pool, depending on the context. 
* When in pool-creation mode, the originating question is specified in addition to the
* pool creator's initial hunch. For example:
* 
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
* 
* ```
* Name: Aaron
* My hunch: _6_
* ```
*
* @class nos.CreateView
* @public
*/
enyo.kind({
	name: 'nos.CreateView',
	style: 'width: 100%',
	components: [
		{kind: 'mochi.Subheader', content: 'Create Hunch'},
		{kind: 'enyo.Scroller', fit: true, components:[
			{kind: 'mochi.Subheader', content: 'What do you want to make a hunch about?'},
			{classes: 'mochi-sample-tools mochi-sample-textarea-tools', components: [
				{kind: 'mochi.InputDecorator', components: [
					{kind: 'mochi.Input', placeholder: 'i.e. Who will win the 2014 FIFA World Cup?', onchange:'inputChanged'}
				]}
			]},
			{kind: 'mochi.Subheader', content: 'Your hunch:'},
			{classes: 'mochi-sample-tools mochi-sample-textarea-tools', components: [
				{kind: 'mochi.InputDecorator', components: [
					{kind: 'mochi.Input', placeholder: 'i.e. Brazil', onchange:'inputChanged'}
				]}
			]}
		]}
	]
});
