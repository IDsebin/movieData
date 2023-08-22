import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import { getReviews } from "./api";

function App() {
  const [order, setOrder] = useState();
  const [item, setItem] = useState([]);
  const sortItem = item.sort((a, b) => b[order] - a[order]);

  const handleClickStar = () => setOrder("rating");

  const handleClickNew = () => setOrder("createdAt");

  const handleDelet = (id) => {
    const NextItems = item.filter((item) => item.id !== id);
    setItem(NextItems);
  };

  const handleData = async (orderQuery) => {
    const { reviews } = await getReviews(orderQuery);
    setItem(reviews);
  };

  useEffect(() => {
    handleData(order);
  }, [order]);

  return (
    <div className="App">
      <div>
        <button onClick={handleClickNew}>최신순</button>
        <button onClick={handleClickStar}>별점순</button>
      </div>
      <ReviewList items={sortItem} onDelete={handleDelet} />
    </div>
  );
}

export default App;
