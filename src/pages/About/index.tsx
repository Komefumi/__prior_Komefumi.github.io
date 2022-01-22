import Layout from "@/layout/General";
import SectionItem from "@/components/BriefSection";
import QuickLink from "@/components/QuickLink";
import classes from "./classes.module.scss";

export default function AboutPage() {
  return (
    <Layout>
      <SectionItem title="About Me">
        <p>My name is Arjun.</p>
        <p>
          I'm someone aspiring to become a hands-on scientist. There is a long
          way to that goal but I can see what I do on a daily basis to have
          relevance towards that end.
        </p>
      </SectionItem>
      <SectionItem title="My Skills">
        <p>
          I'm a self taught web developer. I primarily work with JavaScript and
          TypeScript. TS + React being what I've most experience in. But I can
          handle other front-end frameworks as well as Node.js backend work
          comfortably.
        </p>
        <p>
          My workflow consists of bash (I use Linux, Manjaro to be specific),
          vim, fzf, tree, and npm scripts. I make use of node (and even go) to
          make any utility scripts and automate tasks. Overall this secondary
          skill set (so as to speak) has given me a greater productivity boost
          compared to when I was using VSCode. And, just as relevant, a lesser
          load on my system. Which has also lead to greater productivity.
        </p>
      </SectionItem>
      <SectionItem title="Lesser Expertise">
        <p>
          I'm somewhat comfortable with Python, having spent some time with it
          and have tried to switch to web development with it's ecosystem. With
          a focus on Django.
        </p>
        <p>
          The language I'm putting effort into learning is Go. I study and use
          it on a regular basis but I'll update the detailing here as I become
          more proficient.
        </p>
      </SectionItem>
      <SectionItem title="My Education">
        <p>
          I'm currently pursuing a BSc. in Mathematics from Singhania
          University. Although there is a need to keep a balance among all my
          time-intensive preperations, I do consider my education seriously.
          Even though I had enrolled for my degree quite late.
        </p>
        <p>
          In future I intend to utilize knowledge of mathematics for machine
          learning, computer science, and the classical sciences.
        </p>
      </SectionItem>
      <SectionItem title="Contact And Related Info">
        <p>
          You can always drop an urgent message via{" "}
          <QuickLink
            variant="violet"
            href="https://arjun-needs-to-see-this.surge.sh/"
          >
            this form
          </QuickLink>
        </p>
        <p>
          My github is{" "}
          <QuickLink variant="violet" href="https://github.com/Komefumi">
            here
          </QuickLink>
        </p>
        <p>
          As for my email, feel free to drop me a message directly at{" "}
          <span className={classes.email_highlight}>
            komefumi@protonmail.ch
          </span>
        </p>
      </SectionItem>
    </Layout>
  );
}
