/**
* The starting view that provides an introduction to `HunchTime` and displays public hunches as well
* as "call-to-actions" to create hunch pools.
*
* @class nos.StartView
* @public
*/
enyo.kind({
	name: 'nos.StartView',
	kind: 'FittableRows',
	classes: 'mochi enyo-unselectable enyo-fit',
	components: [
		{kind: 'mochi.Header', content: 'HunchTime', components: [
			{kind: 'mochi.Button', content: 'Dashboard', ontap: 'navTapped'},
			{kind: 'mochi.Button', content: 'Create', ontap: 'navTapped'},
			{kind: 'mochi.Button', content: 'Settings', ontap: 'navTapped'}
		]},
		{kind: 'mochi.Panels', name:'mainPanels', fit: true}
	],
	navTapped: function(sender) {
		this.goToPanel('nos.' + sender.getContent() + 'View');
		return true;
	},
	goToPanel: function(nom) {
		var panels = this.$.mainPanels,
			panelControls = this.$.mainPanels.getPanels(),
			panelControl,
			idx;

		for (idx = 0; idx < panelControls.length; idx++) {
			panelControl = panelControls[idx];
			if (panelControl.kind == nom) {
				if (panels.getIndex() !== idx) {
					panels.setIndex(idx);
				} else if (idx > 0) {
					panelControl.destroy();
				}
				return;
			}
		}

		this.addPanel(nom);
	},
	addPanel: function(nom) {
		var c, 
			panels = this.$.mainPanels;

		c = panels.createComponent({kind: nom, width: '100%'});
		c.render();
		panels.reflow();
		panels.setIndex(panels.getIndex() + 1);
	}
});
