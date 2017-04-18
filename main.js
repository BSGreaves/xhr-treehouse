function execute () {
	var data = JSON.parse(this.responseText);
	console.log(data);
}

function error () {
	alert("JSON Error");
}

var treeHousePull = new XMLHttpRequest;
treeHousePull.addEventListener("load", execute);
treeHousePull.addEventListener("error", error);
treeHousePull.open("GET", "https://teamtreehouse.com/benjamingreaves.json")
treeHousePull.send();