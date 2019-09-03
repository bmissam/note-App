console.log('starting app')
//const fs =require('fs')


const yargs=require('yargs')
const notes=require('./notes')
const argv=yargs.argv ; 

var title =yargs.argv.title ;  
var body =yargs.argv.body
var  command =yargs.argv._[0]

if (command==='ADD') {
console.log('adding')
    notes.ADD(title,body)
}else if( command==='remove') {
    console.log('remove')
    notes.Remove (title)
}else if (command==='Read') {
    console.log('reading')
    notes.Read(title)
}else if (command ==='List') {
    console.log('listing')
    notes.List()

}


// fs.appendFileSync(app.txt,'HELLO')
