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
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <Grid container style={{ paddingBottom:'50px' }}>
        <Grid item xs={1} sm={3} />
        <Grid item xs={10} sm={6}>
          {children}
        </Grid>
        <Grid item xs={1} sm={3} />
      </Grid>
      <Footer />
    </div>
  ) : (
    <Loader />
  )
}

export default Layout
