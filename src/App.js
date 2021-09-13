import { useState } from "react";
import "./App.css";
import LayoutBase from "./layouts/layout";
import { TagsContext } from "./components/Contexts/TagsContext";
function App() {
  const [tags, setTags] = useState([]);
  const [urlTags, setUrlTags] = useState(new Map());
  return (
    <TagsContext.Provider value={{ tags, setTags, urlTags, setUrlTags}}>
      <LayoutBase />
    </TagsContext.Provider>
  );
}

export default App;
