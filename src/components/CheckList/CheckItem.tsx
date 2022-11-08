const CheckItem = ({ onDelete, id, date, title }) => {
  return (
    <div className="CheckItem">
      <div className="info">
        <span>날짜 : {date} </span>
        <div className="title">{title}</div>
        <button
          onClick={() => {
            console.log(id);
            if (window.confirm(`${id}번 째 보고를 삭제할까요?`)) {
              onDelete(id);
            }
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default CheckItem;
