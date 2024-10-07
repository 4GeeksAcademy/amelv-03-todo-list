import React, {useState} from "react";


//create your first component
const Home = () => {
    const [todoList, setTodoList] = useState([])
    const [userInput, setUserInput] = useState("")

    const addTodo = () => {
        let task = {label: userInput, is_done: false};
        setTodoList([...todoList, task])
    }
    const deleteTodo = (todo) => {
        let updatedTodoList = todoList.filter((task, index) => {
            return task.label !== todo
        })
        setTodoList(updatedTodoList)
    }
    return (
        <div className="text-center">
            <input onChange={(ev) => setUserInput(ev.target.value)}/>
            <button className="btn btn-info" onClick={() => addTodo()}>Add Todo</button>

            {todoList?.map((task, index) => (
                <div>{task.label}<span onClick={() => deleteTodo(task.label)}>DELETE</span></div>
            ))}
        </div>
    );
};

export default Home;