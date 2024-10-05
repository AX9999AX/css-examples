import "./ActiveExample.css";

function ActiveExample() {
  return (
    <section>
      <div className="active-example-link">
        <h2>Example of link with active styles</h2>
        <a href="https://google.com/">Google</a>
      </div>
      <div className="active-example-btn">
        <h2>Example of button with active styles</h2>
        <button>Button</button>
      </div>
      <div className="active-example-input">
        <h2>Example of input with active styles</h2>
        <input type="text" placeholder="Click to activate" />
      </div>
      <div className="active-example-textarea">
        <h2>Example of textarea with active styles</h2>
        <textarea placeholder="Click to activate" />
      </div>
      <div className="active-example-select">
        <h2>Example of select with active styles</h2>
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="active-example-h2">
        <h2>Example of h2 with active styles (Click on it)</h2>
      </div>
    </section>
  );
}

export default ActiveExample;
