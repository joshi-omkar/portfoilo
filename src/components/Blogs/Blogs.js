import React from "react";

const Blogs = () => {
  return (
    <div>
      <header class="hero">
        <h1 class="hero-heading">
          read my <span class="heading-inverted">blogs</span>
        </h1>
      </header>

      <ul class="list-non-bullet">
        <li>
          <article class="showcase-list container container-center ">
            <h1>React Hooks (Part-1) - useState</h1>
            <small>Aug, 2021</small>
            <p>
              Stuck at hooks? Read the blog to understand hooks and useState
            </p>

            <a
              class="link link-primary"
              href="https://omkarjoshi.hashnode.dev/react-hooks-part1"
            >
              Read More
            </a>
          </article>
        </li>

        <li>
          <article class="showcase-list container container-center ">
            <h1>5 Youtubers Who Add Value In My Life..</h1>
            <small>Sept, 2021</small>
            <p>
              Here are some youtubers with great content and add immense value
              in my life.
            </p>

            <a
              class="link link-primary"
              href="https://omkarjoshi.hashnode.dev/5-youtubers-who-add-value-in-my-life"
            >
              Read More
            </a>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
