/**
*@class GS.store.ProjectStore
*@extends Ext.data.Store
*
*
*
*/
Ext.define('GS.store.projectStore',{
	extend:'Ext.data.Store',
	requires:"Ext.data.proxy.LocalStorage",
	config:{
		model:'GS.model.projectModel',
		groupField:'s4o__Cause__c',
		groupDir:'ASC',
		sorters:[{property:'s4o__Title__c',direction:'ASC'}]
		
	}
});