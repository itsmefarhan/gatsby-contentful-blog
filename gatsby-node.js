const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // get path to template
  const blogTemplate = path.resolve("./src/templates/blog.tsx")
  // get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    // create new page
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
