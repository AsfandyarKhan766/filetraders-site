import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ShogGridBahria from "./shop-components/shop-right-sidebar-bahria";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const Shop_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Do you want to Buy a file" />
      <ShogGridBahria />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Shop_V1;
