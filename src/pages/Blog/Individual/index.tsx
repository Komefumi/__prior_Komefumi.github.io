import {
  useState,
  useEffect,
  Suspense,
  lazy,
  LazyExoticComponent,
  ComponentType,
} from "react";
import { Link, useParams } from "react-router-dom";
import compiledBlogPostListDatum from "@/datum/blog-posts-connection";
import Layout from "@/layout/General";
import { prepareDateFromBlogPostDatum } from "@/utils/date";
import { IBlogPostDatum } from "@/my-types";
import classes from "./classes.module.scss";

export default function IndividualBlogPost() {
  const [postRetrievalErrored, setPostRetrievalErrored] =
    useState<Boolean>(false);
  const [blogPostDatum, setBlogPostDatum] = useState<IBlogPostDatum | null>(
    null
  );
  const [BlogPostComponent, setBlogPostComponent] =
    useState<LazyExoticComponent<ComponentType<any>> | null>(null);
  const { postId } = useParams();

  useEffect(() => {
    if (BlogPostComponent) return;
    const foundPostDatum = compiledBlogPostListDatum.find(
      ({ id }) => id === postId
    );
    if (!foundPostDatum) {
      setPostRetrievalErrored(true);
      return;
    }

    setBlogPostComponent(
      lazy(() => import(`../../../blog-posts/${foundPostDatum.id}`))
    );
    setBlogPostDatum(foundPostDatum);
  }, [postId, BlogPostComponent]);

  return (
    <Layout>
      <div className={classes.util_bar}>
        <Link to="/blog">Return to listing</Link>
      </div>
      <div className={classes.page_content}>
        {postRetrievalErrored && (
          <div className={classes.error_notice}>
            <p>Uh oh. Seems the post you requested for doesn't exist.</p>
            <p>
              Refresh, or retry later. If you followed a link, might want to
              make sure it pointed to an existing blog post.
            </p>
          </div>
        )}
        {BlogPostComponent && (
          <div className={classes.post_rendering}>
            {blogPostDatum && (
              <header className={classes.post_header}>
                <h2 className={classes.title}>{blogPostDatum.title}</h2>
                <span className={classes.date_rendered}>
                  {prepareDateFromBlogPostDatum(blogPostDatum)}
                </span>
              </header>
            )}
            <main className={classes.post_main}>
              <Suspense fallback={<div>Loading Post</div>}>
                <BlogPostComponent />
              </Suspense>
            </main>
          </div>
        )}
      </div>
    </Layout>
  );
}
