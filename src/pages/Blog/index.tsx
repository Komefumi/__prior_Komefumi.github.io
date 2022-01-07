import { Link } from "react-router-dom";
import Layout from "@/layout/General";
import { prepareDateFromBlogPostDatum } from "@/utils/date";
import { IBlogPostDatum } from "@/my-types";
import compiledBlogPostListDatum from "@/datum/blog-posts-connection";
import classes from "./classes.module.scss";

export default function BlogPage() {
  return (
    <Layout>
      {(compiledBlogPostListDatum as unknown as IBlogPostDatum[]).map(
        (item) => {
          const { id, title, description } = item;
          return (
            <Link className={classes.link_to_post} to={`/blog/${id}`} key={id}>
              <header className={classes.header}>
                <h2 className={classes.title}>{title}</h2>
                <span className={classes.date_rendered}>
                  {prepareDateFromBlogPostDatum(item)}
                </span>
              </header>
              <div className={classes.description}>{description}</div>
            </Link>
          );
        }
      )}
    </Layout>
  );
}
