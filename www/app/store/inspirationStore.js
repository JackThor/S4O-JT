/**
*@class GS.store.inspirationStore
*@extends Ext.data.Store
*
*
*
*/

Ext.define('GS.store.inspirationStore',{
	extend:'Ext.data.Store',
	requires:"Ext.data.proxy.LocalStorage",
	config:{
		model:'GS.model.inspirationModel'
		
	}
});