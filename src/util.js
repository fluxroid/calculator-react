import {operations} from './constants.js';

const pairOpRe = new RegExp(`[${'+-/*'}][${'+-/*'}]+`);

function calculate(line) {
	if (operations.some((op) => line.endsWith(op))) {
		return 'Error: line ended with operation';
	}
	else if (line.includes('/0')) {
		return 'Error: divided by zero';
	}
	else if (line.search(pairOpRe) !== -1) {
		return 'Error: adjacent operations';
	}
	else {
		return eval(line);
	}
}


export default calculate;