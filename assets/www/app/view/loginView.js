Ext.define('GS.view.loginView',{
	extend : 'Ext.Container',
	xtype: 'loginView',
	
	config: {
		fullscreen: true,
		layout: {
			type:'vbox'
			
		},
		items:[
		       {
		    	   dock : 'top',
		    	   xtype : 'toolbar',
		    	   title: 'Salesforce Login'
		       },{
		    	   xtype : 'textfield',
		    	   name : 'userid',
		    	   label: 'User Id',
		    	   id : 'userId'
		       },{
		    	   xtype : 'passwordfield',
		    	   name : 'password',
		    	   label : 'Password',
		    	   id : 'passws'
		       },{
		    	   xtype: 'panel',
		    	   name : 'description',
		    	   id : 'msgDes',
		    	   height : 320,
		    	   html : '<div id = "des"></div>'
		       },{
		    	   xtype : 'toolbar',
		    	   dock : 'bottom',
		    	   layout : {pack : 'center'},
		    	   items :[
		    	           {
		    	        	   xtype :'button',
			    	           text : 'Submit',
			    	           ui:'lightBlue',
			    	           width: 150,
			    	           id : 'loginButton'
		    	           }
		    	          
		    	           ]
		       }
		       
		       ]
	}
});