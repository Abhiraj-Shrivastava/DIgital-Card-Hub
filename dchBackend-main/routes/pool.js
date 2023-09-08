const mongoose=require('mongoose')
const DB='mongodb+srv://Akshat12345:Akshat@cluster0.ouiqyg9.mongodb.net/digitalcardhub?retryWrites=true&w=majority'

mongoose.connect(DB,{
   
}).then(()=>{
    console.log('success all good')
}).catch((err)=>console.log('no connection',err))

module.exports=DB