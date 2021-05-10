module.exports=(url,data,methods)=>{
    var p=new Promise((reslove,reject)=>{
   wx.request({
     url: url,
     data:data,
     method:methods,
     success(res){
       reslove (res)
     },
     fail(ees){
       reject (ees)
     }

   })
    })
    return p
}