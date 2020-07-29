import React, { Fragment, ReactNode } from "react"
import { Grid } from "@material-ui/core"
import Header from "./header"
import Footer from "./footer"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <Grid container style={{ marginTop: "100px" }}>
        <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={6}>
          {children}
        </Grid>
        <Grid item xs={12} sm={3} />
      </Grid>
      <Footer />
    </Fragment>
  )
}

export default Layout
