Ext.Loader.setConfig({
	enabled: true,
	paths:{
		'view' : 'app/view',
		'controller' : 'app/controller',
		'model' : 'app/model',
		'store' : 'app/store'
		
	}
	
});



Ext.application({
	name: 'GS',
	views: ['loginView','projectListView','volunteerView','inspireView','calendarView','chatView','fundView','progressView','donateView','TouchCalendarView','newEventsView','settingsView','searchListView','projectView'],
	models: ['login','progressModel','projectModel','inspirationModel','authorModel'],
	stores: ['instance','progressStore','projectStore','inspirationStore','authorStore'],
	controllers : ['buttons','donateController'],
	launch : function(){
		
		 // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
				
		Ext.create('GS.view.loginView');
	}
});