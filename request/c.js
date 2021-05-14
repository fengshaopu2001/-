var g=require('./a')
const b = require('./b')
var k=require('./b')
var baseUrl='https://api-hmugo-web.itheima.net/api/public/v1'

  function gg() {
      return g(baseUrl+k.home,{},'get')
      
  }
  function ggg(){
    return g(baseUrl+k.home1,{},'get')

  }

  function h(){
    return g(baseUrl+k.home3,{},'get')
  }
  function fl(){
    return g(baseUrl+k.fl,{},"get")
  }

  function p(id,pagenum,pagesize){
    console.log(id,pagenum,pagesize);
    return g(baseUrl+k.f2+"?cid="+id+"&pagenum="+pagenum+"&pagesize="+pagesize,{},"get")

  }

  function f3(id){
    return g(baseUrl+k.f3+"?goods_id="+id,{},"get")

  }


  function gwc(){
    return g(baseUrl+k.gwc,{},"get")

  }
function log(code,encryptedData,iv,rawData,signature){
   return g(baseUrl+k.log,{code,encryptedData,iv,rawData,signature},'post')
}
function dd(){
  return g(baseUrl+k.dd,{},"get")

}
function fg(value){
  return g(baseUrl+k.ss+`?query=${value}`,{value},"get")

}

function user(){
  return g(baseUrl+k.user,{},"get")

}
  module.exports={
    gg,ggg,h,fl,p,f3,gwc,log,dd,fg,user
  }