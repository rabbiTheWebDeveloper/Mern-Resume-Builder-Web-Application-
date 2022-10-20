//External Lib Import
import React from "react";
import { Tab, Tabs } from "react-bootstrap";

//Internal Lib Import
import Specialization from "./Specialization";
import LanguageProficiency from "./LanguageProficiency";
import References from "./References";

const OtherInformation = () => {
  return (
    <Tabs defaultActiveKey="Specialization" className="mb-3 faq-tab">
      <Tab eventKey="Specialization" title="Specialization">
        <Specialization />
      </Tab>
      <Tab eventKey="LanguageProficiency" title="Language Proficiency">
        <LanguageProficiency />
      </Tab>
      <Tab eventKey="References" title="References">
        <References />
      </Tab>
    </Tabs>
  );
};

export default OtherInformation;
