var exec=require('./exec').exec;

setTimeout(async function(){
  var data=await exec('java -version');
  console.log('data',data)
})