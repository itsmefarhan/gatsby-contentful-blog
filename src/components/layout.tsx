import React, { Fragment, ReactNode, useEffect, useState } from "react"
import { Grid } from "@material-ui/core"
import Header from "./header"
import Footer from "./footer"
import Loader from "../components/loader"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, 1000)
  }, [])

  return render ? (
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
  ) : (
    <Loader />
  )
}

export default Layout
