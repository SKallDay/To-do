import React, {useState} from 'react';

function Todo ({index, todo, completeTodo, remove}) {
  return(
    <div style={{textDecoration: todo.isComplete ? 'line-through': ''}} className="todo">
      {todo.text}

      <button onClick={() => completeTodo(index)}>
        Complete
      </button>

      <button onClick={() => remove(index)}>
        x
      </button>

    </div>
  )
}

function TodoFrom({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='input'
        value={value}
        placeholder='add todo here'
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App () {
  const [todos, setTodos] = useState([
    {
      text: 'React Hooks',
      isComplete: false,
    },
    {
      text: 'Drink Wine',
      isComplete: false,
    },
    {
      text: 'Pet Nala',
      isComplete: true,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }

  const remove = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            remove={remove}
            />
        ))}
        <TodoFrom
          addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App;