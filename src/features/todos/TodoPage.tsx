import React, { useCallback, useContext, useEffect, useState } from "react";
import DarkModeIcon from "../../assets/images/icon-moon.svg";
import TodoList from "./TodoList";
import { Todo } from "./Todo";
// import { MOCK_TODO } from "./MockTodo";
import { todoAPI } from "./todoAPI";
import TodoForm from "./TodoForm";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeContextType } from "../../@types/theme";
// import { get } from "./todoAPI";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  // const [singleTodo, setSingleTodo] = useState<Todo | null>(null);
  // const [newTodos, setNewTodos] = useState();

  const fetchData = useCallback(async () => {
    todoAPI.get().then((res) => {
      setTodos(res.data);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetching]);

  console.log(theme);

  const handleCompleteToggle = async (id: any) => {
    let payload: any = todos.find((todo) => todo.id === id);
    setFetching(true);
    await todoAPI.put(id, {
      ...payload,
      completed: !payload.completed,
    });
    setFetching(false);
  };

  const handleAddForm = async (payload: Todo) => {
    await todoAPI.add(payload).then((res) => {
      console.log(res);
      setTodos((prev) => [...prev, res.data]);
    });
  };

  // render active todos
  const activeTodos = () => {
    const res = todos.filter((todo) => todo.completed === false);
    console.log(res);
  };

  // render completed todos
  const completedTodos = () => todos.filter((todo) => todo.completed === true);
  // delete completed todos / mass delete
  const filteredTodos = todos.filter((todo) => todo.completed === true);

  console.log(filteredTodos);
  return (
    <div className="relative min-h-screen bg-very-light-grayish-blue ">
      {/* heading */}
      <div className="heading bg-mobile-light md:bg-desktop-light bg-cover flex flex-col justify-center items-center h-[32vh]">
        <div className="text flex justify-between px-5 md:w-1/2 w-full">
          <h1 className="text-white text-4xl font-bold uppercase">Taask</h1>
          <button>
            <img src={DarkModeIcon} alt="" />
          </button>
        </div>

        {/* form */}
        <TodoForm addForm={handleAddForm} />
      </div>

      {/* list   */}
      <TodoList
        todos={todos}
        handleToggle={handleCompleteToggle}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
      />
    </div>
  );
};

export default TodoPage;
