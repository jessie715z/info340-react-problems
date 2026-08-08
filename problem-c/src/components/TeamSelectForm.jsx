import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  //Your work goes here
const [selectedTeam, setSelectedTeam] = useState('');
const [includeRunnerUp, setIncludeRunnerUp] = useState(false);

function handleSelectChange(event) {
  setSelectedTeam(event.target.value);
}

function handleCheckboxChange(event) {
  setIncludeRunnerUp(event.target.checked);
}

function handleButtonClick() {
  props.applyFilterCallback(selectedTeam, includeRunnerUp);
}

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
  })

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select id="teamSelect" className="form-select" value={selectedTeam} onChange={handleSelectChange}>
          <option value="">Show all teams</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <div className="form-check">
          <input id="runnerupCheckbox" type="checkbox" className="form-check-input" checked={includeRunnerUp} onChange={handleCheckboxChange} />
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div>
      <div className="col-auto">
        <button id="submitButton" type="button" className="btn btn-warning" onClick={handleButtonClick}>Apply Filter</button>
      </div>
    </div>
  );
}