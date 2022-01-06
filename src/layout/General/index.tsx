import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { WrapperProps } from "common-ts-props/react";
import { DoubleStringList } from "common-ts-props/global";
import classes from "./classes.module.scss";
import linkClasses from "src/styles/modules/link.module.scss";

const navPayload: DoubleStringList = [
  ["About", "/"],
  ["Blog", "/blog"],
];

interface Props extends WrapperProps {
  topSlot?: ReactNode;
}

export default function PublicRouting({ topSlot, children }: Props) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={classes.layout}>
      <section className={classes.top_slot}>{topSlot}</section>
      <main className={classes.main}>
        <nav className={classes.nav}>
          <ul>
            {navPayload.map(([name, path]) => (
              <li>
                <Link
                  className={clsx(
                    path === location.pathname && classes.active_link
                  )}
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className={classes.main_slot}>{children}</section>
      </main>
      <footer className={classes.footer}>
        <section className={classes.credits_section}>
          Design taken from{" "}
          <a
            className={linkClasses.linkPurple}
            href="https://html5up.net/stellar"
            target="_blank"
            rel="noreferrer"
          >
            HTML5UP Stellar
          </a>
        </section>
      </footer>
    </div>
  );
}
