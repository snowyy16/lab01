import { useState } from 'react'
import './bt4.css'
function App() {
    // State cho danh sách công việc
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Game", "Repeat"]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");
  
    // Thêm công việc mới
    const handleAddTask = () => {
      if (newTask.trim() === "") return;
      setTasks([...tasks, newTask]);
      setNewTask("");
    };
  
    // Xóa công việc
    const handleDeleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    // Chỉnh sửa công việc
    const handleEditTask = (index) => {
      setEditIndex(index);
      setEditValue(tasks[index]);
    };
  
    // Lưu công việc đã chỉnh sửa
    const handleSaveEdit = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editValue;
      setTasks(updatedTasks);
      setEditIndex(null);
    };
  
    return (
      <div className="container">
        {/* Danh sách công việc */}
        <h2>To-Do List</h2>
        <div className="todo-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new item"
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
  
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                </>
              ) : (
                <>
                  {task}
                  <button onClick={() => handleEditTask(index)}>Edit</button>
                  <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;