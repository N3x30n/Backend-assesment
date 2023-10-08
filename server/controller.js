let todoList = [
    {
        name: "Test",
        Body: "Test Body",
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
        let newTodo = {...req.body, globalID}
        todoList.unshift(newTodo)
        res.status(200).send(todoList)
        console.log(todoList)
    },
    updateTodo: (req,res) => {
        
    },
    deleteTodo: (req,res) => {

    }
    
}
console.log(todoList)