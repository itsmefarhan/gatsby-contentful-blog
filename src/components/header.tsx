import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const liItems = [
    { title: "Blog", url: "/blog" },
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
  ]

  interface Props {
    title: string
    url: string
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {data.site.siteMetadata.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {liItems.map((item: Props) => (
              <li className="nav-item" key={item.title}>
                <a className="nav-link" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
