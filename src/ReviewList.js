function formatDate(value) {
  const date = new Date(value);
  return `${date.getYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <>
      <img src={item.imgUrl}></img>
      <div>
        <p>{item.title}</p>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </>
  );
}

function ReviewList({ items, onDelete }) {
  console.log(items);
  const nameList = items.map((item) => (
    <li key={item.id}>
      <ReviewListItem item={item} onDelete={onDelete} />
    </li>
  ));
  return <>{nameList}</>;
}
export default ReviewList;
