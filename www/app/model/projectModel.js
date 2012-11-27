/**
*@class GS model.projectModel
*@extends Ext.data.Model
*
*
*
*/

Ext.define('GS.model.projectModel',{
	extend:'Ext.data.Model',
	config:{
		idProperty:'id',
		fields:[ 
			{name:'s4o__Title__c',type:'string'},
			{name:'s4o__Start_Date__c',type:'string'},
			{name:'s4o__Org__c',type:'string'},
			{name:'s4o__Materials__c',type:'string'},
			{name:'s4o__End_Date__c',type:'string'},
			{name:'s4o__Description__c',type:'string'},
			{name:'s4o__Cost__c',type:'string'},
			{name:'s4o__Contact__c',type:'string'},
			{name:'s4o__Cause__c',type:'string'},
			{name:'firstLetter',
				convert:function(value,record){
					//return first letter of title
					var st = record.get('s4o__Title__c');
					
					if (st.length > 24){
						var returnString =st.substring(0,24) + '...';
						return returnString;
					}
					else{
						return st;
					}
					
					
				}
			}]
	}
});