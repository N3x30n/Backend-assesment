let todoList = [
    {
        name: "Test",
        body: "Test Body",
        id: 1
    }
]
let globalID = 2

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {
        const fortunes = ["All your hard work will soon pay off.", "A pleasant surprise is waiting for you."]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    createTodo: (req,res) => {
        const {name, body} = req.body
        let newTodo = {
            name,
            body,
            id: globalID
        }
        todoList.push(newTodo)
        globalID++
        res.status(200).send(todoList)
        console.log(todoList)
    },
    getTodo: (req,res) => {
        res.status(200).send(todoList[req.params.id - 1])
    },
    deleteTodo: (req,res) => {
        res.status(200).send(todoList[req.params.id - 1])
    }
    
}
// console.log(todoList)