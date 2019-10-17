const Recipie = require('./models/Recipie');
const data = require("./data.js");
const mongoose = require('mongoose');


let promiseCreate=Recipie.create({title: 'Pa amb tomàquet', level: 'Easy Peasy', ingredients: ['pa', 'tomaquet'], cuisine: 'cat', dishType: 'Other', image:'', duration:3, creator:'Noemi', created:''})
.then(recipie => {console.log(`The recipie is saved and its value is:` , recipie.title)})
.catch(err=> { console.log(`An Error ocurred:`,err)})

let promiseInsert = Recipie.insertMany(data)
  .then(recipie => {console.log(`The recipes were created and saved` )})
  .catch(err=> { console.log(`An Error ocurred:`,err)})

let promiseUpdate= Recipie.updateOne({title:'Rigatoni alla Genovese'}, {duration:'100'})
 .then(recipie => {console.log(`The recipes was updated` )})
.catch(err=> { console.log(`An Error ocurred:`,err) })

let promiseDelete=Recipie.deleteOne({title:'Carrot Cake'})
.then(recipie => {console.log(`The recipe was deleted` )})
.catch(err=> { console.log(`An Error ocurred:`,err) })

Promise.all([promiseCreate, promiseInsert, promiseUpdate, promiseDelete])
.then(values=>{
  console.log('Recipes were created, inserted, updated and deleted');
  mongoose.connection.close()
})
.catch(err=> console.log(err))