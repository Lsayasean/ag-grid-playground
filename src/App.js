import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useState } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

function App() {
  const heroData = [
    {
      name: "Lemillion",
      status: "active",
      age: 21
    },
    {
      name: "Gran Torino",
      status: "semi-retired",
      age: 65
    },
    {
      name: "All Might",
      status: "retired",
      age: 40
    },
  ]

  const [rowData, setRowData] = useState(heroData),
        [nameData, setNameData] = useState(),
        [statusData, setStatusData] = useState(),
        [ageData, setAgeData] = useState();

  const updateHeroData = () => {
    const newHeroObj = {
      name: nameData,
      status: statusData,
      age: parseInt(ageData)
    }
    heroData.push(newHeroObj)
    setRowData(heroData)
  }

  const defaultCol = {
    sortable: true,
    editable: true,
  }
   return (
    <div className="App">
      <h2>Testing AG-GRID </h2>
      <div className="ag-theme-alpine mx-auto text-center" style={ { height: 400, width: '44%' } }>
        <AgGridReact
          rowData={rowData}
          pagination={true}
          paginationPageSize={2}
          defaultColDef={defaultCol}
          >
          <AgGridColumn field="name" floatingFilter={true} filter={true}></AgGridColumn>
          <AgGridColumn field="age" ></AgGridColumn>
          <AgGridColumn field="status"  ></AgGridColumn>
        </AgGridReact>
      </div>

      <form className="w-25 mx-auto  p-2">
      <div className="form-group">
        <input type="text" className="form-control" id="name" placeholder="Enter hero name" onChange={(e) => setNameData(e.target.value) }/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="status" placeholder="enter hero status" onChange={(e) => setStatusData(e.target.value) }/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="age" placeholder="enter hero age" onChange={(e) => setAgeData(e.target.value) }/>
      </div>
      <button type="submit" className="btn btn-primary w-100" onClick={updateHeroData}>Add New Hero</button>
    </form>
    </div>
  );
}

export default App;
