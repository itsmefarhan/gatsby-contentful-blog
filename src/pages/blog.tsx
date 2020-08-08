import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Paper, Typography, Button, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Fade } from "react-awesome-reveal"
import Helmet from "../components/head"
import Layout from "../components/layout"

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

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            excerpt {
              childMarkdownRemark {
                excerpt(pruneLength: 100)
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost

  interface Props {
    node: {
      slug: string
      title: string
      publishedDate: string
      excerpt: {
        childMarkdownRemark: {
          excerpt: string
        }
      }
    }
  }

  return (
    <Layout>
      <Helmet title="Blog" />

      {edges.map((edge: Props, i: number) => {
        const { slug, title, publishedDate, excerpt } = edge.node

        return (
          <Fade key={i} direction={`${i % 2 === 0 ? "top" : "bottom"}`}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h5" style={{ color: "#4d4848" }}>
                {title}
              </Typography>
              <Typography variant="caption">{publishedDate}</Typography>
              <Divider />
              <Typography variant="body1" className={classes.excerpt}>
                {excerpt.childMarkdownRemark.excerpt}
              </Typography>
              <div style={{ marginBottom: "30px", marginTop: "10px" }}>
                <Link to={`/blog/${slug}`} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{ background: "#5bc0de", color: "white" }}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </Paper>
          </Fade>
        )
      })}
    </Layout>
  )
}

export default BlogPage
