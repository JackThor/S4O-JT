Ext.define('GS.view.barChartView',{
	extend : 'Ext.Chart',
	xtype : 'barChartView',
	config : {
	   width: 320,
 	   height:100,
	   animate: true,
  	   store:'progressStore',
  	   axes:[
  	         {
  	        	 type:'gauge',
  	        	 position:'gauge',
  	        	 minimum:0,
  	        	 maximum:100,
  	        	 steps:10
  	         }
  	         ],
  	         
  	   series: [{
  		   type:'gauge',
  		   angleField:'donatedAmount',
  		   colorSet:['#F49D10','#123456']
  	   }],
  	   
  	   interactions:[{
  		   type:'rotate'
  	   }]
	}
});


