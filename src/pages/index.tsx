import { GetStaticProps } from 'next';
import Link from 'next/link';

import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';
import Header from '../components/Header';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <main className={styles.container}>
        <Header />

        <div className={styles.listPosts}>
          <Link href="/">
            <a>
              <h1>Como utilizar Hooks</h1>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>

              <div className={styles.author}>
                <div>
                  <FiCalendar />
                  <time> 15 Mar 2021</time>
                </div>
                <div>
                  <FiUser />
                  <span>Joseph Oliveira</span>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a>
              <h1>Como utilizar Hooks</h1>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>

              <div className={styles.author}>
                <div>
                  <FiCalendar />
                  <time> 15 Mar 2021</time>
                </div>
                <div>
                  <FiUser />
                  <span>Joseph Oliveira</span>
                </div>
              </div>
            </a>
          </Link>
          <div className={styles.loadingLink}>
            <a>Carregar mais posts</a>
          </div>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);
//   // TODO
// };
