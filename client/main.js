const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const nameTodo = document.getElementById('name')
const bodyTodo = document.getElementById('body')
const createTodo = document.getElementById('form')
const updateTodo = document.getElementById('updateId')
const deleteTodo = document.getElementById('delete')

const baseURL = "http://localhost:4000"


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res =>{
            const data = res.data;
            alert(data)
        })
            
}

createTodo.addEventListener('submit', (event) => {
    event.preventDefault()

    let bodyObj = {
        name: nameTodo.value,
        body: bodyTodo.value
    }

    axios.post(`${baseURL}/api/todo`, bodyObj)
        .then((res) => {
            nameTodo.value=''
            bodyTodo.value=''
            
    })
})
updateTodo.addEventListener('submit', (event) => {
    event.preventDefault()
    
})

const deleteFunc = id => axios.delete(`${baseURL}/${id}`)
    .then(res => {
        const data = res.data
        res.status(200).send(data)
    })

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
deleteTodo.addEventListener('submit', (e,id) => {
    e.preventDefault()
    axios.delete(`${baseURL}/api/todo/:${id}`)
    .then(res => {
        const data = res.data
        res.status(200).send(data)
    })
})
