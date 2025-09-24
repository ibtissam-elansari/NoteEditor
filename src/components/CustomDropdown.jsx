import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react"; 
import { useSelector } from "react-redux";


export default function CustomDropdown({selectedTags}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedTags && [...selectedTags]);

  const Notes = useSelector(state => state.notes.notes);

  const Tags = [...new Set(Notes.flatMap(note => note.tags))];

  const handleSelect = (tag) => {
    setSelected(prev => [...new Set([...prev, tag])]);
    setIsOpen(false);
  };

  const dropdownRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex w-full my-1 border-1 border-gray-300 rounded-xs text-gray-700 h-10">
      <button
        type="button"
        className="w-full flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected && selected.map((s, i) => (
            <span key={i} className="bg-gray-200 m-1 p-1 px-3 text-sm">{s}<span className="text-black ml-2 cursor-pointer" onClick={() => setSelected(selected.filter(item => item !== s))}>x</span></span>
          ))}
        </button>
        <ChevronDown className="mt-2 mr-1" size={18} />
      {isOpen && (
        <ul className="absolute left-0 mt-12 w-full bg-white border-0 rounded-lg shadow-lg z-10">
          {Tags.filter(tag => !selected.includes(tag)).map((tag, i) => (
            <li
              key={i}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100`}
              onClick={() => handleSelect(tag)}
            >
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
}
