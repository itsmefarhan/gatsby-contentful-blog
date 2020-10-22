import React, { useContext } from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import Typist from "react-typist"
import { Hidden } from "@material-ui/core"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar"
import InfoIcon from "@material-ui/icons/Info"
import AppsIcon from "@material-ui/icons/Apps"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import HowToRegIcon from '@material-ui/icons/HowToReg';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { makeStyles } from "@material-ui/core/styles"
import firebase from "../context/firebaseConfig"
import { AuthContext } from "../context/AuthContext"

const useStyles = makeStyles(() => ({
  homeIcon: {
    color: "white",
    marginRight: "5px",
  },
  linksIcon: {
    color: "white",
    marginLeft: "10px",
  },
  navItem: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
}))

const Header = () => {
  const classes = useStyles()

  const { user } = useContext(AuthContext)
  console.log(user)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleSignout = async () => {
    await firebase.auth().signOut()
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-md sticky navbar-dark bg-dark">
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
            <li className="nav-item">
              <div className={classes.navItem}>
                <Hidden smDown>
                  <MenuBookIcon className={classes.linksIcon} />
                </Hidden>
                <a className="nav-link text-white" href="/blog">
                  Blog
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className={classes.navItem}>
                <Hidden smDown>
                  <PermContactCalendarIcon className={classes.linksIcon} />
                </Hidden>
                <a className="nav-link text-white" href="/contact">
                  Contact
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className={classes.navItem}>
                <Hidden smDown>
                  <InfoIcon className={classes.linksIcon} />
                </Hidden>
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </div>
            </li>
            {!user ? (
              <>
                <li className="nav-item">
                  <div className={classes.navItem}>
                    <Hidden smDown>
                      <HowToRegIcon className={classes.linksIcon} />
                    </Hidden>
                    <a className="nav-link text-white" href="/signup">
                      Register
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className={classes.navItem}>
                    <Hidden smDown>
                      <MeetingRoomIcon className={classes.linksIcon} />
                    </Hidden>
                    <a className="nav-link text-white" href="/login">
                      Login
                    </a>
                  </div>
                </li>
              </>
            ) : (
              <li className="nav-item" onClick={handleSignout}>
                <div className={classes.navItem}>
                  <Hidden smDown>
                    <ExitToAppIcon className={classes.linksIcon} />
                  </Hidden>
                  <a className="nav-link text-white" href="#">
                    Logout
                  </a>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
