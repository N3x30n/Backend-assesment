const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createTodo,updateTodo,deleteTodo} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);
app.post('/api/todo', createTodo)
app.put('/api/todo/:id', updateTodo)
app.delete('/api/todo/:id', deleteTodo)


app.listen(4000, () => console.log("Server running on 4000"));
