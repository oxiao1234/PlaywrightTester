'use client';

import { useEffect, useState } from "react";

interface Name {
  id: number;
  value: string;
}

export default function Home() {
  const [names, setNames] = useState<Name[]>([]);
  const [nameId, setNameId] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log("New Name!")
  }, [names])
  
  function addName(){
    setNames([{value: input, id: nameId}, ...names]);
    setInput('');
    setNameId(nameId + 1);
  }

  function deleteName(){
    console.log("name deleted!");
  }

  return (
  <div className = "flex flex-col text-center space-y-8 m-8">
    <h1 className = "text-3xl">Tester Application</h1>
    <div className = "flex flex-row space-x-4">
        <input type="text" id="name" value = {input} onInput = {e => setInput(e.currentTarget.value)} className="flex-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John Doe" required />
        <button className = "flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addName}>Increase</button>
    </div>
    <div className = "grid grid-cols-3 grid-rows-3 gap-4">
        {names.map(name => (
          <div className = "flex flex-row rounded border">
            <span className = "p-8 content-center flex-2 text-3xl" key = {name.id}>{name.value}</span>
            <svg onClick = {deleteName} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="content-center size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>
        ))}
    </div>
  </div>
  );
}



// MVP will have the following features:
// A input field for names
// A space for list of names to populate with delete features for each name
// Persistent DB storage