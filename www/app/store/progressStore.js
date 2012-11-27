/*
*
*Store salesforce instances in this store. 
*Uses model login
*
*/

Ext.define('GS.store.progressStore',{
	extend: 'Ext.data.Store',
	requires: ['GS.model.progressModel'],
	config:{
		model: 'GS.model.progressModel'
				
	}
	
});