console.log('Starting notes')
const fs = require('fs')

var fetch = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt')) // JSON.parse (buffering)
    } catch (err) {
        return []
    }
}


var ADD = (title, body) => {
    var note = {
        title: title,
        body: body
    }
    var notes = fetch()

    notes.push(note)

    fs.writeFileSync("notes.txt", JSON.stringify(notes))

    Display(note)

}

var Remove = (title) => {
    var notes = fetch()
    var filtrednotes = notes.filter(el => el.title !== title)
    fs.writeFileSync("notes.txt", JSON.stringify(filtrednotes))

}

var Read = (title) => {
    var notes = fetch()
    var filtrednotes = notes.filter(el => el.title == title)
    Display(filtrednotes)

}
var List = () => {
    var notes = fetch();
    notes.forEach((note) => Display(note))

}

var Display = (note) => {
    console.log("*************")
    console.log(`Title:${note.title}`)
    console.log(`Body:${note.body}`)
}
module.exports = {
    ADD, Remove, Read, List
}