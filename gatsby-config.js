require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN
} = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}



module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: 'EV Compared - Home EV Chargers & Installation Comparison',
    name: 'EV Compared',
    description: 'EV Compared',
    address: 'EV Compared',
    email: 'admin@evcompared.co.uk',
    phone: '01234567890',
    siteUrl: 'https://www.evcompared.co.uk',
    author:'@gatsby'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          webpOptions: {quality: 100}
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: CONTENTFUL_SPACE_ID
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        ignore: [
          '/slick-carousel',
          'src/styles/google-maps',
          '@reach/dialog/styles.css',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-0C5DYCG01Q',
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0C5DYCG01Q", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        }
      }
    },
  ],
}
