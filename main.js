var express=require('express')
var fs=require('fs')
var app=express();
app.use(express.json())
// var bodyParser=require('body-parser');
// app.use(bodyParser.urlencoded({urlencoded:false}));
app.use(express.urlencoded({extended:true}))
var port=5000;
app.use('/',express.static('./public'));
app.post('/postData',(req,res)=>
{
fs.readFile("./tasks.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log(req.body.data);
    temp = JSON.parse(jsonString); //now it an object
    temp.tasks.push(req.body.data);
    var newData = JSON.stringify(temp); //convert it back to json
    fs.writeFile("./tasks.json", newData, (err) => {
      // write it back
      // error checking
      if (err) throw err;
      console.log("New data added");
    });
  });
})
// app.post("/postdata",(req,res)=>
// {

//     fs.writeFile("foo.js",req.body.test,function(err){
//         if(err)
//         {
//             return console.log(err);
//         }
//     })
//     var beautify = require('js-beautify').js;
// fs.readFile('./foo.js', 'utf8', function(err, data) {
//     if (err) {
//         throw err;
//     }
//     fs.writeFile("result.js",beautify(data, { indent_size: 2, space_in_empty_paren: true }),function(err){
//         if(err)
//         {
//             return console.log(err);
//         }
//     })
// });

//     res.sendFile(__dirname+"/result.js")

// })

app.listen(port,(req,res)=>{
    
    console.log("server listening")
    
});