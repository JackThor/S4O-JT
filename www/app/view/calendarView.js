Ext.define('GS.view.calendarView',{
	extend : 'Ext.Container',
	xtype : 'calendarView',
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		items :[
		        {
		        	xtype: 'toolbar',
		        	title: 'Calendar',
		        	dock : 'top',
		        	items:[
		        	       {
		        	    	   xtype: 'button',
		        	        	iconCls:'home',
		        	        	zIndex:1,
		        	        	iconMask:true,
				    	        text : 'Back',
				    	        id :'back'
		        	       }
		        	       ]
		        	
		        		
		        },{
		        	xtype: 'TouchCalendarView'
		        	
		        	
		        },{
		        	xtype:'button',
		        	text:'Add Event',
		        	layout:{
		        		pack:'center'
		        	},
		        	padding:10,
		        	id:'AddEvents'
		        },{
		        	xtype :'list',
 		    	   	  id : 'list1',
 		    	      height: 100,
 		    	      scrollable: true,
 		    	      loadingText: 'Loading Events',
 		    	      emptyText: '<div>No Events Found</div>',
 		    	      onItemDisclosure: true,
 		    	      itemTpl: '<div>{event}</div>',
 		    	      store : 'Events'
		        },{
			    	   xtype : 'panel',
			    	   dock : 'bottom',
			    	   layout : {
			    		   type : 'hbox'
			    	   },
			    	   width: 320,
			    	   items: [
			    	          {
			    	        	   xtype : 'button',
			    	        	   iconCls: 'volunteer',
			    	        	   zIndex: 1,
			    	        	   iconMask: true,
			    	        	   width: 106,
			    	        	   id : 'inspire'		    	        		   
			    	           },{
			    	        	   xtype : 'button',
			    	        	   iconCls: 'action',
			    	        	   zIndex: 1,
			    	        	   iconMask: true,
			    	        	   width: 106,
			    	        	   id : 'calendar'
			    	           },{
			    	        	   xtype : 'button',
			    	        	   iconCls: 'organize',
			    	        	   zIndex: 1,
			    	        	   iconMask: true,
			    	        	   width: 106,
			    	        	   id : 'chat'
			    	           }
			    	           
			    	           ]
			       },{
			    	   xtype : 'panel',
			    	   dock : 'bottom',
			    	   layout : {
			    		   type : 'hbox'
			    	   },
			    	   width: 320,
			    	   items: [
			    	           {
			    	        	   xtype : 'button',
			    	        	   iconCls: 'settings',
			    	        	   zIndex: 1,
			    	        	   iconMask: true,
			    	        	   width:106,
			    	        	   id : 'fundraise'
			    	           },{
			    	        	   xtype : 'button',
			    	        	   iconCls: 'refresh',
			    	        	   zIndex: 1,
			    	        	   iconMask: true,
			    	        	   width:106,
			    	        	   id : 'volunteer'
			    	           },{
			    	        	   xtype : 'button',
			    	        	   iconCls: 'locate',
			    	        	   zIndex: 1,
			    	        	   iconMask: true,
			    	        	   width:106,
			    	        	   id : 'progress'
			    	           }
			    	           ]
			       }
			       ]
		}
});