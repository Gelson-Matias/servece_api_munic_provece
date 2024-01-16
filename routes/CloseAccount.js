const express =require('express');
const Route=express.Router;
 Route.get('/',(req, res)=>{
    res.json({msg: 'went serve'});
    console.log("rota get")
})

module.exports=Route;