var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { forEach } = require('underscore');


var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false }); // parse the posted data

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// app.get('/', function(req, res){
//     res.render('partials/nav', {person: req.query});
// });


//-------------------------------------------------------------- Math ---------------------------------------------------------

var csvWriter_math = createCsvWriter({
    path: 'data/math.csv',
    header: [
        {id: 'G1', title: 'G1'},
        {id: 'G2', title: 'G2'},
        {id: 'failures', title: 'failures'},
        {id: 'studytime', title: 'studytime'},
        {id: 'likesubject', title: 'likesubject'},
        {id: 'difficulty', title: 'difficulty'}
    ]
});


app.get('/getMathInputs', function(req, res){
    res.render('partials/getMathInputs', {person: req.query});
});

app.post('/getMathInputs', urlencodedParser, function(req, res){
    var new_records = {}
    
    for (var i in req.body)
        new_records[i] = parseInt(req.body[i]);
    
    var records = [new_records];

    csvWriter_math.writeRecords(records).then(() => {
        console.log('Math');
    });

    res.render('partials/success', {person: req.body});
});


//-------------------------------------------------------------- Science ---------------------------------------------------------

var csvWriter_science = createCsvWriter({
    path: 'data/science.csv',
    header: [
        {id: 'G1', title: 'G1'},
        {id: 'G2', title: 'G2'},
        {id: 'failures', title: 'failures'},
        {id: 'studytime', title: 'studytime'},
        {id: 'likesubject', title: 'likesubject'},
        {id: 'difficulty', title: 'difficulty'}
    ]
});

app.get('/getScienceInputs', function(req, res){
    res.render('partials/getScienceInputs', {person: req.query});
});

app.post('/getScienceInputs', urlencodedParser, function(req, res){
    var new_records = {}
    
    for (var i in req.body){
        new_records[i] = parseInt(req.body[i]);
    }

    var records = [new_records];

    csvWriter_science.writeRecords(records).then(() => {
        console.log('Science');
    });

    res.render('partials/success', {person: req.body});
});


//-------------------------------------------------------------- Social Science ---------------------------------------------------------

var csvWriter_SocialStudies = createCsvWriter({
    path: 'data/socialstudies.csv',
    header: [
        {id: 'G1', title: 'G1'},
        {id: 'G2', title: 'G2'},
        {id: 'failures', title: 'failures'},
        {id: 'studytime', title: 'studytime'},
        {id: 'likesubject', title: 'likesubject'},
        {id: 'difficulty', title: 'difficulty'}
    ]
});

app.get('/getSocialStudiesInputs', function(req, res){
    res.render('partials/getSocialStudiesInputs', {person: req.query});
});

app.post('/getSocialStudiesInputs', urlencodedParser, function(req, res){
    var new_records = {}
    
    for (var i in req.body){
        new_records[i] = parseInt(req.body[i]);
    }

    var records = [new_records];

    csvWriter_SocialStudies.writeRecords(records).then(() => {
        console.log('Social Studies');
    });

    res.render('partials/success', {person: req.body});
});


//-------------------------------------------------------------- English ---------------------------------------------------------

var csvWriter_english = createCsvWriter({
    path: 'data/english.csv',
    header: [
        {id: 'G1', title: 'G1'},
        {id: 'G2', title: 'G2'},
        {id: 'failures', title: 'failures'},
        {id: 'studytime', title: 'studytime'},
        {id: 'likesubject', title: 'likesubject'},
        {id: 'difficulty', title: 'difficulty'}
    ]
});

app.get('/getEnglishInputs', function(req, res){
    res.render('partials/getEnglishInputs', {person: req.query});
});

app.post('/getEnglishInputs', urlencodedParser, function(req, res){
    var new_records = {}
    
    for (var i in req.body){
        new_records[i] = parseInt(req.body[i]);
    }

    var records = [new_records];

    csvWriter_english.writeRecords(records).then(() => {
        console.log('English');
    });

    res.render('partials/success', {person: req.body});
});


//-------------------------------------------------------------- Hindi ---------------------------------------------------------

var csvWriter_hindi = createCsvWriter({
    path: 'data/hindi.csv',
    header: [
        {id: 'G1', title: 'G1'},
        {id: 'G2', title: 'G2'},
        {id: 'failures', title: 'failures'},
        {id: 'studytime', title: 'studytime'},
        {id: 'likesubject', title: 'likesubject'},
        {id: 'difficulty', title: 'difficulty'}
    ]
});

app.get('/getHindiInputs', function(req, res){
    res.render('partials/getHindiInputs', {person: req.query});
});

app.post('/getHindiInputs', urlencodedParser, function(req, res){
    var new_records = {}
    
    for (var i in req.body){
        new_records[i] = parseInt(req.body[i]);
    }

    var records = [new_records];

    csvWriter_hindi.writeRecords(records).then(() => {
        console.log('Hindi');
    });

    res.render('partials/success', {person: req.body});
});

//--------------------------------------------------------------------------------------------------------------------------------------------

app.listen(8080); // setting a port

