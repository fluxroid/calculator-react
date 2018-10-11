import {operations} from './constants.js';

const pairOpRe = new RegExp(`[${'*/+-'}][${'*/+-'}]+`);
const decimalRules = new RegExp(`\.\. | \.[*/+-]`)
function calculate(line) {
	if (operations.some((op) => line.endsWith(op))) {
		return ['Error: line ended with operation', true];
	}
	else if (line.includes('/0')) {
		return ['Error: divided by zero', true];
	}
	else if (line.search(pairOpRe) !== -1) {
		return ['Error: adjacent operations', true];
	}
	else if (line.search(decimalRules) !== -1 || line.endsWith('.')) {
		return ['Error: improper use of decimal', true];
	}
	else {
		return [eval(line), false];
	}
}


export default calculate;