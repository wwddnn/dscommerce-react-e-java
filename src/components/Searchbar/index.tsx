import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function;
}

export default function Searchbar({ onSearch } : Props) {

  const [text, setText] = useState("");

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }
    
  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit" className="btn-search">🔎︎</button>
      <input 
        value={text}
        type="text"
        placeholder="Nome do produto"
        onChange={handleChange} 
      />
      <button onClick={handleResetClick} className="btn-x">🗙</button>
    </form>
  );
}
