Ext.define('GS.view.projectListView',{
	extend : 'Ext.Container',
	xtype : 'projectListView',
	models : ['login','progressModel','projectModel','inspirationModel','authorModel'],	
	stores : ['instance','progressStore','projectStore','inspirationStore','authorStore'],
	
	config : {
		
		fullscreen: true,
		layout : 'vbox',
		items:[
		       {
		    	   dock : 'top',
		    	   xtype : 'toolbar',
		    	   ui:'white',
		    	   layout:{
		    		   type:'hbox',
		    		   pack:'end'
		    	   },
		    	   items:[
		    	         {
		    	        	 docked:'left',
		    	        	 xtype:'panel',
		    	        	 cls:'toptoolbar',
		    	        	 width:'70%'
		    	        		 
		    	         },{		    	        	 
		    	        	  xtype:'button',
		    	        	  dock:'left',
		    	        	  iconCls:'settings8',
		    	        	  iconAlign:'left',
		    	        	  zIndex: 1,
		    	        	  width:45,
		   	        	   	  iconMask: true,
		    	        	  id:'settings'
		    	          },{
		    	        	  xtype:'button',
		    	        	  iconCls:'lock_closed',
		    	        	  iconAlign:'left',
		    	        	  width:45,
		    	        	  zIndex: 1,
		   	        	   	  iconMask: true
		    	          }
		    	          ]
		    	   
		       },{
		    	   xtype : 'carousel',
		    	   id:'myCar',
		    	   height:90,
		    	   listeners:{
		    		   painted:function(){
		    			   
		    			   var url = 'http://s4o-developer-edition.na11.force.com/demo';
		    			   
		    			    var query = 'zelda';
		    				var whereString = '';
		    				
		    				jQuery.getJSON(url+'?queryString='+query+'&callback=?',function(data3){
		    					
		    					
		    					var inspirationStore = Ext.getStore('inspirationStore');
		    					inspirationStore.setData(data3);
		    					inspirationStore.load();
		    					
		    					
		    					
			    				
			    				
			    				queryWhere = '';
			    				query = 'shuman';
			    				jQuery.getJSON(url+'?queryString='+query+'&callback=?',function(data4){
			    					
			    					
			    					var authorStore = Ext.getStore('authorStore');
			    					authorStore.setData(data4);
			    					authorStore.load();
			    					
			    					
				    				
				    				if (authorStore.getCount() == inspirationStore.getCount()){
				    					
				    					//get carousel componenet
			    			      		var car = Ext.getCmp('myCar');
			    			      		  			      				      		
			    			      		
			    			      		//iterate though the store and add inspiration message and author
			    			      		for (var i = 0; i < inspirationStore.getCount(); i++){
			    			      			var record1 = inspirationStore.getAt(i);
			    			      			var record2 = authorStore.getAt(i);
			    			      			var author = record2.getData(false).Name;
			    			      			
			    			      			
			    			      			var message = record1.getData(false).s4o__Message__c;
			    			      			if(message.length > 110){
			    			      				message = message.substring(0,110) + '...';
			    			      			}
			    			      			
			    			      			var item = Ext.create('Ext.Panel',{
			    			      				html:'<p class = "inspirationMessage">'+ message + '</p></br>' + '<p class = "authorName">' + author + '</p>',
			    			      				cls:'carouselPanel'
			    			      			});
			    			      			car.add(item);
			    			      		}
				    					
				    				}			    				
				    				
			    					
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
		    	   
		    	   xtype:'searchListView'
	    	      
	          },{
		    	   xtype:'panel',
		    	   height:25,
		    	   cls:'bottomPanel'
		    		   
		       },{
		    	   xtype:'panel',
		    	   id:'visualization',
		    	   cls:'bottomPanel',
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
		    			   
		                    r.text(160, 5, "Year to Date Giving Progress").attr(txtattr);
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
	        	   html:'<img style="height:25px" src="resources/icons/quote.png"/><div style="height:16px;font-family:calibri;font-size:11px">Inspire</div>',
	        	   zIndex: 1,
	        	   width:85,
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
	        	   html:'<img style="height:25px" src="resources/icons/onebit_11.png"/><div style="height:16px;font-family:calibri;font-size:11px">Calendar</div>',
	        	   width: 85,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'calendar'
	           },{
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   html:'<img style="height:25px" src="resources/icons/onebit_10.png"/><div style="height:16px;font-family:calibri;font-size:11px">Chat</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 85,
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
	        	   html:'<img style="height:25px" src="resources/icons/onebit_16.png"/><div style="height:16px;font-family:calibri;font-size:11px">Fundraising</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 85,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'fundraise'
	           },{
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   html:'<img style="height:25px" src="resources/icons/onebit_27.png"/><div style="height:16px;font-family:calibri;font-size:11px">Volunteer</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 85,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'volunteer'
	           },{
	        	   xtype : 'button',
	        	   iconAlign:'top',
	        	   html:'<img style="height:25px" src="resources/icons/moneyjar_by_Artdesigner.lv.png"/><div style="height:16px;font-family:calibri;font-size:11px">Progress</div>',
	        	   zIndex: 1,
	        	   iconMask: true,
	        	   width: 85,
	        	   margin:'0 10 10 10',
	        	   height:55,
	        	   ui:'darkGray',
	        	   id : 'progress'
	           }
	           ]
}
		    	          
		    	          ]
		       },{
		    	   xtype:'panel',
		    	   hidden:true,
		    	   modal:true,
		    	   hideOnMaskTap:true,
		    	   width:320,
		    	   height:150,
		    	   id:'orgsPanel'
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
			    	        	ui:'round',
			    	        	width:100,
			    	        	id:'menuButton',
			    	        	listeners:{
			    	        		tap:function(){
			    	        			if (!Ext.getCmp('buttonPanel').hidden){
			    	        				Ext.getCmp('buttonPanel').showBy(Ext.getCmp('menuButton'));
			    	        			}
			    	        			
			    	        			
			    	        		}
			    	        	}
			    	        },{
			    	        	xtype:'button',
			    	        	text:'My Orgs',
			    	        	width:100,
			    	        	id:'orgsButton',
			    	        	ui:'round',
			    	        	listeners:{
			    	        		tap:function(){
			    	        			if (!Ext.getCmp('orgsPanel').hidden){
			    	        				Ext.getCmp('orgsPanel').showBy(Ext.getCmp('orgsButton'));
			    	        			}
			    	        		}
			    	        	}
			    	        }
			    	        ]
			       }
		       ]
	}
});