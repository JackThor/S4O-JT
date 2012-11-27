/**
*@class GS.model.inspirationModel
*@extends Ext.data.Model
*
*
*
*/
Ext.define('GS.model.inspirationModel',{
	extend:'Ext.data.Model',
	config:{
		idProperty:'id',
		fields:[
		        {name:'s4o__Message__c', type:'string'},
		        {name:'s4o__Inspiration_Type__c', type:'string'},
		        {name:'s4o__Author__c',type:'string'}
		        ]
	}
});