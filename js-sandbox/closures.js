'use strict'

function buildTicket(transport) {
	return function (name) {
		console.log('Transport: ' + transport + ', name: ' + name);
	} 
}

var getSubmarine = buildTicket('Submarine');
var getCar = buildTicket('Car');
var getPlane = buildTicket('Plane');

getSubmarine('Torpedo');
getCar('Nissan GTR');
getPlane('Boeing');