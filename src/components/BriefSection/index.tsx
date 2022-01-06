import { WrapperProps } from "common-ts-props/react";
import classes from "./classes.module.scss";

interface SectionItemProps extends WrapperProps {
  title: string;
}

export default function BriefSection({ title, children }: SectionItemProps) {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.content}>{children}</div>
    </section>
  );
}
