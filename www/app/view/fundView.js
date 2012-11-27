Ext.define('GS.view.fundView',{
    extend : 'Ext.Container',
    xtype : 'fundView',
  
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
                    }
                ]

            },
            {
                xtype: 'panel',
                layout: 'hbox',
                height: 55,
                width: 320,
                items: [
                    {
                        xtype: 'button',
                        text: 'Donate Now',
                        margin:'10 10 10 10',
                        ui:'lightBlue',
                        id : 'donateNow'
                    },{
                        xtype:'button',
                        text: 'My Progress',
                        margin:'10 10 10 10',
                        ui:'lightBlue',
                        id :'myProgress'
                    }
                ]
            },

        /*    {
                xtype: 'panel',
                items:[
                    {
                        xtype:'searchListView',
                        border:10,
                        margin:'0 0 20 0'

                    }
                ]
            },  */
            {
                xtype:'panel',
                id:'visualization2',
                border:10,
                html:'<div id="chartDiv2" style="height:100px;margin-top:20px"></div>',
                maring:'20 20 20 20',
                height:100,
                title:'Your Progress:',
                iconCls:'info',
                listeners:{
                    painted:function(){

                    	 var r = Raphael("chartDiv2"),
		    			   fin = function () {
		                        this.flag = r.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
		                    },
		                    fout = function () {
		                        this.flag.animate({opacity: 0}, 300, function () {this.remove();});
		                    },
		                    txtattr = { font: "12px calibri" };
		    			   
		                    r.text(160, 10, "Progress Bar").attr(txtattr);
		    			  var chart = r.hbarchart(20, 10, 280, 33, [[40], [100]], {stacked: true, type: "round"}).hover(fin, fout);   

                    }
                }

            },
            {
                xtype: 'panel',
                items:[
                    {
                        xtype:'searchListView',
                        border:10,
                        margin:'0 0 20 0'

                    }
                ]
            },

            {
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