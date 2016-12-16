var processDataChannel = {};

/**
 * [groupByDimension description]
 * @param  {[type]} sets 
 * [{"measure": "name", "dimension": "year", "chartType": "Q_Q_POINT", "aggregateType": "SUM", "statisticalMethod": "variance"}
 * ,{"measure": "name", "dimension": "cylinder", "chartType": "Q_T_BAR", "aggregateType": "COUNT", "statisticalMethod": "variance"}] 
 * 
 * @param  {[type]} data      [{},{}]
 * @return {[type]}           {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]}
 *
 * [{"measure": "name",
 *   "dimension": "year",
 *   "chartType": "Q_Q_POINT",
 *   "aggregateType": "SUM",
 *   "statisticalMethod": "variance",
 *   "groupByRawData": {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]}
 *   }
 * ,{"measure": "name",
 *   "dimension": "cylinder",
 *   "chartType": "Q_T_BAR",
 *   "aggregateType": "COUNT",
 *   "statisticalMethod": "variance",
 *   "groupByRawData": {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]}
 *   }] 
 */
processDataChannel.processRawDataChannel = function (sets, data) {
	var result = [];
	var groupByRawData = {};

	for (var i = 0; i < set.length(); i++) {
		var set = sets[i];
		var dimension = set['dimension'];
		var measure = set['measure'];

		for (var j = 0; j < data.length(); j++) {
			var elem = data[j];

			var dimensionValue = data[dimension];
			var measureValue = data[measure];

			if (groupByRawData.hasOwnProperty(dimensionValue)) {
				groupByRawData[dimensionValue].push(measureValue);
			} else {
				groupByRawData[dimensionValue] = [measureValue];
			}
		}
		set['groupByRawData'] = groupByRawData;
		result.push(set);
	}

	return result;
}

/**
 * [groupByDimension description]
 * @param  {[type]} sets 
 * [{"measure": "name",
 *   "dimension": "year",
 *   "chartType": "Q_Q_POINT",
 *   "aggregateType": "SUM",
 *   "statisticalMethod": "variance",
 *   "groupByRawData": {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]}
 *   }
 * ,{"measure": "name",
 *   "dimension": "cylinder",
 *   "chartType": "Q_T_BAR",
 *   "aggregateType": "COUNT",
 *   "statisticalMethod": "variance",
 *   "groupByRawData": {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]}
 *   }] 
 * 
 * @param  {[type]} data      [{},{}]
 * @return {[type]}           {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]}
 *
 * [{"measure": "name",
 *   "dimension": "year",
 *   "chartType": "Q_Q_POINT",
 *   "aggregateType": "SUM",
 *   "statisticalMethod": "variance",
 *   "groupByRawData": {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]},
 *   "aggregateData": {"1992": 6, "1993": 6, "1994": 6}
 *   }
 * ,{"measure": "name",
 *   "dimension": "cylinder",
 *   "chartType": "Q_T_BAR",
 *   "aggregateType": "COUNT",
 *   "statisticalMethod": "variance",
 *   "groupByRawData": {"1992": [1, 2, 3], "1993": [1, 2, 3], "1994": [1, 2, 3]}
 *   "aggregateData": {"1992": 3, "1993": 3, "1994": 3}
 *   }] 
 */
processDataChannel.processAggregateDataChannel = function (sets) {
	var result = [];
	var aggregateData = {};

	for (var i = 0; i < sets.length(); i++) {
		var set = sets[i];

		var groupByRawData = set['groupByRawData'];
		var aggregateType = set['aggregateType'];
		
		for (key in groupByRawData) {
		}
	}
}

module.exports = processDataChannel;