import * as React from "react"
import { Link, graphql } from "gatsby"
import { useRef, useEffect } from "react";
import Img from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image"

// import LocomotiveScroll from 'locomotive-scroll';
import '../../node_modules/locomotive-scroll/src/locomotive-scroll.scss';

// import Bio from "../components/bio"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Outro from "../components/outro"
import Footer from "../components/footer"

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  
  useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: ref.current,
        smooth: true,
        smoothMobile: false,
      })
    })
  }, [])

  const ref = useRef(null);

  return (
    <div className="scroll-container" data-scroll-container ref={ref}>
    {/* <Layout location={location} title={siteTitle}> */}
      {/* <Bio /> */}
      <Intro />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  {/* <StaticImage src={"https://placekitten.com/800/600"} /> */}
                  {/* <Img fluid={post.frontmatter.thumb.childImageSharp.fluid}/> */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <Outro />
    {/* </Layout> */}
    <Footer />
    </div>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumb {
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
