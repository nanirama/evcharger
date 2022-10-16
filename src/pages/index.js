import * as React from "react"

import Layout from "../components/layout"
//import Seo from "../components/seo"

import HeroSection from "../components/Home/HeroSection"
import FeaturedProducts from "../components/Home/FeaturedProducts"
import HomeTableData from "../components/Home/HomeTableData"
import Categoriessection from "../components/Home/CategoriesSection"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <FeaturedProducts />
    <HomeTableData />
    <Categoriessection />
  </Layout>
)

export default IndexPage