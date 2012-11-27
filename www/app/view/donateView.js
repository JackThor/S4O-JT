Ext.define('GS.view.donateView',{
    extend: 'Ext.Container',
    xtype: 'donateView',

    config: {
        xtype: 'formpanel',
        fullscreen : true,

        layout: 'vbox',

        items: [
            {
                xtype: 'toolbar',
                title: 'Donate',
                //  html: '<img src ="resources/images/image001.jpg">',

                items:[
                    {
                        xtype: 'button',
                        iconCls:'home',
                        zIndex:1,
                        iconMask:true,
                        text : 'Back',
                        id :'back'
                    }


                ]
            },{
                xtype: 'fieldset',
                //  xtype: 'formpanel',
                title: 'Donar form',
                defaults :
                {   required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                scrollable: true,
                xtype: 'panel',
                //layout: 'hbox',
                height: 375,
                margin: 5,
                width: 350,
                items: [
                    {
                        xtype: 'textfield',
                        name:'donation amount',
                        label:'Donation Amount:',
                        placeHolder:'Enter yor donation',
                        id :'donationAmount'
                    },{
                        xtype: 'textfield',
                        name: 'Memo',
                        label: 'Memo',
                        id: 'memo'
                    },{
                        xtype: 'textfield',
                        name: 'Name',
                        label: 'Name:',
                        autoCapitalize: false,
                        id: 'name'
                    },{
                        xtype: 'textareafield',
                        name: 'Address',
                        label: 'Street Address:',
                        maxRows: 7,
                        id: 'address'
                    },{
                        xtype: 'textfield',
                        name: 'City',
                        label: 'City:',
                        id:'city'
                    },{
                        xtype: 'textfield',
                        name: 'State',
                        label: 'State:',
                        id: 'state'
                    },{
                        xtype:'textfield',
                        name: 'Zip',
                        label: 'Zip:',
                        id: 'zip'
                    },{
                        xtype: 'numberfield',
                        name: 'Phone',
                        label: 'Phone:',
                        id:'phone'

                    },{
                        xtype: 'emailfield',
                        name: 'E-Mail',
                        label: 'E-mail:',
                        placeHolder: 'hello@nprofit.com',
                        id: 'email'
                    },{
                        xtype: 'textfield',
                        name: 'card#',
                        label: 'Credit Card#:',
                        id: 'card'
                    },{
                        xtype: 'datepickerfield',
                        name: 'exp Date',
                        label: 'Expiration Date:',
                        id: 'expDate'
                    },


                    {
                        xtype: 'checkboxfield',
                        name: 'Reoccuring',
                        label: 'Reoccuring:',
                        id: 'rec'
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'Remmember Information',
                        label: 'Remmember Information:',
                        id: 'rem'
                    },{
                    	xtype:'button',
                        margin:'10 10 10 10',
                        text:'Donate Now',
                        ui:'lightBlue',
                        scrollable: true,
                        id:'Donate'
                    }
            


                ]
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