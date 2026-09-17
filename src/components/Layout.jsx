import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
export default function Layout() { return <div className="journal-layout"><a href="#main-content" className="sr-only focus:not-sr-only">跳至主要內容</a><Navbar/><main id="main-content"><Outlet/></main><SiteFooter/></div>; }
