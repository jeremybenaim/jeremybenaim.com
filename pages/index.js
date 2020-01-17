import Head from 'next/head'
import { useEffect, useState } from 'react';
import { theme, META } from '../common/constants';

const FAVICON = {
  DEFAULT: 'default.png',
  IDLE: 'idle.png',
};


const Link = ({ href, color, children }) => (
  <a
    href={href}
    target="_blank"
    style={{ borderColor: color, outlineColor: color }}
  >
    {children}
  </a>
);

const Index = () => {
  const [favicon, setFavicon] = useState(FAVICON.DEFAULT);
  const [isPageVisible, setIsPageVisible] = useState(true);

  const onVisibilityChange = () => {
    if (document.hidden) {
      setIsPageVisible(false);
      return;
    }

    setIsPageVisible(true);
  }

  useEffect(() => {
    setFavicon(isPageVisible ? FAVICON.DEFAULT : FAVICON.IDLE)
  }, [isPageVisible]);


  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href={`/${favicon}`} />

        <title>{META.TITLE}</title>
        <link rel="canonical" href={META.URL} />

        <meta name="description" content={META.DESCRIPTION} />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.URL} />
        <meta property="og:site_name" content={META.TITLE} />
        <meta property="og:title" content={META.TITLE} />
        <meta property="og:description" content={META.DESCRIPTION} />

        <meta name="twitter:site" content="jeremybenaim" />
        <meta name="twitter:creator" content="jeremybenaim" />
        <meta name="twitter:url" content={META.URL} />
        <meta name="twitter:title" content={META.TITLE} />
        <meta name="twitter:description" content={META.DESCRIPTION} />
      </Head>
      <article>
        <p>Hi, I'm Jeremy Benaim. I build stuff for the internet.</p>
        <p>I've been a <strong>Senior Full Stack Javascript developer</strong> since 2008. My job is to help companies around the world to build successful products and deliver great user experiences.</p>
        <p>I have considerable expertise in Front End development with <strong>react</strong>, <strong>redux</strong>, <strong>nodejs</strong> and <strong>react-native</strong> and have worked with a number of different frameworks and languages throughout my career.</p>
        <p>I've been exclusively <strong>working remotely</strong> since 2016 and have been a supporter of the remote community since then.</p>
        <p>{
          [
            `Some companies I've worked with: `,
            <Link href="https://jour.com/" color="#fc7669" key="jour">Jour</Link>,
            ', ',
            <Link href="https://www.waldo.io/" color="#5792fc" key="waldo">Waldo.io</Link>,
            ', ',
            <Link href="https://hivyapp.com/" color="#75fbc4" key="hivy">Hivy (YC W17, acquired)</Link>,
            ', ',
            <Link href="https://www.efounders.com/" color="#52cc51" key="ef">eFounders</Link>,
            ', ',
            <Link href="https://viadeo.com/" color="#f07355" key="viadeo">Viadeo</Link>,
            '.',
          ]}
        </p>
        <p><a href="mailto:jeremybenaim@gmail.com" style={{ borderBottom: '2px solid' }}>Feel free to contact me</a> if you'd like to chat.</p>
        <p>You can also find me on <Link href="https://twitter.com/jeremybenaim/" color="#1da1f2">Twitter</Link> and <Link href="https://www.linkedin.com/in/jeremybenaim/" color="#0073b1">LinkedIn</Link>.</p>
        <p>Bye now. 👋</p>
      </article>
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }

        ::selection {
          background: ${theme.dark.backgroundColor};
          color: ${theme.dark.textColor};
        }
        ::-moz-selection {
          background: ${theme.dark.backgroundColor};
          color: ${theme.dark.textColor};
        }
        strong::selection {
          background: inherit;
          color: inherit;
        }

        html, body {
          background: ${theme.light.backgroundColor};
          color: ${theme.light.textColor};
        }

        body {
          font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
          line-height: 1.4;
          font-size: 18px;
          font-weight: 400;
          margin: 0;
          direction: ltr;
          font-feature-settings: 'kern';
          text-rendering: optimizeLegibility;
          -webkit-text-size-adjust: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }

        article {
          margin: 3.5rem 3.15rem;
          max-width: 40rem;
        }

        strong {
          border: 2px solid #ddd;
          background: #ddd;
          font-weight: 600;
          color: ${theme.light.textColor};
        }

        a {
          color: ${theme.light.textColor};
          font-weight: 600;
          padding-bottom: 2px;
          text-decoration: none;
          transition: .2s ease;
        }
        a:hover {
          border-bottom: 2px solid;
        }

        @media (max-width: 40rem) {
          article {
            margin: 2rem 1.5rem;
          }
        }

        @media (prefers-color-scheme: dark) {
          html, body {
            background: ${theme.dark.backgroundColor};
            color: ${theme.dark.textColor};
          }
          a {
            color: ${theme.dark.textColor};
          }
          ::selection {
            background: ${theme.light.backgroundColor};
            color: ${theme.light.textColor};
          }
          ::-moz-selection {
            background: ${theme.light.backgroundColor};
            color: ${theme.light.textColor};
          }
        }
      `}</style>
    </>
  );
};

export default Index;
