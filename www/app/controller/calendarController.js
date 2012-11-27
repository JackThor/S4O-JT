Ext.define('GS.controller.calendarController',{
	extend:'Ext.app.Controller',
	config:{
		views:['calendarView'],
		models:['Events'],
		stores:['eventStore'],
		requires:['GS.model.Events'],
		control:{
			addButton:{
				tap:'addEvent'
			}
		},
		refs:{
			addButton:'#AddEvents'
		}
	},
	
	addEvent:function(){
		var store = Ext.getStore('eventStore');
		
		var record = Ext.create('GS.model.Events',{
			event:'fundraiser',
			location:'1st street San Jose Ca, 95112',
			start:'11/01/2012',
			end:'11/04/2012'
		});
		
		store.add(record);
	}
});