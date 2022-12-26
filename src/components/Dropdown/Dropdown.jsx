function Dropdown() {
  return (
    <section className="dropdown">
      <label htmlFor="test">label</label>
      <button className="dropdown__button" type="button" id={"test"}>
        dropdown button
      </button>
      <div className={"dropdown__content"}>
        <p>[Text of dropdown menu]</p>
      </div>
    </section>
  );
}

export default Dropdown;
