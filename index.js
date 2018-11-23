const fs = require('fs')
const birthday = require('./birthday_hunter')

app = new birthday()

app.getBirthdayPage(page => {
	let days = app.getDaysFromPage(page)
	days.forEach(day => {
		let date = app.getDateFromDay(day)
		let persons = app.getPersonsFromDay(day).toString().replace(/,/g, "\r\n")
		fs.writeFile('D:\\Birthdays\\' + date + '.txt', persons, (err) => err)
	})
	return 0
})
