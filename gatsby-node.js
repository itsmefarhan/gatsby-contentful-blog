const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // get path to template
  const blogTemplate = path.resolve("./src/templates/blog.tsx")
  // get markdown data
  const res = await graphql(`
    query {
      allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `)

  res.data.allContentfulBlog.nodes.forEach(node => {
    // create new page
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
