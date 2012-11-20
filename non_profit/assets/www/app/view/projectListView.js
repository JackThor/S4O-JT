Ext.define('GS.view.projectListView',{
	extend : 'Ext.Container',
	xtype : 'projectListView',
	models : ['login','progressModel','projectModel','inspirationModel','authorModel'],	
	stores : ['instance','progressStore','projectStore','inspirationStore','authorStore'],
	initialize:function(){
		
		var url = 'http://s4o-developer-edition.na11.force.com/demo';		
		//var url = 'http://entransform-myinfo-developer-edition.na9.force.com/Users';
		//keyword zulu queries projects
		var query = 'zulu';
		
		jQuery.getJSON(url+'?queryString='+query+'&callback=?',function(data){
			
			var projectStore = Ext.getStore('projectStore');
			projectStore.setData(data);
			projectStore.load();
			
		});
		
		
		
	
		
	},
	config : {
		
		fullscreen: true,
		layout : 'vbox',
		items:[
		       {
		    	   dock : 'top',
		    	   xtype : 'toolbar',
		    	   layout:{
		    		   type:'hbox',
		    		   pack:'end'
		    	   },
		    	   items:[
		    	          {		    	        	 
		    	        	  xtype:'button',
		    	        	  dock:'left',
		    	        	  iconCls:'settings8',
		    	        	  ui:'lightBlue',
		    	        	  zIndex: 1,
		   	        	   	  iconMask: true,
		    	        	  id:'settings'
		    	          },{
		    	        	  docked:'left',
		    	        	  xtype:'panel',
		    	        	  html:'<img style="width:100px;height:47px" src="resources/icons/Support4Orgs_Logo_40p.png"/>'
		    	          }
		    	          ]
		    	   
		       },{
		    	   xtype : 'img',
		    	   html : '<strong><p id="message" style="font-family:calibri;font-size:16px;text-align:justify;margin-left:10px;margin-right:10px"></p><p id="author" style="font-family:calibri;font-size:16px;text-align:right;margin-right:10px"></p></br></strong>',
		    	           
		    	   		
		    	   listeners:{
		    		   painted:function(){
		    			   var url = 'http://s4o-developer-edition.na11.force.com/demo';
		    			   //var url = 'http://entransform-myinfo-developer-edition.na9.force.com/Users';
		    				//keyword zelda queries inspirations
		    				var query = 'zelda';
		    				var whereString = '';
		    				
		    				jQuery.getJSON(url+'?queryString='+query+'&callback=?',function(data){
		    					
		    					
		    					var inspirationStore = Ext.getStore('inspirationStore');
		    					inspirationStore.setData(data);
		    					inspirationStore.load();
		    					var record = inspirationStore.getAt(0);
			    				var message = record.getData(false).s4o__Message__c;
			    				var author = record.getData(false).s4o__Author__c; 
			    				if (message.length > 110){
			    					message = message.substring(0,110) + '...';
			    				}
			    				document.getElementById('message').innerHTML ='"'+ message +'"' + '<img style="height:12px;margin-left:150px" src="resources/icons/grayArrow.png"/>';
			    				
			    				
			    				var queryWhere = author;
			    				query = 'shuman';
			    				jQuery.getJSON(url+'?queryString='+query+'&where='+queryWhere+'&callback=?',function(data2){
			    					
			    					
			    					var authorStore = Ext.getStore('authorStore');
			    					authorStore.setData(data2);
			    					authorStore.load();
			    					var record2 = authorStore.getAt(0);
				    				
				    				var authorName = record2.getData(false).Name;
				    				var authorImg = record2.getData(false).s4o__Image__c;
				    				document.getElementById('author').innerHTML = ' -- ' + authorName;
				    				
				    				
			    					
			    				});
			    				
		    					
		    				});
		    				
		    				
		    				
		    				
		    		   },
		    		   tap:function(){
		    			   Ext.Viewport.setActiveItem({
		    					xtype : 'inspireView'
		    				});
		    		   }
		    	   }
		    	  		    		   
		       },{
		    	   xtype: 'panel',
		    	   items:[
		    	          {
		    	        	  xtype:'searchListView',
		    	        	  border:10,
		    	        	  margin:'0 0 20 0'
		   		    	      
		    	          }
		    	          ]
		       },{
		    	   xtype:'panel',
		    	   height:25
		    		   
		       },{
		    	   xtype:'panel',
		    	   id:'visualization',
		    	   border:10,
		    	   html:'<div id="chartDiv" style="height:100px;margin-top:20px"></div>',
		    	   maring:'20 20 20 20',
		    	   height:75,
		    	   title:'Your Progress:',
		    	   iconCls:'info',
		    	   listeners:{
		    		   painted:function(){
		    			   var r = Raphael("chartDiv"),
		    			   fin = function () {
		                        this.flag = r.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
		                    },
		                    fout = function () {
		                        this.flag.animate({opacity: 0}, 300, function () {this.remove();});
		                    },
		                    txtattr = { font: "12px calibri" };
		    			   
		                    r.text(160, 10, "Progress Bar").attr(txtattr);
		    			  var chart = r.hbarchart(20, 10, 280, 33, [[40], [100]], {stacked: true, type: "round"}).hover(fin, fout);   
		    			   
		    			 
		    			   
		    			   //query user danation amount
		    			   /**
		    			   var url = 'http://s4o-developer-edition.na11.force.com/demo';
		    			   var query= 'alphaCentori';
		    			   var queryWhere = 'John Smith';
		    			   jQuery.getJSON(url+'?queryString='+query+'&where='+queryWhere+'&callback=?',function(data2){
		    					   				   
		    							Ext.Msg.alert('info',data2,Ext.emptyFn);	    				
		    					
		    				});
		    			   
		    			   //var donationAmount = parseInt(data2);
		    			   **/
		    			   /**
	    				   var data = google.visualization.arrayToDataTable([
		    			                                                     ['Year', 'Donated', 'Goal'],
		    			                                                     ['2012',  50000,      100000]
		    			                                                     
		    			                                                   ]);

		    			            var options = {
		    			            		title: 'Donation Progress',
		    			                    colors:['green','blue'],
		    			                    isStacked:true,
		    			                    legend:'none',
		    			                    drawZeroLine:false
		    			                    
		    			                    
		    			            };
		    			            
		    			            var formatter = new google.visualization.NumberFormat(
		    			            	      {prefix: '$', negativeColor: 'red', negativeParens: true});
		    			            	  formatter.format(data, 1); // Apply formatter to second column
		    			            	  formatter.format(data,2);

		    				        var chart = new google.visualization.BarChart(document.getElementById('chartDiv'));
		    				        chart.draw(data, options);
		    			   
		    			 **/
		    		   }
		    	   }
		    	 
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
	        	   html:'<img style="height:25px" src="resources/icons/onebit_16.png"/><div style="height:16px;font-family:calibri;font-size:12px">Fundraising</div>',
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