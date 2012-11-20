Ext.define('GS.view.volunteerView',{
	extend : 'Ext.Panel',
	xtype : 'volunteerView',
	
	config : {
		fullscreen : true,
		layout : 'vbox',
		items: [
		        	{
		        		dock : 'top',
			        	xtype : 'toolbar',
			        	title : 'Volunteer',
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
		        		dock : 'top',
		        		xtype : 'searchfield',
		        		placeHolder : 'Search....'
		        	},{
				    	   xtype : 'panel',
				    	   dock : 'bottom',
				    	   layout : {
				    		   type : 'hbox'
				    	   },
				    	   width: 330,
				    	   items: [
				    	          {
				    	        	   xtype : 'button',
				    	        	   text : 'Inspiration',
				    	        	   width: 110,
				    	        	   id : 'inspire'		    	        		   
				    	           },{
				    	        	   xtype : 'button',
				    	        	   text : 'Calendar',
				    	        	   width: 110,
				    	        	   id : 'calendar'
				    	           },{
				    	        	   xtype : 'button',
				    	        	   text : 'Chat',
				    	        	   width: 110,
				    	        	   id : 'chat'
				    	           }
				    	           
				    	           ]
				       },{
				    	   xtype : 'panel',
				    	   dock : 'bottom',
				    	   layout : {
				    		   type : 'hbox'
				    	   },
				    	   width: 330,
				    	   items: [
				    	           {
				    	        	   xtype : 'button',
				    	        	   text : 'Fundraising',
				    	        	   width:110,
				    	        	   id : 'fundraise'
				    	           },{
				    	        	   xtype : 'button',
				    	        	   text : 'Volunteer',
				    	        	   width:110,
				    	        	   id : 'volunteer'
				    	           },{
				    	        	   xtype : 'button',
				    	        	   text : 'Progress Jar',
				    	        	   width:110,
				    	        	   id : 'progress'
				    	           }
				    	           ]
				       }
		        	
		        ]

	}
	
});