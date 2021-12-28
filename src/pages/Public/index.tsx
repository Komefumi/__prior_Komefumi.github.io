import { Outlet } from "react-router-dom";
import PublicHeader from "@/components/PublicHeader";
import classes from "./classes.module.scss";

export default function PublicRouting() {
  return (
    <div>
      <PublicHeader />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}
