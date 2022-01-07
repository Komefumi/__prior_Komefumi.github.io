import blogClasses from "src/styles/modules/blog.module.scss";

/*
 * My very first real first blog post. Granted this blog has it's limitations... but it works.
 * Not withstanding that I'm proud of my creation.
 */
export default function MyFirstBlogPost() {
  return (
    <div className={blogClasses.blog_writer}>
      <p>This is my first blog post</p>
      <p>
        I had to go through a lot of inner fear and trauma healing to get to be
        able to make this blog.
      </p>
      <p>
        In the end I've given myself a voice to speak with. This is my own
        platform. Crafted by me. Granted with inspiration from external sources
      </p>
      <p>
        I had intended to begin blogging much sooner. Having seen from a video
        by SimpleProgrammer/John Sonmez that for developers, maintaining their
        own blog is quite useful in regards to their market (and other) value.
      </p>
      <p>
        This was many years ago. Having finally reached a point where I've built
        something like this, I feel a sense of achievement.
      </p>
      <p>
        I think that many things could have been achieved sooner. But there were
        lessons derived from mistakes made through the years. And perhaps it's
        up to me to derive an even better outcome than what my younger self
        dreamed of, and even considered possible. It's up to me to make such
        happen.
      </p>
    </div>
  );
}
