const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Got it')
})
const user = [
    {id:0,name: 'Imros',class: 'Eleven',number: '01782432507'},
    {id:1,name: 'Soahn',class: 'Twilave',number: '01782445507'},
    {id:2,name: 'Jamal',class: 'Teacher',number: '017824672507'},
];
app.get('/user',(req,res)=>{
    const search=req.query.search;
    if(search){
        const result = user.filter(item=>item.name.toLocaleLowerCase().includes(search.toLowerCase()));
        res.send(result)
    }else{
        res.send(user)
    }
});
app.get('/user/:id',(req,res)=>{
    const value = req.params.id;
    const getV = user[value];
    res.send(getV)
})
app.post('/user',(req,res)=>{
    const parseUser = req.body;
    parseUser.id=user.length;
    user.push(parseUser);
    res.json(parseUser);

})
app.listen(port,()=>{
    console.log('start working')
})