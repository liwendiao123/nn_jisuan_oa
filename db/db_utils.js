
class db_utils{
	constructor(){}
	
	getName(){
		return "utils getName" 
	}
}

function db(){
	return "utils is db"
}

var d = new db_utils()
module.exports = {
	utils:d,
	db:db,
}