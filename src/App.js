import { useState } from "react";
import ReviewList from "./ReviewList";
import mockitem from "./mock.json";

function App() {
  const [item, setItem] = useState(mockitem);
  const [order, setOrder] = useState();
  const sortItem = item.sort((a, b) => b[order] - a[order]);

  const handleClickStar = () => setOrder("rating");

  const handleClickNew = () => setOrder("createdAt");

  const handleDelet = (id) => {
    const NextItems = item.filter((item) => item.id !== id);
    setItem(NextItems);
  };
  return (
    <div className="App">
      <button onClick={handleClickNew}>최신순</button>
      <button onClick={handleClickStar}>별점순</button>
      <ReviewList items={sortItem} onDelete={handleDelet} />
    </div>
  );
}

export default App;
