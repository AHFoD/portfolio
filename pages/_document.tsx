import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*
				Author: Muhammad Ali Zulfaqar
                 GitHub: Visit the GitHub repository at https://github.com/muhammad-fiaz/portfolio/ for more details.
                 license: MIT License
                  */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Muhammad Ali Zulfaqar</title>
        <meta
          name="description"
          content="Muhammad Ali Zulfaqar - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey."
        />

        {/*These are need for PWA*/}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Muhammad Ali Zulfaqar"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <link rel="canonical" href="https://muhammadfiaz.com" />
        <meta name="license" content="MIT License" />
        <meta httpEquiv="content-language" content="en-us" />

        <link rel="preconnect" href="https://muhammadfiaz.com" />

        <link rel="dns-prefetch" href="https://muhammadfiaz.com" />

        <meta name="author" content="Muhammad Ali Zulfaqar" />

        <link rel="alternate" hrefLang="en" href="https://muhammadfiaz.com" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/logo_rounded.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.jpg"
        />
        <link
          rel="icon"
          href="/favicon/favicon-org.ico"
          type="image/x-icon"
        ></link>
        <link
          rel="shortcut icon"
          href="/favicon/favicon-org.ico"
          type="image/x-icon"
        ></link>

        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Muhammad Ali Zulfaqar" key="title" />
        <meta
          property="og:description"
          content="Muhammad Ali Zulfaqar - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/75434191?v=4"
        />
        <meta
          property="og:image:secure_url"
          content="https://avatars.githubusercontent.com/u/75434191?v=4"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Muhammad Ali Zulfaqar" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://muhammadfiaz.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:profile"
          content="https://github.com/muhammad-fiaz"
        />
        <meta property="og:site_name" content="Muhammad Ali Zulfaqar" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://twitter.com/muhammadfiaz_" />
        <meta name="twitter:title" content="Muhammad Ali Zulfaqar" />
        <meta
          name="twitter:description"
          content="Muhammad Ali Zulfaqar - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/75434191?v=4"
        />
        <meta
          name="twitter:creator"
          content="https://twitter.com/muhammadfiaz_"
        />
        <meta name="twitter:domain" content="https://muhammadfiaz.com" />

        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="640x1136"
        />

        {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
        <meta
          name="keywords"
          content="
    Muhammad Ali Zulfaqar, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Muhammad Ali Zulfaqar Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Muhammad Ali Zulfaqar Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Muhammad Ali Zulfaqar Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Muhammad Ali Zulfaqar DevOps, IT Portfolio, Web Developer Portfolio, Muhammad Ali Zulfaqar Developer,
    Full Stack Engineer Muhammad Ali Zulfaqar, Muhammad Ali Zulfaqar Coding, Muhammad Ali Zulfaqar IT,
    Muhammad Ali Zulfaqar Full Stack Developer, Muhammad Ali Zulfaqar Software Engineer, Muhammad Ali Zulfaqar DevOps Engineer,
    Muhammad Ali Zulfaqar Programming, Muhammad Ali Zulfaqar Software Development, Muhammad Ali Zulfaqar Coding Projects,
    Muhammad Ali Zulfaqar Tech Portfolio, Muhammad Ali Zulfaqar IT Portfolio, Muhammad Ali Zulfaqar Software Engineer Portfolio,
    Muhammad Ali Zulfaqar Web Developer Portfolio, Muhammad Ali Zulfaqar DevOps Portfolio, Muhammad Ali Zulfaqar Full Stack Engineer,
    Muhammad Ali Zulfaqar Full Stack Developer Portfolio, Muhammad Ali Zulfaqar Coding Portfolio, Muhammad Ali Zulfaqar Programming Portfolio,
    Muhammad Ali Zulfaqar Software Development Portfolio, Muhammad Ali Zulfaqar Technology Projects,
    Muhammad Ali Zulfaqar Computer Science, Muhammad Ali Zulfaqar Cloud Computing, Muhammad Ali Zulfaqar IT Professional,
    Muhammad Ali Zulfaqar Technology Enthusiast, Muhammad Ali Zulfaqar Computer Programmer, Muhammad Ali Zulfaqar Code Portfolio,
    Muhammad Ali Zulfaqar Technology Student, Muhammad Ali Zulfaqar Software Architect,fiaz,fiaz portfolio,fiaz devops,fiaz devops engineer,
    fiaz devops portfolio,fiaz devops projects,fiaz devops specialist,fiaz devops professional,fiaz devops engineer portfolio,
    fiaz devops engineer projects,fiaz devops engineer specialist,fiaz devops engineer professional,fiaz devops engineer coding,
    fiaz devops engineer coding projects,fiaz devops engineer coding portfolio,fiaz devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"
        />
        {/*use your own ads sense code here*/}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040560600290490"
          crossOrigin="anonymous"
        ></Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammad Ali Zulfaqar",
          "url": "https://muhammadfiaz.com",
          "sameAs": [
            "https://github.com/muhammad-fiaz",
            "https://www.linkedin.com/in/muhammad-fiaz-",
            "https://medium.com/@muhammad-fiaz",
            "https://twitter.com/muhammadfiaz_",
            "https://dev.to/muhammadfiaz"
          ]
        }`,
          }}
        />

        {/*Edit this to your according FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Muhammad Ali Zulfaqar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muhammad Ali Zulfaqar is a Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, Muhammad Ali Zulfaqar strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, machine learning/artificial intelligence, and design principles. Muhammad Ali Zulfaqar is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Muhammad Ali Zulfaqar from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muhammad Ali Zulfaqar is from Madurai, Tamil Nadu, India."
                }
              },
              {
                "@type": "Question",
                "name": "What does Muhammad Ali Zulfaqar do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muhammad Ali Zulfaqar leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
          }}
        />

        {/*Edit this to your according to your website*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://muhammadfiaz.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://muhammadfiaz.com/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Articles",
              "item": "https://muhammadfiaz.com/articles"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://muhammadfiaz.com/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Sign In",
              "item": "https://muhammadfiaz.com/signin"
            }]
          }
        `,
          }}
        />

        {/*Edit this to your according to your website*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "NeuroLink",
            "description": "NeuroLink is a Python package that aims to provide various AI capabilities, including a chatbot, image processing, audio processing, Django support, and more. It utilizes TensorFlow and other related technologies for natural language processing and AI tasks.",
            "alternateName": "neurolink",
            "url": "https://github.com/muhammad-fiaz/neurolink",
            "logo": "https://private-user-images.githubusercontent.com/75434191/242214243-82fbf702-43e2-46e6-8e01-11758fa26310.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ4NTE2ODksIm5iZiI6MTY5NDg1MTM4OSwicGF0aCI6Ii83NTQzNDE5MS8yNDIyMTQyNDMtODJmYmY3MDItNDNlMi00NmU2LThlMDEtMTE3NThmYTI2MzEwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTE2VDA4MDMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3NjJmNzA5MGU5NWY4NTUxZTcxYmVmNzNlZTYzOTViN2FjNzE1YTM2MjM1OTNlOGIxNzk0ODE1NDczMDMzNGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ay5bRLRoojQ33ZJLFnvjyq6Dq4qZfDY7quvv4WmgRLI",
             "sameAs": [
            "https://www.linkedin.com/in/muhammad-fiaz-/"
        ]          }
        `,
          }}
        />
        {/*theme*/}
        <Script id="theme.util.jsx" strategy="beforeInteractive">
          {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
        </Script>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
