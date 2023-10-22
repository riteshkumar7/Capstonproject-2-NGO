const express=require('express');
const app=express();
const cors=require('cors');
const router=require('./Router/router');




const dontenv=require('dotenv');
dontenv.config({path:'./config.env'});
const port=process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  