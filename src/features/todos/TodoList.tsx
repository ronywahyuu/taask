import React, { useRef, useState } from "react";
import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  completedTodos: () => Todo[];
  // activeTodos: () => Todo[];
  activeTodos: () => void;
  handleToggle: (id: any) => void;
}
const TodoList = ({
  todos,
  completedTodos,
  activeTodos,
  handleToggle,
}: TodoListProps) => {
  //   console.log(todos.length);
  // const [checkbox, setCheckbox] = useState<boolean | any>(null);
  //   const []

  const renderItems = todos.map((todo) => {
    return (
      <li className="" key={todo.id}>
        <TodoItem todo={todo} handleToggle={handleToggle} />
      </li>
    );
  });

  return (
    <div className="px-5 pb-10 -mt-7 md:w-1/2 w-full mx-auto">
      <div className="flex items-center justify-center gap-5 rounded-md py-3 bg-white mb-5  border ">
        <span className="cursor-pointer font-bold text-primary">All</span>
        <span className="cursor-pointer font-medium" onClick={activeTodos}>
          Active
        </span>
        <span className="cursor-pointer font-medium" onClick={completedTodos}>
          Completed
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-500">{todos.length} Items Left</span>
        <span className="cursor-pointer ">Clear completed</span>
      </div>
      <ul className="rounded-lg bg-white">{renderItems}</ul>
    </div>
  );
};

export default TodoList;
