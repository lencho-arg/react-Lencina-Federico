export const ItemCount = ({ count, handleCount }) => {
    return (

      <div className="flex mt-10 w-4/5 bg-gray rounded">

        <button
          onClick={() => handleCount("minus")}
          className="flex justify-center items-center p-2 mb-3 w-2/5 h-full bg-gray">
          -
        </button>

        <span id="counter" className="flex flex-1 justify-center items-center mx-4 font-bold">
          {count}
        </span>

        <button onClick={() => handleCount("plus")} 
        className="flex justify-center items-center p-2 mb-3 w-2/5 h-full bg-gray">
          +
        </button>

      </div>
    );
  };