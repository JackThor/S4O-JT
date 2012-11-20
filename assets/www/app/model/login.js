/**
*@class GS model.login
*@extends Ext.data.Model
*
*
*
*/

Ext.define('GS.model.login',{
	extend: 'Ext.data.Model',
	config:{
		fields:[ 'id','issued_at','instance_url','signature','access_token','myBaseUri', 'instance' ]
	}
	
		        
		       	
});