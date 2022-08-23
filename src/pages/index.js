import * as React from "react";
import { Link, graphql } from "gatsby";
// import { useEffect } from "react";
// import Img from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import LocomotiveScroll from 'locomotive-scroll';
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

// import Bio from "../components/bio"
// import Layout from "../components/layout"
import Seo from "../components/seo";
import Intro from "../components/intro";
import Outro from "../components/outro";
import Footer from "../components/footer";
import Scroll from "../components/locomotiveScroll";

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes;


  return (
    <>
      <Scroll callbacks={location} />
      <div className="testing">
        {/* <Layout location={location} title={siteTitle}> */}
        {/* <Bio /> */}
        <Intro />
        <div className="wiwi">
          <div className="max90">
            <h3
              data-scroll
              data-scroll-class="scroll-class"
              className="project-title font animate"
            >
              Projects
            </h3>
          </div>
        </div>

        <ol className="project-container" style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const thumb = getImage(post.frontmatter.thumb);
            // console.log("Test got",thumb)
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li className="general project" key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <section className="project-heading-holder font2">
                    <Link to={post.fields.slug} itemProp="url">
                      <h2>
                        <span itemProp="headline">{title}</span>
                      </h2>
                      {/* <small>{post.frontmatter.date}</small> */}

                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </Link>
                  </section>

                  <section>
                  <Link to={post.fields.slug} itemProp="url">
                    <GatsbyImage
                      className="thumb"
                      image={thumb}
                      alt="thumbnail"
                    ></GatsbyImage>
                    </Link>
                    {/* <Img fluid={post.frontmatter.thumb.childImageSharp.fluid}/> */}
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
        <Outro />
        {/* </Layout> */}
        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="George Kolev" />;

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
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
