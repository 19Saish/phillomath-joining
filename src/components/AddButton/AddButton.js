import React from "react";

const AddButton = ({handlerAdd, handlerDelete}) => {
  return (
    <div>
      <div className="flex justify-between my-4 w-64">
        <button onClick={handlerAdd} className="bg-gray-500 hover:bg-opacity-50 w-24 p-2 rounded">
          Add
        </button>
        <button onClick={handlerDelete} className="border border-gray-500 p-2 w-24 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddButton;
