Ext.define('GS.view.progressView',{
	extend: 'Ext.Container',
	xtype : 'progressView',
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		items:[
		       {
		    	   xtype : 'toolbar',
		    	   title: 'Your Progress',
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
		    	   xtype:'panel'
		    	   
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