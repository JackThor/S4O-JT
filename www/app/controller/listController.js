Ext.define('GS.controller.listController',{
	extend:'Ext.app.Controller',
	config:{
		views:[
		       'projectListView'
		       ],
	    models:['projectModel'],
	    stores:['projectStore'],
	    requires:['GS.model.projectModel'],
	    
	    control:{
	    	myList:{
	    		itemtap:'goToListView'
	    	}
	    },
	    refs:{
	    	myList:'#list1'
	    }
		       
		
	},
	
	goToListView: function(list,index,element,record){
		Ext.Msg.alert('Info',index,Ext.emptyFn);
	}


});