import React, { useState } from "react";
import { Todo } from "./Todo";

interface TodoFormProps {
  addForm: (payload: Todo) => void;
}

function TodoForm({ addForm }: TodoFormProps) {
  // const [todo, setTodo] = useState<Todo[] | []>([]);
  const [title, setTitle] = useState<string>("");
  // const [payload, setPayload] = useState({
  //   id: +new Date(),
  //   title: "",
  //   completed: false,
  // });
  const handleSubmit = (event: any) => {
    event.preventDefault();
    addForm({
      id: +new Date(),
      title: title,
      completed: false,
    });
    // console.log(payload);
    // console.log("s");
  };
  return (
    <div className="mt-7 px-5 md:w-1/2 w-full">
      <form action="" className="relative" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* <input type="checkbox" name="" id="" /> */}
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            // type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray- border border-gray-300 rounded-lg"
            placeholder="Create a new todo..."
            value={title}
            // onChange={(e) => setTitle((e) => e.target.value)}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
