const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.listen(port, ()=>{
    console.log("Backend is running on:" , port);
    
}
)
