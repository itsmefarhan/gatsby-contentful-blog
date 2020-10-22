import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Paper, Typography, Button, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Fade } from "react-awesome-reveal"
import Helmet from "../components/head"
import Layout from "../components/layout"
import { AuthContext } from "../context/AuthContext"

const useStyles = makeStyles(() => ({
  paper: {
    padding: "20px",
    marginTop: "20px",
  },
  excerpt: {
    marginTop: "40px",
    marginBottom: "20px",
  },
}))

const BlogPage = () => {
  const classes = useStyles()

  const { user } = useContext(AuthContext)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        nodes {
          title
          slug
          publishedAt(fromNow: true)
          excerpt
        }
      }
    }
  `)

  const { nodes } = data.allContentfulBlog

  interface Props {
    slug: string
    title: string
    publishedAt: string
    excerpt: string
  }

  const renderData = (data: Props) => (
    <Paper elevation={5} className={classes.paper}>
      <Typography variant="h5" style={{ color: "#4d4848" }}>
        {data.title}
      </Typography>
      <Typography variant="caption">{data.publishedAt}</Typography>
      <Divider />
      <Typography variant="body1" className={classes.excerpt}>
        {data.excerpt}
      </Typography>
      <div style={{ marginBottom: "30px", marginTop: "10px" }}>
        <Link to={`/blog/${data.slug}`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{ background: "#5bc0de", color: "white" }}
          >
            Read More
          </Button>
        </Link>
      </div>
    </Paper>
  )

  return (
    <Layout>
      <Helmet title="Blog" />

      {!user &&
        nodes.slice(0, 3).map((node: Props, i: number) => {
          return (
            <Fade key={i} direction={`${i % 2 === 0 ? "top" : "bottom"}`}>
              {renderData(node)}
            </Fade>
          )
        })}

      {user &&
        nodes.map((node: Props, i: number) => {
          return (
            <Fade key={i} direction={`${i % 2 === 0 ? "top" : "bottom"}`}>
              {renderData(node)}
            </Fade>
          )
        })}
    </Layout>
  )
}

export default BlogPage
