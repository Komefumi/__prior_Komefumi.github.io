import clsx from "clsx";
import linkClasses from "src/styles/modules/link.module.scss";

interface Props {
  variant: "purple" | "violet";
  href: string;
  children: string;
}

export default function QuickLink({ variant, href, children }: Props) {
  return (
    <a
      className={clsx(
        variant === "purple" ? linkClasses.linkPurple : linkClasses.linkViolet
      )}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
