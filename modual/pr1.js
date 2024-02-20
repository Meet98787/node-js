var http = require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url == '/products'){
        fs.readFile('product.txt','utf-8' ,function(err,data){
            res.end(data)
        })

    }else if(req.url == '/user'){
        fs.readFile('user.txt', 'utf-8', function(err, data){
            res.end(data)
        })
    }else{
        res.end('File Not Found ...')
    }
}).listen(8000)