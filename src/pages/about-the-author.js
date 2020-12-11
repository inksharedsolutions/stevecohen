import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/non-front-banner';

import AuthorImg from '../static/author/dummy-profile.jpg';
import AuthorLJA from '../static/author/LJAltman.png';

const Author = (props) => (
	<Layout>
		<Helmet title="Authors | S. M. Cohen and L. J. Altman" />
		<Nav pathExt={props.path} />
		<Banner spanFirst={``} contextHeading={`Authors`} />
		<div className="container">
			<section className="body-author-contents columns">
				{/* <div className="heading-quote column">
              <div className="author-image-container">
                  <img src={AuthorImg} alt="author-profile"/>
              </div>

              <div className="heading-quote">
                  <h4>
                    asdfsadfsdf
                  </h4>
                  <span className="ata-span-fx">
                  </span>
              </div>

          </div> */}

				<article className="article-section column" id="author">
					<div className="author-image-container">
						<img src={AuthorLJA} alt="Lawrence J. Altman profile" />
					</div>
					<p>
						Lawrence J. Altman is an adjunct professor at Avila University in Kansas City, Missouri. Until
						he retired in January of 2016, Mr. Altman was the Special Education Lead Attorney and Compliance
						Officer for Kansas City Public Schools and the Title IX Coordinator for the Kansas City School
						District. Prior to that position, he was a practicing attorney in St. Louis County for 34 years.
						In addition to membership in the Missouri Bar, he is a member of the Kansas City Bar Association
						and the National School Board Association’s Counsel of School Attorneys. What’s more, he is a
						distinguished member of the American Law Society. In April of 2019, Mr. Altman was recognized as
						a Pinnacle Top Professor of 2019 for his work as Adjunct Professor with Avila University.
					</p>
					<p>
						Two of Mr. Altman’s areas of focus and expertise throughout his career have been assistance for
						children with special needs who qualified for services under the federal Individuals with
						Disabilities Act and those needing accommodations under Section 504. In 2015, the National
						School Board Association appointed him to serve on the in-house school counsel committee of the
						Council of School Attorneys Association. He was honored by the Annie Malone Children and Family
						Service Center in St. Louis as one of their Advocates of the Year.
					</p>
					<p>
						Children and clients are not the only ones to benefit from his services. He has worked to help
						others, as an active mentor in the Missouri Lawyers Assistance Program, where he was awarded the
						Warren Welliver Award for his efforts, compassion and concern regarding the emotional and mental
						health needs of those in the profession. In 2014, Mr. Altman was appointed by the Missouri Bar
						to serve as chairperson for its Joint Task Force on Lawyers Helping Lawyers and as the co-chair
						Missouri Lawyer’s Assistance Program. In 2015, the American Bar Association appointed him to
						serve on the Commission on Lawyer Assistance Program’s Senior Lawyer Committee.
					</p>
					<p>
						With over 39 presentations and 16 published articles regarding legal issues to his credit, Mr.
						Altman continues to write and present on current topics, including assistance and compliance
						with federal and state laws affecting educational venues. In the fall of 2016, his first book,
						“From Bullying to Sexual Violence” that he co-authored was published.
					</p>
					<p>
						Mr. Altman served on the Missouri Department of Elementary and Secondary Education’s Legislative
						Workgroup for the Prevention of Student Bullying and Suicide, as chair for the committee tasked
						with developing model policies to prevent student bullying.
					</p>

					<p>
						<span className="author-name">
							<span className="author-span-ft">Author | Writer </span>
							<span className="ata-name">Lawrence J. Altman</span>
						</span>
					</p>
				</article>

				<article className="article-section column" id="author">
					<div className="author-image-container">
						<img src={AuthorImg} alt="author-profile" />
					</div>
					<p>
						Steve M. Cohen, Ed.D., is President and the managing partner of the Labor Management Advisory
						Group and HR Solutions: On Call located in the Kansas City Metro area. Dr. Cohen has his
						Doctorate in Educational and Industrial Psychology, his Masters in Public Administration, and
						his Bachelors in Speech communications and human relations. He also went to DePaul University
						Law School’s Alternative Dispute Resolution (ADR) Program where he became a certified mediator.
					</p>
					<p>
						He has a Certificate in Health Care Labor Relations from the Wharton School of Business,
						University of Pennsylvania. He has 15 years experience as a hospital administrator, nursing home
						administrator, physician clinic practices, and retirement center CEO and an additional 35 years
						experience as a management consultant. His consultancy consists of working with for profit
						organizations and not for profit agencies.
					</p>
					<p>
						Steve manages difficult personnel situations like conducting examinations of allegations of
						misbehavior such as mismanagement or sexual harassment matters, terminations, and employee /
						employer conflicts. He also manages &amp; mediates partner to partner conflicts as well as
						family dynamics within the business setting.
					</p>
					<p>
						Additionally he works in turn around, interim, and startup business situations. He conducts
						management training, sets up human resources systems like crisis plans, job descriptions,
						performance appraisals, policy manuals, and conducting wage &amp; salary surveys and setting up
						compensation plans. He provides litigation support and acts as an expert witness. He has
						published three books entitled: Mess Management: Lessons from a Corporate Hitman, Ministry Mess
						Management: Solving Leadership Failures and From Bullying to Sexual Violence: Protecting
						Students While at School.
					</p>
					<p>
						The first book is for business owners and managers providing insights into dealing with
						personnel messes as well as their regulatory and legal requirements. The second is for those who
						lead ministry organizations. The third is for educators. Steve has been married to Helene Ann
						for 45 years and has three grown children and four grandchildren.
					</p>

					<p>
						<span className="author-name">
							<span className="author-span-ft">Author | Writer </span>
							<span className="ata-name">Steve M. Cohen Ed.D</span>
						</span>
					</p>
				</article>
			</section>
		</div>
	</Layout>
);

export default Author;
