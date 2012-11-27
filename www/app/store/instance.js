/*
*
*Store salesforce instances in this store. 
*Uses model login
*
*/

Ext.define('GS.store.instance',{
	extend: 'Ext.data.Store',
	requires: ['GS.model.login'],
	config:{
		model: 'GS.model.login'
				
	}
	
});