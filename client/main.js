const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const nameTodo = document.getElementById('name')
const bodyTodo = document.getElementById('body')
const createTodo = document.getElementById('form')
const get = document.getElementById('get')
const getId = document.getElementById('getId')
const list = document.getElementById('list')
const listBody = document.getElementById('listBody')
const deleteId = document.getElementById('deleteTodo')
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
            console.log(res.data)
            
    })
})
// updateTodo.addEventListener('submit', (event) => {
//     event.preventDefault()
    
// })

function getTodo () {
    axios.get(`${baseURL}/todo/${getId.value}`)
        .then( (res) => {
            console.log(res.data)
            const listedTodo = document.createElement('li')
            listedTodo.innerHTML = `
            Title: ${res.data[0].nameTodo},
            What Needs to be Done: ${res.data[0].bodyTodo}`
            listBody.appendChild(listedTodo)
        })

}

const deleteFunc = id => axios.delete(`${baseURL}/${id}`)
    .then(res => {
        const data = res.data
        console.log(data)
    })

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

deleteTodo.addEventListener('submit', (e) => {
    e.preventDefault()
    axios.delete(`${baseURL}/api/todo/:${deleteId.value}`)
    .then(res => {
        const data = res.data
        console.log(data)
    })
})

get.addEventListener('submit', (event) => {
    event.preventDefault()

    axios.get(`${baseURL}/api/todo/${getId.value}`)
        .then( (res) => {
            console.log(res.data.body)
            const listedTodo = document.createElement('li')
            listedTodo.innerHTML = `
            Title: ${res.data.name},
            What Needs to be Done: ${res.data.body}`
            listBody.appendChild(listedTodo)
        })
        getId.innerHTML = ''
})
