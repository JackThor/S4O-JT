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
		    	height:40,
		    	layout:{
		    		type:'hbox',
		    		pack:'end'
		    	},
		    	items:[
		    	       
		    	       {
		    	    	   docked:'left',
		    	    	   xtype:'label',
		    	    	   html:'<div class="projectTitle" style="font-family:calibri;font-size:22px;text-align:center;color:#F0F0F0;margin-left:25px;margin-top:30px">Projects</div>'
		    	       },{
		    	    	   xtype:'searchfield',
		    	    	   itemId:'projectSearch',
		    	    	   id:'projectSearch',
		    	    	   width:100,
		    	       }	
		    	       
		    	      ]
		    	
		       },{
		    	   xtype :'list',
		    	   	  id : 'projectList',
		    	      height: 180,
		    	      ui:'round',
		    	      border:5,
		    	      scrollable: true,
		    	      disableSelection:true,
		    	      grouped:false,
		    	      loadingText: 'Loading Projects',
		    	      emptyText: '<div>No Projects Found</div>',
		    	      onItemDisclosure: true,
		    	      itemTpl: '<div style="font-size:14px">{firstLetter}</div>',
		    	      store : 'projectStore'
		    	      
		    	   
		       }
		       
		       ]
		
	}
	
});