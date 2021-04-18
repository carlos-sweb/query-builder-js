

var queryBuilder = function(){

	this.table = null;

	this.string_query = "";

}

queryBuilder.prototype.Table = function(table) {

	 this.table = table;

}

queryBuilder.prototype.select = function() {

	let fields = '';

	for (var i = 0; i < arguments.length; i++) {
    	//console.log(arguments[i]);
    	fields += '`'+arguments[i]+'`'
    	if( !(i == (arguments.length-1)) ){
    		fields+=','
    	}
    }

	 this.string_query = "select "+fields+" from  `"+this.table+"`";

}


queryBuilder.prototype.render = function() {

	 return this.string_query;

}