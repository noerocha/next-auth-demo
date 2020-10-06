import Head from "next/head";
import styles from "../styles/Home.module.css";
import { signin, signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Next Auth Demo</title>
      </Head>

      {!loading && (
        <nav className={styles.nav}>
          {!session ? (
            <button onClick={() => signin("github")}>Github Connect</button>
          ) : (
            <>
              <span style={{ marginRight: "2px", fontWeight: "600" }}>
                {session.user.name}
              </span>
              {session.user.image && (
                <img
                  style={{
                    width: "24px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  src={session.user.image}
                  alt="avatar"
                />
              )}
              <button onClick={signOut}>Sign Out</button>
            </>
          )}
        </nav>
      )}
    </>
  );
}
