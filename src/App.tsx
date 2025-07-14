import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { Products } from "./screens/Products";
import { AboutUs } from "./screens/AboutUs";

import { Gasoline } from "./categories/Gasoline";
import { Engine } from "./categories/Engine";
import { Diesel } from "./categories/Diesel";
import { ServiceProduct } from "./categories/ServiceProduct";

import { CatalyticCleaner } from "./products/CatalyticCleaner";

import ScrollToTop from "./components/scrolltoTop";
import { FuelTankCleaner } from "./products/FuelCleaner";
import { InjectorCleaner } from "./products/InjectorCleaner";
import { SuperEngineConditioner } from "./products/SuperEngineConditioner";
import { CarbonCleaner } from "./products/CarbonCleaner";
import { SuperEngineFlush } from "./products/SuperEngineFlush";
import { DieselPurge } from "./products/DieselPurge";
import { BrakePartsCleaner } from "./products/BrakeCleaner";
import { SiliconeSpray } from "./products/SiliconeSpray";
import { AirSanitizer } from "./products/AirSanitizer";
import { AirACCU } from "./products/AirACCU";
import { WiperFluid } from "./products/WiperFluid";
import { TyrePolish } from "./products/TyrePolish";
import { Shampoo } from "./products/Shampoo";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Routes>
        {/* mains */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* categories */}
        <Route path="/gasoline" element={<Gasoline />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/diesel" element={<Diesel />} />
        <Route path="/serviceproduct" element={<ServiceProduct />} />

        {/* each products */}
        {/* gasoline */}
        <Route path="/catalytic" element={<CatalyticCleaner />} />
        <Route path="/fueltankcleaner" element={<FuelTankCleaner />} />
        <Route path="/injectorcleaner" element={<InjectorCleaner />} />
        <Route
          path="/superengineconditioner"
          element={<SuperEngineConditioner />}
        />
        <Route path="/carboncleaner" element={<CarbonCleaner />} />

        {/* engine */}
        <Route path="/superengineflush" element={<SuperEngineFlush />} />

        {/* diesel */}
        <Route path="/dieselpurge" element={<DieselPurge />} />

        {/* service products */}
        <Route path="/brakepartscleaner" element={<BrakePartsCleaner />} />
        <Route path="/siliconespray" element={<SiliconeSpray />} />
        <Route path="/airsanitizer" element={<AirSanitizer />} />
        <Route path="/airaccu" element={<AirACCU />} />
        <Route path="/wiperfluid" element={<WiperFluid />} />
        <Route path="/tyrepolish" element={<TyrePolish />} />
        <Route path="/shampoo" element={<Shampoo />} />
      </Routes>
    </div>
  );
};
