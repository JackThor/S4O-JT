Ext.define('GS.view.newEventsView',{
	extend:'Ext.Container',
	xtype:'newEventsView',
	config:{
		fullscreen:true,
		layout:'vbox',
		items:[
		       {
		    	   xtype:'textfield',
		    	   name:'event',
		    	   label:'Event Name',
		    	   id:'event'
		       },{
		    	   xtype:'textfield',
		    	   name:'location',
		    	   label:'location',
		    	   id:'location'
		       },{
		    	   xtype:'textfield',
		    	   name:'start',
		    	   label:'Start End',
		    	   id:'start'
		       },{
		    	   xtype:'textfield',
		    	   name:'end',
		    	   label:'End Date',
		    	   id:'end'
		       },{
		    	   xtype:'button',
		    	   text:'Add Event',
		    	   id:'addEvent'
		       }
		       
		       ]
	}
});