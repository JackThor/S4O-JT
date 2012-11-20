
/**
*@class GS model.Events
*@extends Ext.data.Model
*
*
*
*/
Ext.define('GS.model.Events',{
	extend:'Ext.data.Model',
	config:{
		fields:['event','location','start','end'],
		proxy:{
			type:'localstorage',
			id:'calendarEvents'
		}
	}
	
});