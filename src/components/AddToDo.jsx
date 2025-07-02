import { useState } from 'react';

function AddToDo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd(text.trim());
    setText('');
  };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input
                type="text"
                className="flex-1 px-4 py-2 rounded-xl border border-purple-300 shadow focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                placeholder="What do you want to accomplish?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
            >
                ➕ Add
            </button>
        </form>

    );
}

export default AddToDo;
