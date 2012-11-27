Ext.define('GS.view.searchListView',{
	extend:'Ext.Container',
	xtype:'searchListView',
	requires:[
	          'Ext.data.Store',
	          'Ext.List',
	          'Ext.field.Search',
	          'Ext.Toolbar'
	          ],
	config:{
		layout:'vbox',
		items:[
		       {
		    	docked:'top',
		    	xtype:'toolbar',
		    	ui:'greenBar',		    		
		    	height:40,
		    	layout:{
		    		type:'hbox',
		    		pack:'end'
		    	},
		    	items:[
		    	       
		    	       {
		    	    	   docked:'left',
		    	    	   xtype:'label',
		    	    	   html:'<div class="projectTitle" style="font-family:calibri;font-size:16px;text-align:center;color:#F0F0F0;margin-left:25px;margin-top:30px">Projects</div>'
		    	       },{
		    	    	   xtype:'searchfield',
		    	    	   itemId:'projectSearch',
		    	    	   id:'projectSearch',
		    	    	   width:150,
		    	       }	
		    	       
		    	      ]
		    	
		       },{
		    	   xtype :'list',
		    	   	  id : 'projectList',
		    	      height: 180,
		    	      border:5,
		    	      cls:'listPanel',
		    	      scrollable: true,
		    	      disableSelection:true,
		    	      grouped:false,
		    	      loadingText: 'Loading Projects',
		    	      emptyText: '<div>No Projects Found</div>',
		    	      onItemDisclosure: true,
		    	      itemTpl: '<div>{firstLetter}</div>',
		    	      store : 'projectStore'
		    	      
		    	   
		       }
		       
		       ]
		
	}
	
});