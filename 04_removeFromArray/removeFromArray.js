const removeFromArray = function(array, ...toBeRemoved) {
	return array.filter(val => !toBeRemoved.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
