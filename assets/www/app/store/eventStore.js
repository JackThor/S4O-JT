Ext.define('GS.store.eventStore',{
	extend:'Ext.data.Store',
	requires:['GS.model.Events'],
	config:{
		model:'GS.model.Events'
	}
});