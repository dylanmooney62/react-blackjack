import React from 'react';

const CardList = ({ children }) => {
  return (
    <div className="relative flex justify-center h-72">
      <div className="grid grid-cols-5 gap-10">{children}</div>
      <div className="absolute w-full">
        <div className="relative flex justify-center">
          <div className="grid grid-cols-5 gap-10">
            {Array(5)
              .fill()
              .map((_, idx) => (
                <div
                  className="w-64 h-72 border-2 rounded-lg border-white"
                  style={{ width: 212 }}
                  key={idx}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
