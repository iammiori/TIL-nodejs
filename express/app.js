const express = require('express');
//const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get("/", function(req,res){
	return res.send("hello world")
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});