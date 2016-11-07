var exec = require('child_process').exec;

exports.exec=function(name){
    return new Promise(function (resolve, reject) {
      exec(name,function(error, stdout, stderr){
         resolve({error,stdout, stderr});
      })
    });
}
