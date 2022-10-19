//External Lib Import
import React from "react";
import { Tab, Tabs } from "react-bootstrap";

//Internal Lib Import
import PersonalDetails from "./PersonalDetails";
import Preferred from "./Preferred";
import AddressDetails from "./AddressDetails";
import Career from "./Career";
import Other from "./Other";

const PersonalInfo = () => {
  return (
    <Tabs defaultActiveKey="Personal" className="mb-3 faq-tab">
      <Tab eventKey="Personal" title="Personal">
        <PersonalDetails />
      </Tab>
      <Tab eventKey="Address" title="Address">
        <AddressDetails />
      </Tab>
      <Tab eventKey="Career" title="Career">
        <Career />
      </Tab>
      <Tab eventKey="Preferred" title="Preferred">
        <Preferred />
      </Tab>
      <Tab eventKey="Other" title="Other">
        <Other />
      </Tab>
    </Tabs>
  );
};

export default PersonalInfo;
