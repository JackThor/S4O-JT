Ext.define('GS.view.settingsView',{
	extend:'Ext.Container',
	xtype:'settingsView',
	config:{
		fulscreen:true,
		layout:'fit',
		items:[
		       {
		    	   docked:'top',
		    	   xtype:'toolbar',
		    	   title:'Settings',
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
		       
		       }
		       
		       ]
	}
});