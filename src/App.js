// App.js
import React, { useState } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const { Content } = Layout;

const App = () => {
  const [data, setData] = useState([]);

  const addRecord = (record) => {
    setData([...data, { ...record, key: Math.random() }]);
  };

  const onDelete = (key) => {
    setData(data.filter((record) => record.key !== key));
  };

  const onUpdate = (key, updatedRecord) => {
    const updatedData = data.map((record) =>
      record.key === key ? { ...updatedRecord, key } : record
    );
    setData(updatedData);
  };

  return (
    <Layout>
      <Content style={{ padding: "24px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<FormComponent addRecord={addRecord} />} />
            <Route
              path="/table"
              element={
                <TableComponent
                  data={data}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              }
            />
          </Routes>
        </Router>
      </Content>
    </Layout>
  );
};

export default App;
