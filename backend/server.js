const express = require('express')
const app =express()
const port=3000;
app.get('/',(req,res)=>
{
    res.send('test');
})

app.listen(port,()=>
{
    console.log(`server run works on port ${port}`);    
})