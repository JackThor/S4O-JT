
Ext.define('GS.controller.buttons',{
	extend: 'Ext.app.Controller',
	
	config :{
		views : [
		         	'loginView',
		         	'projectListView',
		         	'inspireView',
		         	'calendarView',
		         	'chatView',
		         	'fundView',
		         	'volunteerView',
		         	'progressView',
		         	'TouchCalendarView',
		         	'settingsView',
		         	'searchListView',
		         	'projectView'
		         ],
		         
		models : ['login','progressModel','projectModel'],
		
		stores : ['instance','progressStore','projectStore'],
		
		requires: ['GS.model.login','GS.model.projectModel'],
		
		control :{
			loginButton : {
				tap : 'doLogin'
			},
			inspire :{
				tap : 'goToInspire'
			},
			calendar : {
				tap: 'goToCalendar'
			},
			chat :{
				tap: 'goToChat'
			},
			fundraise: {
				tap: 'goToFundraise'
			},
			volunteer: {
				tap : 'goToVolunteer'
			},
			progress : {
				tap : 'goToProgress'
			},
			backButton :{
				tap: 'goBack'
			},
			settings:{
				tap:'goSettings'
			},
			projectSearch:{
				
				clearicontap:'onSearchClearIconTap',
				keyup:'OnSearchKeyUp'
			},
			projectList:{
				itemdoubletap:'goToProjectPage'
			}
		},
		
		refs : {
			loginButton : '#loginButton',
			inspire : '#inspire',
			calendar: '#calendar',
			chat :'#chat',
			fundraise : '#fundraise',
			volunteer : '#volunteer',
			progress : '#progress',
			backButton : '#back',
			settings:'#settings',
			projectSearch:'#projectSearch',
			projectList:'#projectList',
			targetMarket:'#targetMarket'
		}
	},
	
	goToProjectPage:function( me, index, target, record, e, eOpts ){
		
		
	
		Ext.Viewport.setActiveItem({
			xtype : 'projectView',
			record:record
		});
		
		
	},	
	
	OnSearchKeyUp:function(field){
		
		var value = field.getValue(),
		store = Ext.getCmp('projectList').getStore();
		
		store.clearFilter();
		
		if (value){
			var searches = value.split(''),
			regexps =[],
			i;
			
			for (i = 0; i < searches.length; i++){
				if(!searches[i]) continue;
				
				regexps.push(new RegExp(searches[i],'i'));
			}//end of for
			
			store.filter(function(record){
				var matched = [];
				
				for(i = 0; i < regexps.length; i++){
					var search = regexps[i],
					didMatch = record.get('s4o__Title__c').match(search);
					
					matched.push(didMatch);
				}//end of for
				
				if (regexps.length > 1 && matched.indexOf(false) != -1){
					return false;
				}
				else{
					return matched[0];
				}
				
			});//end of function
		}
	},
	
	onSearchClearIconTap:function(){
		Ext.getCmp('projectList').getStore().clearFilter();
	},
		
	
	doLogin : function(){
			
		   var username = 'wmorfin';
		   var psswd = 'EnTransform1';
		   
		   
		  
		   
			   var url = 'http://s4o-developer-edition.na11.force.com/demo';
			  
			   //var url = 'http://entransform-myinfo-developer-edition.na9.force.com/Users';
			    var queryWhere = username + '-' + psswd;
			    console.debug(queryWhere);
				query = 'beta';
				console.debug(url+'?queryString='+query+'&where='+queryWhere+'&callback=?');
				jQuery.getJSON(url+'?queryString='+query+'&where='+queryWhere+'&callback=?',function(data){
					
					console.debug(data);
					
					if(data == true){
						query = 'zulu';
						
						jQuery.getJSON(url+'?queryString='+query+'&where='+queryWhere+'&callback=?',function(data2){
							
							var projectStore = Ext.getStore('projectStore');
							projectStore.setData(data2);
							projectStore.load();
							
						});
						
						
						
						 Ext.Viewport.setActiveItem({
								xtype : 'projectListView'
							});
					}
					else{
						Ext.Msg.alert('Failure','Invalid Credentials',Ext.emptyFn);
					}
										
				});
			  
		  
		   
		 
		  
		  
		
	},
	
		
	goToInspire : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'inspireView'
		});
	},
	
	goToCalendar : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'calendarView'
		});
	},
	
	goToChat : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'chatView'
		});
	},
	
	goToFundraise : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'fundView'
		});
	},
	
	goToVolunteer : function(){
		
		Ext.Viewport.setActiveItem({
			xtype : 'volunteerView'
		});
	},
	
	goToProgress : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'progressView'
		});
	},
	
	goBack : function(){
		Ext.Viewport.setActiveItem({
			xtype : 'projectListView'
		});
	},
	
	goSettings:function(){
		Ext.Viewport.setActiveItem({
			xtype : 'settingsView'
		});
	}
	
});