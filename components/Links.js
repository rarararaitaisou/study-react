import styles from "./Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples →",
    description: " Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Links() {
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </a>
        );
      })}

      {/* <a href="https://nextjs.org/docs" className={styles.card}>
        <h2 className={styles.title}>Documentation &rarr;</h2>
        <p className={styles.description}>
          Find in-depth information about Next.js features and API.
        </p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        <h2 className={styles.title}>Learn &rarr;</h2>
        <p className={styles.description}>
          Learn about Next.js in an interactive course with quizzes!
        </p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/canary/examples"
        className={styles.card}
      >
        <h2 className={styles.title}>Examples &rarr;</h2>
        <p className={styles.description}>
          Discover and deploy boilerplate example Next.js projects.
        </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h2 className={styles.title}>Deploy &rarr;</h2>
        <p className={styles.description}>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a> */}
    </div>
  );
}
