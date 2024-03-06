// React Imports
import React from "react";
import { Route, Routes } from "react-router-dom";
// Custom
import Entry from "./entry/Index";
import InquiryForm from "./inquiryform/Index";
import Download from "./pdf/Download";
import Pharma from "./pdf/Pharma";
import RoleSelection from "./roleselection/Index";

const AppViews = () => {
  return (
    <Routes>
      <Route path="/entry/:category" element={<Entry />} />
      <Route path="/role-selection/:category" element={<RoleSelection />} />
      <Route path="/inquiry-form/:category" element={<InquiryForm />} />
      <Route path="/download-pdf/:category" element={<Download />} />
      <Route path="/pharma-pdf/:category" element={<Pharma />} />
    </Routes>
  );
};

export default AppViews;
