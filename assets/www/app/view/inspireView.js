Ext.define('GS.view.inspireView',{
	extend: 'Ext.Container',
	xtype: 'inspireView',
	
	config : {
		fullscreen: true,
		layout: 'vbox',
		items:[
		       {
		    	   xtype: 'toolbar',
		    	   title: 'Inspire',
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
		    	   xtype:'panel',
		    	   layout:{
		    		   pack:'center'
		    	   },
		    	   html:["</br></br><div><p>Be the change you desire</p>",
		    	   		"<p>--Ghandi</p></div>",
		    	   		"<div><img class=\"defaultBackground\" src=\"http://src.sencha.io/100/100/http://www.skinet.com/skiing/files/imagecache/gallery_image/_images/201107/windells_hood.jpg\" /></div>"].join("")
		    	   
		       },{
		    	   xtype:'panel',
		    	   layout:{
		    		   pack:'center',
		    		   type:'hbox'
		    	   },
		    	   items:[
		    		          {
		    		        	  xtype:'checkboxfield',
		    		        	  name:'facebook',
		    		        	  label:'facebook',
		    		        	  labelAlign: 'top',
		    		        	  value:'facebook'
		    		          },{
		    		        	  xtype:'checkboxfield',
		    		        	  name:'twitter',
		    		        	  label:'twitter',
		    		        	  labelAlign: 'top',
		    		        	  value:'twitter'
		    		          },{
		    		        	  xtype:'checkboxfield',
		    		        	  name:'linkedIn',
		    		        	  label:'linkedIn',
		    		        	  labelAlign: 'top',
		    		        	  value:'linkedIn'
		    		          },{
		    		        	  xtype:'checkboxfield',
		    		        	  name:'mySpace',
		    		        	  label:'My Space',
		    		        	  labelAlign: 'top',
		    		        	  value:'MySpace'
		    		          },{
		    		        	  xtype:'checkboxfield',
		    		        	  name:'googleGroups',
		    		        	  label:'Google Groups',
		    		        	  labelAlign: 'top',
		    		        	  value:'googleGroups'
		    		          }
		    		     ]
		    	   
		    		   
		       },{
		    	   xtype:'panel',
		    	   html:'</br></br>',
		    	   layout:{
		    		   pack:'center',
		    		   type:'hbox'
		    		  
		    	   },
		    	   items:[
		    	          {
		    	        	  xtype:'button',
		    	        	  padding:10,
		    	        	  text:'Share with friends',
		    	        	  id:'sharing'
		    	          }
		    	          ]
		       },{
		    	   xtype:'panel',
		    	   height:70
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