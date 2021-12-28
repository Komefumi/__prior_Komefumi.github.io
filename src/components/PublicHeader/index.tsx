import { Link } from "react-router-dom";
import { LinkPayloadList, ILinkPayload } from "common-ts-props/global";
import classes from "./classes.module.scss";

const gen = (name: string) =>
  [name, `/${name.split(" ").join("-").toLowerCase()}`] as ILinkPayload;

const quickLinkPayloadList: LinkPayloadList = [
  "Places",
  "People",
  "Profile",
  "About",
].map(gen);

export default function PublicHeader() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <span className={classes.logo}>
          <Link to="/">Home Sweet Home</Link>
        </span>
        <ul className={classes.main_nav}>
          {quickLinkPayloadList.map(([name, path]) => (
            <li>
              <Link key={path} to={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={classes.secondary_list}>
          <li className={classes.link_li}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
