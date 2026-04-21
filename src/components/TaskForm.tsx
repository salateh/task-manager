import React, { useState } from "react";
import { Task } from "../types/Task";

interface TaskFormProps {
  onAdd: (title: string) => void;
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length <= 1) {
      setError("Please enter valid title");
      return;
    }
    setValue("");

    onAdd(value);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 bm-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      <button
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
        type="submit"
      >
        Create
      </button>
      {error && error}
    </form>
  );
}
