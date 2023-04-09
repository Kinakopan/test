import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession, unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import styles from '@/styles/Home.module.css'

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
      <div className={styles.main}>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} /> <br />
        {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      </>
    )
  }
  return (
    <>
    <div className={`${styles.wrapper} ${styles.wrapper_main}`}>
      <h1 className={`${styles.home_page_ttl} ${styles.page_ttl}`}>
        Your THOUGHT on NEWS
      </h1>

      <main className={styles.top_main}>
        <div className={styles.top_main_back}>
          <h1>Share your thought on NEWS</h1>
          <p className={styles.slogan}>Sign in here!<br /></p>
          <button
            className={styles.btn}
            id="btn"
            onClick={() => signIn()}>
              Sign in
            <span></span><span></span><span></span><span></span>
          </button>
        </div>
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if(session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
