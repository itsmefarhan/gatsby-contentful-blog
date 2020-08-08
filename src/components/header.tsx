import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Typist from "react-typist"
import { Hidden } from "@material-ui/core"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar"
import InfoIcon from "@material-ui/icons/Info"
import AppsIcon from "@material-ui/icons/Apps"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  homeIcon: {
    color: "white",
    marginRight: "5px",
  },
  linksIcon: {
    color: "white",
    marginLeft: "10px",
  },
}))

const Header = () => {
  const classes = useStyles()

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
    {
      title: "Blog",
      url: "/blog",
      icon: <MenuBookIcon className={classes.linksIcon} />,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <PermContactCalendarIcon className={classes.linksIcon} />,
    },
    {
      title: "About",
      url: "/about",
      icon: <InfoIcon className={classes.linksIcon} />,
    },
  ]

  interface Props {
    title: string
    url: string
    icon: JSX.Element
  }

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <div className="container">
        <Hidden smDown>
          <AppsIcon className={classes.homeIcon} />
        </Hidden>
        <Typist cursor={{ show: false }}>
          <Link className="navbar-brand text-white" to="/">
            {data.site.siteMetadata.title}
          </Link>
        </Typist>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Hidden smDown>
                    <div>{item.icon}</div>
                  </Hidden>
                  <a className="nav-link text-white" href={item.url}>
                    {item.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
