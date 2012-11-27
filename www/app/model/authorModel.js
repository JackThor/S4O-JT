Ext.define('GS.model.authorModel',{
	extend:'Ext.data.Model',
	
	config:{
		fields:[
		        {name:'Id',type:'string'}, 
		        {name:'s4o__Image__c',type:'string'},
		        {name:'SystemModstamp',type:'string'},
		        {name:'OwnerId',type:'string'},
		        {name:'Name',type:'string'}
		        
		        ]
	}
});