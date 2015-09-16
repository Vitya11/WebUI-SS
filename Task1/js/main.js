var Person = Backbone.Model.extend ({
	defaults : {
		name :"viktor",
		age : 26,
		job : "developer"
	},
	
	walk : function(){
		return this.get("name") + " is walkimg";
	}
 });
 
