import * as express from 'express';
import * as mongoose from "mongoose";
import User from './models/users';

const app = express();
app.listen(5000, () => {
    console.log('started my server');
});
let mongodbUrl:any = "";
mongoose.connect(mongodbUrl, {useNewUrlParser: true})
    .then((data) => {
        console.log('connected to database');
    });

app.get('/users',(req,res,next)=>{
    const searchedField = req.query.name;
    User.find({name:{$regex: searchedField,$options: '$i'}})
        .then(data=>{
            res.send(data);
        })
})
