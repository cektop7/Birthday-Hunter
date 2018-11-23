module.exports = class BirthdayHunterClass {
	constructor() {
		this.URL = 'http://birthday.rsc.energia.ru/rsce/'
	}

	getBirthdayPage(callback) {
		const req = require('request')
		req(this.URL, (err, res, body) => callback(err || body))


	}

	getDaysFromPage(page) {
		page = page.replace(/\n/gm, '')
		let pattern = /<td class='date center'>(.+?)<\/td>/g
		let matches = []
		let result = null
		while (result = pattern.exec(page)) {
			matches.push(result[0]);
		}
		return matches
	}

	getDateFromDay(dayHtml) {
		let day = /<p>(\d+?)<br>/.exec(dayHtml)[1]
		let month = /<span class='date-month'>(.+?)<\/span>/.exec(dayHtml)[1]
		return month + '_' + day
	}

	getPersonsFromDay(dayHtml) {
		let pattern = /arrow'><b>(.+?)<\/b><br>(.+?)</g
		let matches = []
		let result = null
		while (result = pattern.exec(dayHtml)) {
			matches.push(result[1] + ' ' + result[2]);
		}
		return matches
	}
}
