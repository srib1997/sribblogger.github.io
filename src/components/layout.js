import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Srib's blog</title>
        </Helmet>

        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        
        <Link
          to={`/`}
          css={css`
            float: right;
            margin-left: 5px;
          `}
        >
        Home
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
            margin-left: 5px;
          `}
        >
         About
        </Link>
        
        {children}
        <a css={css`
            margin-left: 5px;
          `}
          href="https://github.com/srib1997">Github</a>
          <a css={css`
            margin-left: 5px;
          `}
          href="https://www.facebook.com/feng.xiao.127">Facebook</a>
          <a css={css`
            margin-left: 5px;
          `}
          href="https://twitter.com/srib1997">Twitter</a>
      </div>
    )}
  />
)
