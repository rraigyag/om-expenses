const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://home-expenses:home expenses@cluster0.gcvj3ut.mongodb.net/domestic-expenditure-auditing',
{useNewUrlParser:true,useUnifiedTopology:true}
);
const connection=mongoose.connection
connection.on('error',err=>console.log(err))
connection.on('connected',()=>console.log('Mongodb connected successfully'))