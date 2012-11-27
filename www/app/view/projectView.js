Ext.define('GS.view.projectView',{
	extend:'Ext.Container',
	xtype:'projectView',
	initialize:function(record){
		Ext.Msg.alert('Info',record,Ext.emptyFn);
	},
	config:{
		fullscreen:true,
		layout:'fit',
		items:[
		       {
		    	   docked:'top',
		    	   xtype:'titlebar',
		    	   title:'Project Screen',
		    	   layout:{
		    		   type:'vbox',
		    		   pack:'end'
		    			   
		    	   },
		    	   items:[
		    	          {
		    	        	  docked:'left',
		    	        	  xtype: 'button',
		        	          iconCls:'home',
		        	          zIndex:1,
		        	          iconMask:true,
		        	          width:30,
		        	          ui:'lightBlue',
				    	      text : 'Back',
				    	      id :'back'
		    	          },{
		    	        	  docked:'right',
		    	        	  xtype:'button',
		    	        	  iconCls:'settings8',
		    	        	  ui:'lightBlue',
		    	        	  zIndex: 1,
		   	        	   	  iconMask: true,
		    	        	  id:'settings'
		    	          }
		    	          
		    	          ]
		       },{
		    	   xtype:'panel',
		    	   layout:'hbox',
		    	   items:[
		    	          {
		    	        	  xtype:'textfield',
		    	        	  label:'Project Title:',
		    	        	  id:'projectTitle'
		    	          },{
		    	        	  xtype:'panel',
		    	        	  html:'<div id="progressBar" style="height:200px></div>',
		    	        	  height:200,
		    	        	  iconCls:'info',
		    	        	  listeners:{
		    	        		  painted:function(){
		    	        			  
		    	        		  }
		    	        	  }
		    	          }
		    	          ]
		       },{
		    	   xtype:'panel',
		    	   items:[
		    	          {
		    	        	  xtype:'textareafield',
		    	        	  label:'Target Market:',
		    	        	  itemId:'targetMarket',
		    	        	  id:'targetMarket'
		    	        		  
		    	          },{
		    	        	  xtype:'textfield',
		    	        	  label:'Purpose:',
		    	        	  id:'purpose'
		    	          },{
		    	        	  xtype:'textfield',
		    	        	  label:'Details:',
		    	        	  id:'details'
		    	          },{
		    	        	  xtype:'textfield',
		    	        	  label:'Photos:',
		    	        	  id:'photos'
		    	          },{
		    	        	  xtype:'textfield',
		    	        	  label:'Materials needed for donations',
		    	        	  id:'materials'
		    	          },{
		    	        	  xtype:'textfield',
		    	        	  label:'Contact:',
		    	        	  id:'contact'
		    	          }
		    	          ]
		       },{
		    	   xtype:'panel',
		    	   hidden:true,
		    	   modal:true,
		    	   hideOnMaskTap:true,
		    	   width:320,
		    	   height:150,
		    	   id:'buttonPanel',
		    	   items:[
{
	   xtype : 'panel',
	   dock : 'bottom',
	   layout : {
		   type : 'hbox',
		   align:'end'
		   
	   },
	   width: 320,
	   items: [
	          {
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   iconMask: true,
	        	   html:'<img style="height:25px" src="resources/icons/quote.png"/><div style="height:16px;font-family:calibri;font-size:12px">Inspire</div>',
	        	   zIndex: 1,
	        	   width:75,
	        	   margin:'10 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   text:'Inspire',
	        	   id : 'inspire'		    	        		   
	           },{
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   html:'<img style="height:25px" src="resources/icons/onebit_11.png"/><div style="height:16px;font-family:calibri;font-size:12px">Calendar</div>',
	        	   width: 75,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'calendar'
	           },{
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   html:'<img style="height:25px" src="resources/icons/onebit_10.png"/><div style="height:16px;font-family:calibri;font-size:12px">Chat</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 75,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'chat'
	           }
	           
	           ]
},{
	   xtype : 'panel',
	   dock : 'bottom',
	   layout : {
		   type : 'hbox',
		   align:'end'
	   },
	   width: 320,
	   items: [
	           {
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   html:'<img style="height:25px" src="resources/icons/onebit_16.png"/><div style="height:16px;font-family:calibri;font-size:12px">Fundrasing</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 75,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'fundraise'
	           },{
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   html:'<img style="height:25px" src="resources/icons/onebit_27.png"/><div style="height:16px;font-family:calibri;font-size:12px">Volunteer</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 75,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'volunteer'
	           },{
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   html:'<img style="height:25px" src="resources/icons/moneyjar_by_Artdesigner.lv.png"/><div style="height:16px;font-family:calibri;font-size:12px">Progress</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 75,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'progress'
	           }
	           ]
}
		    	          
		    	          ]
		       },{
			    	 docked:'bottom',
			    	 xtype:'toolbar',
			    	 layout:{
			    		 type:'hbox',
			    		 pack:'center'
			    	 },
			    	 items:[
			    	        {
			    	        	xtype:'button',
			    	        	text:'Menu',
			    	        	ui:'lightBlue',
			    	        	width:100,
			    	        	id:'menuButton',
			    	        	listeners:{
			    	        		tap:function(){
			    	        			if (!Ext.getCmp('buttonPanel').hidden){
			    	        				Ext.getCmp('buttonPanel').showBy(Ext.getCmp('menuButton'));
			    	        			}
			    	        			
			    	        			
			    	        		}
			    	        	}
			    	        }
			    	        ]
			       }
		       ]
	}
});