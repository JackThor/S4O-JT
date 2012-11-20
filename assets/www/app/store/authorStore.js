Ext.define('GS.store.authorStore',{
	extend:'Ext.data.Store',
	requires:'Ext.data.proxy.LocalStorage',
	config:{
		model:'GS.model.authorModel'
	}
});