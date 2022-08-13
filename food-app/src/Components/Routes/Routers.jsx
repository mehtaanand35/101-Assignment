import { Route, Routes } from "react-router-dom";
import { Detail } from "../DetailPage/Detail";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
export const Routers = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
};
