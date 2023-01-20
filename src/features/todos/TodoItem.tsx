import React, { useRef } from "react";
import { Todo } from "./Todo";

interface TodoItemProps {
  todo: Todo;
  handleToggle: (id: any) => void;
}
function TodoItem({ todo, handleToggle }: TodoItemProps) {
  const listRef = useRef<HTMLLabelElement>(null);
  const completed = todo.completed;

  const handleClick = (e: Event | any) => {
    // let lineThrough = listRef.current;
    // console.log(todo.id);
    // console.log(todo);
    handleToggle(todo.id);
  };

  return (
    <div className="flex items-center  pl-4 " onClick={handleClick}>
      <input
        id={`bordered-checkbox-${todo.id}`}
        type="checkbox"
        value=""
        name="bordered-checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 cursor-pointer rounded-lg "
        // checked={completed ? true : false}
        checked={completed}
        onChange={() => {}}
      />
      <label
        ref={listRef}
        htmlFor={`bordered-checkbox-${todo.id}`}
        className={`w-full py-4 ml-2 text-sm font-medium cursor-pointer  text-very-dark-grayish-blue rounded-lg ${
          completed ? "line-through" : ""
        }`}
      >
        {todo.title}
      </label>
    </div>
  );
}

export default TodoItem;
