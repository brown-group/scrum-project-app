/* Routes setup */

import { Route, Routes } from "react-router-dom";
import "./assets/scss/app.scss";
import "bootstrap";
import Layout from "./routes/Layout";
import NotFound from "./routes/NotFound";
import Index from "./routes/Index";
import Emil from "./routes/Emil/Emil";
import Husni from "./routes/Husni/Husni";
import Paulina from "./routes/Paulina/Paulina";
import Zainab from "./routes/Zainab/Zainab";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="page1" element={<Emil />} />
          <Route path="page3" element={<Husni />} />
          <Route path="page4" element={<Paulina />} />
          <Route path="page5" element={<Zainab />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
