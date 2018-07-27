var express= require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

var campgrounds = [
	{name : "Rahul Kumar" , image : "https://images.pexels.com/photos/1048024/pexels-photo-1048024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
	{name : "Rahul", image : "https://images.pexels.com/photos/714051/pexels-photo-714051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
	{name : "Kumar", image : "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
	];

app.get('/', function(req, res) {
	// body...
	res.render('index');
});

app.get('/campgrounds', function(req, res){
	// res.send("This page is coming soon");


	res.render("campgrounds", {campgrounds:campgrounds});
});

app.get('/campgrounds/new', function(res, res){
	res.render('new.ejs');

})

app.post('/campgrounds', function(req, res){
	// res.send("You hit the POST request");
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name : name , image : image};
	campgrounds.push(newCampground);
	res.redirect('/campgrounds');
});

app.listen(3000,function(){
	console.log("Server running");
});

/*
Compound route(GET)

[
{name : "Rahul Kumar", image : "http://www.imgur.com/1"},
{name : "Rahul", image : "http://www.imgur.com/2"},
{name : "Kumar", image : "http://www.imgur.com/3"}
]

compund route

*/