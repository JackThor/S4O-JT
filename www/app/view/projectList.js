
Ext.Loader.setPath({
	'Ext': 'sdk/src'
});

Ext.application({
	name: 'list',
	launch: function(){
		
		Ext.define('Contact',{
			extend: 'Ext.data.Model',
			fields:[
			        {name: 'firstName', type:'string'},
			        {name: 'lastName', type:'string'}
			        ]
		});

		var store = new Ext.data.Store({
			model: 'Contact',
			data:[
			      {firstName: 'Ajit', lastName: 'Kumar'},
			      {firstName: 'Alok', lastName: 'Ranjan'},
			      {firstName: 'Pradeep', lastName: 'Lavania'},
			      {firstName: 'Sunil', lastName: 'Kumar'},
			      {firstName: 'Sujit', lastName: 'Kumar'},
			      {firstName: 'Pratyush', lastName: 'Kumar'},
			      {firstName: 'seema', lastName: 'Singh'},
			      {firstName: 'Ayush', lastName: 'Ranjan'},
			      {firstName: 'Jay', lastName: 'Sharma'}
			      ]
			});	
	var list = new Ext.Panel({
		fullscreen: true,
		items:[
		       {
		    	 xtype: 'toolbar',
		    	  title: 'Volunteer Projects',
		    	 name: 'tollBar'
		       },{
		    	   xtype: 'panel',
		    	   html : '<div><p><img src ="../../../res/drawable-ldpi/ic_launcher.png"></p><p>Happiness is when what you think, what you say, and what you do are in harmony. -Mahatma Ghandi</p></div>'
		       },
		       {
		    	    xtype: 'list',
		    	    itemTpl: '<div>{firstName}</div>',
		    		store: store,
		    		floating: true,
		    		width: 350,
		    		height: 230,
		    		centered: true,
		    		modal: true,
		    		hideOnMaskTap: false
		    	   
		       },{
		    	   xtype: 'panel',
		    	   name: 'bottomPanel'
		       }
	       
	       ]	
	
});



		this.viewport = list;
	}
});