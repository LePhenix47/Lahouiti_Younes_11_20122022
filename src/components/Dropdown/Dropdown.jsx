import { useState } from "react";

function Dropdown({ textType, textValue }) {
  const [isCollapsed, setCollapsed] = useState(false);

  let content = null;

  const textIsAList = typeof textValue === "object"; //Arrays in JS are prototypes → kinda like objects

  if (textIsAList) {
    content = (
      <ul
        className={`dropdown__text ${
          isCollapsed ? "dropdown__text--active" : ""
        }`}
      >
        {textValue.map((item, index) => {
          return <li key={`${item}-${index}`}>{item}</li>;
        })}
      </ul>
    );
  } else {
    content = (
      <p
        className={`dropdown__text ${
          isCollapsed ? "dropdown__text--active" : ""
        }`}
      >
        {textValue}
      </p>
    );
  }

  return (
    <section className="dropdown">
      <div className="dropdown__container">
        <label
          htmlFor="test"
          className={`dropdown__label ${
            isCollapsed ? "dropdown__label--active" : ""
          }`}
        >
          <svg
            className="dropdown__label-icon"
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
              fill="currentColor"
            />
          </svg>
        </label>
        <button
          className="dropdown__button"
          type="button"
          id={"test"}
          onClick={() => {
            setCollapsed(!isCollapsed);
          }}
        >
          {textType}
        </button>
      </div>
      <div className="dropdown__content">{content}</div>
    </section>
  );
}

export default Dropdown;
