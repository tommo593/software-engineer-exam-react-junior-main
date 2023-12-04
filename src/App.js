import React, { useState } from 'react';
import './App.css';
import New from './components/New';

class App extends React.Component {
  render() {
    const FormFields = () => {
      const [inputFields, setInputFields] = useState([
        { name: "field_name", label: "Name", type: "text" },
        { name: "field_username", label: "User", type: "text" },
        { name: "field_date", label: "Date", type: "date" }
      ]);

      const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
      }

      return (
        <div>
          <h1>Webtrends Optimize Software Engineer exam</h1>
          <form>
            {inputFields.map((input, index) => (
              <div key={index}>
                <input className="text-fields" name={input.label} label={input.label} type="text" value={input.label} onChange={event => handleFormChange(index, event)} />
              </div>
            ))}
          </form>
        </div>
      );
    };

    return (
      <div>
        <FormFields />
        <New text="hello" />
      </div>
    );
  }
}

export default App;
