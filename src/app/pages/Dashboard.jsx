import React from "react";
import StatsCards from "../components/StatsCards";
import SalesTrend from "../components/SalesTrend";
import ProductComparison from "../components/ProductComparison";
import ProductSales from "../components/ProductSales";
import PolicyDetails from "../components/PolicyDetails";

const Dashboard = () => {
  return (
    <>
      <StatsCards />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SalesTrend />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <ProductComparison />
          <ProductSales />
        </div>
        <PolicyDetails />
      </div>
    </>
  );
};

export default Dashboard;
