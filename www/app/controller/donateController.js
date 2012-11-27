Ext.define('GS.controller.donateController',{
	extend :'Ext.app.Controller',
	
	config: {
		control :{
						
			donate: {
				tap: 'goToDonate'
			},
			myProgress :{
				tap: 'goToMyProgress'
			}
		
		},
	
		refs:{
			
			donate: '#donateNow',
			myProgress: '#myProgress'
		}
		
	},
	
	views: [
	    	'donateView'
	        ],
	        
	models : ['login'],
	    	
	stores : ['instance'],
	    	
	requires: ['GS.model.login'],
	
	goToDonate : function(){
		Ext.Viewport.setActiveItem({
			xtype: 'donateView'
		});
	},
	
	goToMyProgress : function(){
		//TODO go to myprogress view
	}
});