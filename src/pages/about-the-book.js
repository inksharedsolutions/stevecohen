import React from "react"
import { Helmet } from "react-helmet"
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/book-min.png'

import Layout from "../components/layout"
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'

const Book = (props) => {

  const slug = (props.location.href);

  const disqusConfig = {
      shortname: 's-m-cohen-and-l-j-altman',
      config: { identifier: 12, slug }
  }

  return(
    <Layout>
      <Helmet title="About the Book | S. M. Cohen and L. J. Altman"/>
      <Nav pathExt={props.path}/>
        <Banner 
            spanFirst={`About the`} 
            contextHeading={`Book`}/>
      <main className="wrapperMain">
          <div
              className="container"
              id="book-containers" >

              <BookInfo
                  data={{
                      title: `From Bullying to Sexual Violence`,
                      spanFirst: `Protecting your children while at school.`,
                      imgSrc: Book1,
                      id: 'bullying',
                      content:
                          `
                              <p>
                              If you have a student who has been victimized while at school, you will need the information in this book to hold administrator's "feet to the fire" to provide protection for your son or daughter.
                              </p>

                              <p>
                              Unfortunately, many administrators cannot be counted upon to do what is right in a situation where your child has been victimized. They are often well intentioned but sadly we have seen over and over that they either don't know what to do or won't do what is needed to do when confronted with the victimized student.
                              </p>

                              <p>
                              That is where YOU, as parents come in. You are going to have to stand up for your kids and demand that the school's administration do what is right and what is actually required of the school. You can't count on the Federal Department of Education or its Office of Civil Rights (its enforcement arm) to hold school administrator's accountable. The Courts will do their job but the Dept of Education is nothing but a paper tiger, a joke really, as far as the School Administrator is concerned. You will have to put on your armor and go into battle on behalf of your son or daughter or grandkids. This book will provide some of the armor.
                              </p>
                                      
                          `,

                      ebooks: {
                          stratton: 'https://www.stratton-press.com/books/from-bullying-to-sexual-violence-protecting-your-children-while-at-school/',
                          barnes: 'https://www.barnesandnoble.com/w/from-bullying-to-sexual-violence-lawrence-j-altman-jd/1137164291?ean=9781648950643',
                          amazon: 'https://www.amazon.com/Bullying-Sexual-Violence-Protecting-Children-ebook/dp/B089TVPTD7/ref=sr_1_1?dchild=1&keywords=9781648950643&qid=1591741840&sr=8-1',
                      },
                      paperback: {
                          amazon: 'https://www.amazon.com/Bullying-Sexual-Violence-Protecting-Children/dp/1648950639/ref=sr_1_1?dchild=1&keywords=9781648950636&qid=1591984897&sr=8-1',
                          barnes: 'https://www.barnesandnoble.com/w/from-bullying-to-sexual-violence-lawrence-j-altman-jd/1137164291?ean=9781648950636',
                          booksamillion: 'https://www.booksamillion.com/p/From-Bullying-Sexual-Violence/Lawrence-J-Altman-Jd/9781648950636?id=8069575682921',
                      }
                  }}
              />

              <div className="commentSection" >
                  <div id="disqus_thread">
                      <DiscussionEmbed {...disqusConfig} />
                  </div>
              </div>
          </div>
      </main>
    </Layout>
  )
}

export default Book
