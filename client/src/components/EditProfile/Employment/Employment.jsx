//External Lib Import
import React from "react";
import { Tab, Tabs } from "react-bootstrap";

//Internal Lib Import
import EmploymentHistory from "./EmploymentHistory";
import EmploymentHistoryArmi from "./EmploymentHistoryArmi";

const Employment = () => {
  return (
    <Tabs defaultActiveKey="EmploymentHistory" className="mb-3 faq-tab">
      <Tab eventKey="EmploymentHistory" title="Employment History">
        <EmploymentHistory />
      </Tab>
      <Tab
        eventKey="EmploymentHistoryArmi"
        title="Employment History(For Retired Army Person)"
      >
        <EmploymentHistoryArmi />
      </Tab>
    </Tabs>
  );
};

export default Employment;
