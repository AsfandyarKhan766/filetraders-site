import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TeamDetails from "./section-components/team-details";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import TeamDetailsNoman from "./section-components/team-details-noman";

const Team_Details_Noman = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Noman Details" />
      <TeamDetailsNoman />
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default Team_Details_Noman;
