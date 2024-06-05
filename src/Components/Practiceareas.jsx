import React from "react";
import { useState } from "react";
import Calltoaction from "./Calltoaction";



 function Practiceareas() {

  const [activeTab, setActiveTab] = useState('criminal-lawyer-gujranwala');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);}
  
  return (
    <div>
      <div
        className="background-image1"
        style={{ backgroundImage: `url(${"page-head.webp"})` }}
      >
        <div className="color-overlay1 d-flex align-items-center justify-content-center">
          <div >
            <h1
              className="head text-center text-white animate__animated animate__zoomIn"
              // style={{ fontSize: 60 }}
            >
              Our Practice Areas
            </h1>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="container" >
          <div className="section-header mb-5 mt-5 text-center" data-aos="fade-up" data-aos-offset="200">
            <h2>Our Areas Of Expertise</h2>
            <h3>Areas We Specialize In As A Law Firm</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#tax-law">
              <div className="service-item" >
                <img src="img/icon-1.png" alt="business" />
                <h3>Taxation Law Services</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-6  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#civil-law">
              <div className="service-item" >
                <img src="img/icon-2.png" alt="project-management" />
                <h3>Civil Law Services</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-12  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#insurance-law">
              <div className="service-item" >
                <img src="img/icon-3.png" alt="market-research" />
                <h3>Insurance Law Services</h3>
              </div>
            </a>
            </div>
            </div>
            <div className="row mt-4">
            <div className="col-lg-4 col-md-4 col-6  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#legal-agreements-and-drafts">
              <div className="service-item" >
                <img src="img/icon-4.png" alt="hr" />
                <h3>Legal Agreements</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-6  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#family-law">
              <div className="service-item" >
                <img src="img/icon-5.png" alt="online-business" />
                <h3>Family Law Services</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-12 practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#real-estate-law">
              <div className="service-item" >
                <img src="img/icon-6.png" alt="capital" />
                <h3>Real Estate Law Services</h3>
              </div>
            </a>
            </div>
            </div>
          
        </div>
      </div>

      {/* Taxation Law Details */}

      <section className="tax-details" id="tax-law" style={{scrollMarginTop: "65px"}}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="section-header mb-4" data-aos="fade-up" data-aos-offset="200">
              <h2>Our Legal Services For</h2>
              <h3 className="">Taxation Law</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
                Sheikh Law Company is your trusted partner for comprehensive
                legal services related to taxation. Our team of experienced tax
                attorneys is committed to providing expert guidance and support
                to individuals and businesses in navigating the complex
                landscape of tax law. Whether you're facing tax disputes,
                seeking tax planning strategies, or require assistance with
                compliance, Sheikh Law Company has the expertise to ensure you
                are in compliance with tax regulations and to optimize your tax
                position.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
                We are committed to helping you achieve your financial goals
                while remaining in compliance with all tax laws. Our dedicated
                team of tax attorneys is ready to provide you with the
                personalized legal support you need to navigate the complexities
                of taxation successfully.
              </p>
              <ul className="mt-3 text-start" style={{listStyle: "none", lineHeight: "35px"}}>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Skilled representation in disputes and audits.</li>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Tailored tax planning for minimum liability.</li>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Tax return preparation and filing.</li>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Trusted partner for tax legal needs.</li>
              </ul>
            
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="tax-law.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* Taxation Law Details Ends */}



      {/* Civil Law Starts */}


      <section className="tax-details" id="civil-law" style={{scrollMarginTop: "65px",backgroundColor: "#f5f5f5", backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row reverse-order mb-5 mt-4 d-flex align-items-center">
        <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="civil-law.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="section-header mb-4 mt-5" data-aos="fade-up" data-aos-offset="200">
              <h2>Our Legal Services For</h2>
              <h3 className="">Comprehensive Civil Law Representation</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Sheikh Law Company offers a wide range of legal services in the field of Civil Law, designed to address the diverse needs of individuals, businesses, and organizations. Our dedicated team of experienced civil law attorneys is committed to providing comprehensive legal support to help clients navigate the intricacies of civil legal matters.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Our Civil Law services encompass a broad spectrum, ranging from contract disputes to personal injury claims, family law matters, and property disputes. Our seasoned team of attorneys is dedicated to offering expert guidance and skilled representation, ensuring your legal needs in the realm of Civil Law are met with excellence.
              </p>
            
          </div> 
        </div>
      </div>
  </section>

      {/* Civil Law Ends */}


      {/* Insurance Law Starts */}

      <section className="tax-details" id="insurance-law" style={{scrollMarginTop: "65px",backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="section-header mb-4" data-aos="fade-up" data-aos-offset="200">
              <h2>Explore Our</h2>
              <h3 className="">Expertise In Insurance Law Matters</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Navigating the intricate landscape of Insurance Law requires a dedicated legal partner, and Sheikh Law Company delivers. Our seasoned attorneys specialize in strategic advocacy for complex insurance matters, ensuring your interests are protected, whether dealing with coverage disputes, claims, or regulatory issues.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              We offer comprehensive solutions in Insurance Law. From policy analysis to representation in claims disputes, our attorneys leverage their expertise to navigate the nuances of the insurance legal landscape, committed to securing your coverage and providing the needed legal support.
              </p>
          </div> 
          <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="insurance-law.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
        </div>
      </div>
  </section>

      {/* Insurance Law Ends */}



      {/* Tabs Services */}

<section className="pills-tab-section mt-5 " style={{scrollMarginTop: "65px", backgroundColor: "#f5f5f5"}}>
  <div className="container pt-5 pb-2">
  <div className="section-header mb-4 text-start" data-aos="fade-up" data-aos-offset="200">
              <h2>Explore Our</h2>
              <h3 className="">Other Legal Services</h3>
              </div>
<div class="row">
  <div class="col-md-4 jutify-content-center align-items-center" data-aos="fade-up" data-aos-offset="200">
     {/* Tab navs */}
    <div
      class="nav flex-column nav-pills text-start"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        className={`nav-link  mb-2 ${activeTab === 'criminal-lawyer-gujranwala' ? 'active' : ''}`}
        id="criminal-lawyer-gujranwala-tab"
        data-mdb-toggle="pill"
        href="#criminal-lawyer-gujranwala"
        role="tab"
        onClick={() => handleTabChange('criminal-lawyer-gujranwala')}
        aria-controls="criminal-lawyer-gujranwala"
        aria-selected={activeTab === 'criminal-lawyer-gujranwala'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'criminal-lawyer-gujranwala'?  '#012a49' : 'White' }}
        ><span className="mt-3">Criminal Lawyer In Gujranwala</span></a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'civil-cases-and-litigation' ? 'active' : ''}`}
        id="civil-cases-and-litigation-tab"
        data-mdb-toggle="pill"
        href="#civil-cases-and-litigation"
        role="tab"
        onClick={() => handleTabChange('civil-cases-and-litigation')}
        aria-controls="civil-cases-and-litigation"
        aria-selected={activeTab === 'civil-cases-and-litigation'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'civil-cases-and-litigation'?  '#012a49' : 'White' }}
        >Civil Cases And Litigation</a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'corporate-matters' ? 'active' : ''}`}
        id="corporate-matters-tab"
        data-mdb-toggle="pill"
        href="#corporate-matters"
        role="tab"
        onClick={() => handleTabChange('corporate-matters')}
        aria-controls="corporate-matters"
        aria-selected={activeTab === 'corporate-matters'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'corporate-matters'?  '#012a49' : 'White' }}
        >Corporate Matters</a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'consumer-protection-lawyer' ? 'active' : ''}`}
        id="consumer-protection-lawyer-tab"
        data-mdb-toggle="pill"
        href="#consumer-protection-lawyer"
        role="tab"
        onClick={() => handleTabChange('consumer-protection-lawyer')}
        aria-controls="corporate-matters"
        aria-selected={activeTab === 'consumer-protection-lawyer'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'consumer-protection-lawyer'?  '#012a49' : 'White' }}
        >Consumer Protection Lawyer</a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'serving-legal-notice' ? 'active' : ''}`}
        id="serving-legal-notice-tab"
        data-mdb-toggle="pill"
        href="#serving-legal-notice"
        role="tab"
        onClick={() => handleTabChange('serving-legal-notice')}
        aria-controls="serving-legal-notice"
        aria-selected={activeTab === 'serving-legal-notice'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'serving-legal-notice'?  '#012a49' : 'White' }}
        >Serving Legal Notice</a
      >
      <a
        className={`nav-link mb-2  ${activeTab === 'law-of-inheritance' ? 'active' : ''}`}
        id="law-of-inheritance-tab"
        data-mdb-toggle="pill"
        href="#law-of-inheritance"
        role="tab"
        onClick={() => handleTabChange('law-of-inheritance')}
        aria-controls="law-of-inheritance"
        aria-selected={activeTab === 'law-of-inheritance'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'law-of-inheritance'?  '#012a49' : 'White' }}
        >Law Of Inheritance</a
      >
    </div>
    {/* <div className="col-md-1 border-start border-2" style={{color: "blue", width: "5px"}}></div> */}
     {/* Tab navs  */}
  </div>

  <div class="col-md-8 tab-detail" data-aos="fade-up" data-aos-offset="200">
     {/* Tab content */}
    <div class="tab-content" id="v-pills-tabContent">
      <div
        className={`tab-pane fade show ${activeTab === 'criminal-lawyer-gujranwala' ? 'active' : ''}`}
        id="criminal-lawyer-gujranwala"
        role="tabpanel"
        aria-labelledby="criminal-lawyer-gujranwala-tab"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">If you are looking for a criminal lawyer in gujranwala. Sheikh Law Company have best criminal lawyers in gujranwala. Who defend and plead, on behalf of clients. We appear before all the courts of the Pakistan. Moreover, we deal in all types of Criminal cases. Our criminal lawyer in Gujranwala has the skills to avoid convictions. Besides, achieve acquittals for clients in these criminal cases. In conclusion, we help our clients to navigate all difficulties of criminal proceedings, before the criminal courts, to create a successful outcome.</p>

        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Secondly, Sheikh Law Company team consists of experienced criminal  lawyers in Gujranwala. They are expert in criminal prosecutions and defense. In conclusion, team of Sheikh Law Company provides well-reasoned analysis on legal issues. Furthermore, our criminal lawyers in Gujranwala represent our clients in criminal trial. Above all, our services start from Lower Courts to the Supreme Court of Pakistan. </p>
      </div>
      <div
        className={`tab-pane fade show ${activeTab === 'civil-cases-and-litigation' ? 'active' : ''}`}
        id="civil-cases-and-litigation"
        role="tabpanel"
        aria-labelledby="civil-cases-and-litigation-tab"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law Company deals in all kinds of Civil Laws and litigation. Matters related but not limited to the disputes with special customization in the area.  Which includes, infrastructure Projects, Real Estate Disputes, and Property Matters. Moreover, sale, purchase, and rent of the property. Large projects based on construction leasing, transfer deeds, mutation, and power of attorney. We also deal in matters related to Nadra, Electricity, Petroleum, Sui Gas, and Water Supply Laws. Furthermore, we have expertise in Breach of Contract, Breach of Agreement and Electronic Media, etc. </p>
      </div>
      <div
        className={`tab-pane fade show ${activeTab === 'corporate-matters' ? 'active' : ''}`}
        id="corporate-matters"
        role="tabpanel"
        aria-labelledby="corporate-matters-tab"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law Company, professionals are experts in corporate matters. As well as, the formation of a company. We provide vital legal services as a corporate law firm in Gujranwala. Moreover, we deal in corporate matters and corporate law services. Such as company registration to company dissolution, tax planning & returns, patents, and trademarks. Furthermore, helping in banking, criminal, labor matters, civil disputes, and more. Our assorted corporate clients include major financial institutions. Therefore, this indicates our experience and credibility. </p>
      </div>

      <div
        className={`tab-pane fade show ${activeTab === 'consumer-protection-lawyer' ? 'active' : ''}`}
        id="consumer-protection-lawyer"
        role="tabpanel"
        aria-labelledby="consumer-protection-lawyer"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">If you are Cheated by manufacturers, shopkeeper, service provider, or a dealer. We help with consumer Protection Rights to  recover loss with damages. The Law Firm team consists of  experienced consumer protection lawyers . Moreover, we are expert in consumer courts cases. Finally, Our  consumer protection lawyer provides reasoned analysis on legal issues. </p>
      </div>

      <div
        className={`tab-pane fade show ${activeTab === 'serving-legal-notice' ? 'active' : ''}`}
        id="serving-legal-notice"
        role="tabpanel"
        aria-labelledby="serving-legal-notice"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">If someone is violating your legal rights or privileges in Pakistan. Moreover, any loss or damage is inflicted to you. Or you feel grieved due to a civil matter against you or your property. The first step would be to evaluate your legal rights violation. Options on serving a legal notice against persons, company, institution responsible for your loss. On your behalf, we can evaluate the situation and servelegal notice to such parties. We can even negotiate a possible settlement. Further more, You will consider our assistance highly valuable in recovering your losses and damage claims. </p>
      </div>

      <div
        className={`tab-pane fade show ${activeTab === 'law-of-inheritance' ? 'active' : ''}`}
        id="law-of-inheritance"
        role="tabpanel"
        aria-labelledby="law-of-inheritance"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">SUCCESSION ACT 1925 <br /><br />

<span style={{textDecoration: "underline"}} data-aos="fade-up" data-aos-offset="200">Laws of Inheritance in Islam Made Easy</span><br /><br />

<b data-aos="fade-up" data-aos-offset="200">“And you consume inheritance, devouring [it] altogether”</b><br />

 (Holy Quran 89: 19)<br /><br />

 <span style={{textDecoration: "underline"}} data-aos="fade-up" data-aos-offset="200">Introduction<br /><br /></span>

Inheritance is an integral part of Islamic Shariah Law and its application in Islamic society is a mandatory aspect of the Divine teachings of Islam.

That Muslims inherit from each other is proven from the Holy Quran:

“There is a share for men and a share for women from what is left by parents and those nearest related, whether, the property be small or large – a legal share.“ [An-Nisa 4:7] </p>
      </div>
    </div>
     {/* Tab content */}
  </div>
</div>
</div>
</section>

{/* Tabs services Ends */}

{/* Legal Agreements & Drafts */}


<section className="tax-details mt-4" id="legal-agreements-and-drafts" style={{scrollMarginTop: "65px", backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row d-flex align-items-center">
        <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="legal-agreements.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header mt-4 mb-4" data-aos="fade-up" data-aos-offset="200">
              <h2>Seek Trusted Legal Assistance For</h2>
              <h3 className="">Draftign Legal Agreements And Contracts</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Sheikh Law Company is your trusted partner in crafting precise and effective legal agreements and contracts. Our seasoned team of attorneys specializes in tailoring documents to meet the unique needs of our clients, ensuring clarity and protection of interests. Whether you require agreements for business partnerships, employment terms, or commercial transactions, our commitment to excellence shines through in every document we draft.
              </p>
              <ul className="mt-3 text-start" style={{listStyle: "none", lineHeight: "35px"}}>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Crafting agreements to meet specific client needs.</li>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Structuring contracts to minimize potential risks.</li>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Handling a spectrum of agreements, from simple contracts to complex legal documents.</li>
                <li data-aos="fade-up" data-aos-offset="200"><i className="fa fa-check tax-check"></i> Prioritizing accuracy to create robust and legally sound agreements.</li>
              </ul>
            
          </div> 
        </div>
      </div>
  </section>
{/* Legal Agreements end */}


{/* Family Law starts */}

<section className="family-law-services mt-4" id="family-law" style={{ scrollMarginTop: "65px",backgroundColor: "#f5f5f5"}}>
  <div className="container ">
  
    <div className="row d-flex align-items-center">
      <div className="col-md-12"> 
      <div className="section-header mt-4 mb-4 text-center" data-aos="fade-up" data-aos-offset="200">
              <h2>Legal Assistance For</h2>
              <h3 className="">Crafting Harmony In Family Legal Matters</h3>
              </div>
              </div>
   
      <div className="col-md-4" data-aos="fade-up" data-aos-offset="200">
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law Company excels in providing compassionate legal support for Family Law matters. Our expert attorneys specialize in divorce, child custody, spousal support, and domestic violence issues. With empathy and legal finesse, we navigate complexities to achieve fair resolutions tailored to each family's unique dynamics.</p>
      </div>
      <div className="col-md-4 family-law-img" data-aos="fade-up" data-aos-offset="200">
        <img src="family-law.webp" className="img-fluid mb-4" alt="family-law" />
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-offset="200">
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">In the realm of Family Law, Sheikh Law Company stands out for its commitment to achieving favorable outcomes while prioritizing the well-being of all parties involved. Our seasoned family law attorneys bring a delicate touch and legal expertise to navigate divorce proceedings, custody disputes, and other family-related legal matters. </p>
      </div>
    </div>
  </div>
</section>

{/* Family law Ends */}

{/* Real Estate Law */}


<section className="tax-details mt-4 mb-4" id="real-estate-law" style={{scrollMarginTop: "65px", backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row d-flex align-items-center">
        <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="real-estate-law.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header mt-3" data-aos="fade-up" data-aos-offset="200">
              <h2>We Are</h2>
              <h3 className="">Your Real Estate Legal Ally</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Sheikh Law Company excels in Real Estate Law, providing tailored guidance for property transactions. Our experienced attorneys specialize in property acquisitions, sales, leasing, and development. Whether you're an owner, developer, or investor, we ensure your real estate endeavors are legally sound and strategically aligned.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              In the realm of Real Estate Law, Sheikh Law Company is your trusted partner, offering expertise in contract negotiations and property dispute resolution. Our attorneys understand the dynamic nature of the real estate market, working diligently to protect your interests and provide a solid legal foundation for success in your property ventures.
              </p>
            
          </div> 
        </div>
      </div>
  </section>


{/* Real Estate Ends */}


<Calltoaction/>

</div>
  );
}

export default Practiceareas;
