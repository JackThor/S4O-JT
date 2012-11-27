Ext.define('GS.view.chatView',{
	extend : 'Ext.Container',
	xtype : 'chatView',
	
	config : {
		fullscreen: true,
		layout: 'vbox',
		items : [
		         {
		        	 xtype: 'toolbar',
		        	 title: 'Chat',
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
		        	 xtype: 'panel',
		        	 html :'<div>Chat using the salesforce chatter</div>'
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