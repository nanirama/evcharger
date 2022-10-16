const _l = require('lodash');
const Promise = require('bluebird');
const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
   graphql(`
      query{
          allProducts : allContentfulProducts {
            edges {
              node {
                id
                slug
              }
            }
          }
          allCategories : allContentfulCategory(filter: {slug: {ne: null}}) {
              edges {
                node {
                  id
                  slug
                }
              }
            }
      }      
  `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      
    _l.each(result.data.allProducts.edges, (edge) => {
      createPage({
          path: `${edge.node.slug}`,
          component: path.resolve("./src/templates/product-template.js"),
          context: {
            id: edge.node.id
          },
      })
    })

    _l.each(result.data.allCategories.edges, (edge) => {
      createPage({
          path: `category/${edge.node.slug}`,
          component: path.resolve("./src/templates/category-template.js"),
          context: {
            id: edge.node.id
          },
      })
    })

    resolve();
  });
})
}
