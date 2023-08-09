import { useState } from "react";
import ReviewList from "./ReviewList";
import { getReviews } from "./api";

function App() {
  const [item, setItem] = useState([]);
  const [order, setOrder] = useState();
  const sortItem = item.sort((a, b) => b[order] - a[order]);

  const handleClickStar = () => setOrder("rating");

  const handleClickNew = () => setOrder("createdAt");

  const handleDelet = (id) => {
    const NextItems = item.filter((item) => item.id !== id);
    setItem(NextItems);
  };

  const handleCickData = async() => {
    const { reviews } = await getReviews();
    setItem (reviews);
  };
  return (
    <div className="App">
      <div>
        <button onClick={handleClickNew}>최신순</button>
        <button onClick={handleClickStar}>별점순</button>
      </div>
      <ReviewList items={sortItem} onDelete={handleDelet} />
      <button onClick={handleCickData}>불러오기</button>
    </div>
  );
}

export default App;
