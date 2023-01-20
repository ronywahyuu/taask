// import logo from "./logo.svg";
import { useContext, useState } from "react";
import TodoPage from "./features/todos/TodoPage";
import ThemeProvider from "./context/ThemeContext";
// import TodoPage from "./todos/TodoPage";
// import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TodoPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
