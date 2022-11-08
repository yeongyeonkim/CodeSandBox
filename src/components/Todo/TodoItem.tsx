import * as React from "react";

interface IList {
  idx: number;
  item: string;
  isDelete: boolean;
  onDelete: Function;
}

export function TodoItem(props: IList) {
  const handleDelete = () => {
    props.onDelete(props.idx);
  };

  return (
    <div>
      {props.idx !== 0 && !props.isDelete && (
        <div>
          {props.item}
          <span onClick={handleDelete}>삭제</span>
        </div>
      )}
    </div>
  );
}
