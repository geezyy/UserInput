import React from 'react'

function Output(props) {
  return (
    <div>
      {/* output */}
      <p className="myText">
        My name is {props.user}. I am 25 years old. <br />
        {/* the two-way binding */}
        <input
          type="text"
          onChange={props.change}
          value={props.user}
          className=" bg-[#f5f2f2] rounded-2xl p-2 mx-12 shadow-md"
        />
      </p>
    </div>
  );
}

export default Output