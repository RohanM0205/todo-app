import { useState } from 'react';

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSave = () => {
    if (editText.trim() === '') return;
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  const handleDelete = () => {
    setShowConfirm(false);
    onDelete(todo.id);
  };

  return (
    <>
      {/* ToDo Item */}
      <div className="flex items-center justify-between bg-white border rounded-xl shadow p-3 hover:shadow-lg transition-all duration-300 relative">
        <div className="flex items-center gap-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="accent-purple-600 w-5 h-5"
          />

          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              className="flex-1 border-b border-purple-400 bg-transparent focus:outline-none text-lg"
              autoFocus
            />
          ) : (
            <span
              className={`text-lg font-medium transition-all flex-1 ${
                todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                className="text-green-500 hover:text-green-700 text-xl"
                onClick={handleSave}
                title="Save"
              >
                ✅
              </button>
              <button
                className="text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => {
                  setEditText(todo.text);
                  setIsEditing(false);
                }}
                title="Cancel"
              >
                ❌
              </button>
            </>
          ) : (
            <>
              <button
                className="text-blue-500 hover:text-blue-700 text-xl"
                onClick={() => setIsEditing(true)}
                title="Edit"
              >
                ✏️
              </button>
              <button
                className="text-red-500 hover:text-red-700 text-xl"
                onClick={() => {
                  if (todo.completed) {
                    onDelete(todo.id);
                  } else {
                    setShowConfirm(true);
                  }
                }}
                title="Delete"
              >
                🗑️
              </button>
            </>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Task not completed!
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this task before completing it?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDoItem;
