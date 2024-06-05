import React from "react";
import { useState } from "react";
import Calltoaction from "./Calltoaction";



 function Morelegalservices() {

  const [activeTab, setActiveTab] = useState('income-and-sales-tax-services');

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
              More Legal Services
            </h1>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="container"  >
          <div className="section-header mb-5 mt-5 text-center" data-aos="fade-up" data-aos-offset="200">
            <h2>Explore More</h2>
            <h3>Our Other Legal Services</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#dispute-resolution">
              <div className="service-item" >
                <img src="img/icon-1.png" alt="business" />
                <h3>Dispute Resolution</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-12  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#court-marriage">
              <div className="service-item" >
                <img src="img/icon-2.png" alt="project-management" />
                <h3>Court Marriage</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-12  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#judicial-divorce">
              <div className="service-item" >
                <img src="img/icon-3.png" alt="market-research" />
                <h3>Judicial Divorce/ Khula</h3>
              </div>
            </a>
            </div>
            </div>
            <div className="row mt-4">
            <div className="col-lg-4 col-md-4 col-12  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#business-registration-services">
              <div className="service-item" >
                <img src="img/icon-4.png" alt="hr" />
                <h3>Business Registration Services</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-12  practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#chamber-of-commerce-registration">
              <div className="service-item" >
                <img src="img/icon-5.png" alt="online-business" />
                <h3>Chamber Of Commerce Registration</h3>
              </div>
            </a>
            </div>
            <div className="col-lg-4 col-md-4 col-12 practice-areas" data-aos="fade-up" data-aos-offset="200">
            <a href="#trademark-registration-services">
              <div className="service-item" >
                <img src="img/icon-6.png" alt="capital" />
                <h3>Trademark Registration Services</h3>
              </div>
            </a>
            </div>
            </div>
          
        </div>
      </div>

      {/* Taxation Law Details */}

      <section className="tax-details" id="dispute-resolution" style={{scrollMarginTop: "65px"}}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="section-header mb-4" data-aos="fade-up" data-aos-offset="200">
              <h2>Explore Our</h2>
              <h3 className="">Expert Dispute Resolution Services</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
               Our Dispute Resolution services are tailored to provide efficient and effective solutions for a wide range of legal conflicts. With a team of skilled attorneys specializing in arbitration, mediation, and litigation, we strive to navigate our clients through the complexities of legal disputes. Whether resolving commercial disagreements, employment disputes, or civil conflicts, our commitment to delivering personalized and strategic counsel ensures a comprehensive approach to dispute resolution.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Our firm is dedicated to fostering amicable resolutions whenever possible, utilizing alternative dispute resolution methods to save time and resources. However, when litigation becomes inevitable, our experienced advocates diligently represent our clients' interests in court. Sheikh Law Company stands as a beacon of trust and proficiency in resolving disputes, offering clients a path to resolution that aligns with their unique needs and objectives.
              </p>
              
            
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="dispute-resolution.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* Taxation Law Details Ends */}



      {/* Civil Law Starts */}


      <section className="tax-details" id="court-marriage" style={{scrollMarginTop: "65px",backgroundColor: "#f5f5f5", backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row reverse-order mb-5 mt-4 d-flex align-items-center">
        <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="court-marriage.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="section-header mb-4 mt-5" data-aos="fade-up" data-aos-offset="200">
              <h2>Court Marriage Legal Assistance</h2>
              <h3 className="">Legal Unions Redefined</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Embark on the journey of matrimony with confidence as Sheikh Law Company redefines the experience of court marriages. Our legal assistance is more than a service; it's a personalized voyage through the legal intricacies, where we meticulously navigate the path to your union. From the intricacies of documentation to liaising with authorities, our adept team ensures a smooth and memorable transition to marital bliss.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              At Sheikh Law Company, we don't just facilitate court marriages; we curate an experience that blends legal expertise with a touch of celebration. Your journey to a legally recognized union begins with us, where every detail is handled with precision, allowing you to focus on the joyous moments of your special day.
              </p>
            
          </div> 
        </div>
      </div>
  </section>

      {/* Civil Law Ends */}


      {/* Insurance Law Starts */}

      <section className="tax-details" id="judicial-divorce" style={{scrollMarginTop: "65px",backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
            <div className="section-header mb-4" data-aos="fade-up" data-aos-offset="200">
              <h2>Seek Expertise To Handle</h2>
              <h3 className="">Judicial Divorce Or Khula Matters</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Sheikh Law specializes in providing compassionate assistance throughout Khula proceedings, ensuring a dignified resolution tailored to individual circumstances. Our experienced legal team navigates clients through the complexities of judicial divorce, emphasizing empathy and understanding.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              We are dedicated to empowering individuals seeking Khula by offering comprehensive legal support, from initiating proceedings to courtroom representation. Our approach blends legal expertise with a human touch, recognizing the emotional challenges of divorce. With Sheikh Law, clients confidently navigate judicial divorce or Khula, securing a resolution that upholds their rights and preserves their dignity.
              </p>
          </div> 
          <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="judicial-divorce.webp" className="img-fluid" alt="tax-law" />
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
              <h2>Looking For More?</h2>
              <h3 className=""> Our Law Firm Got You Covered Everywhere!</h3>
              </div>
<div class="row">
  <div class="col-md-4 jutify-content-center align-items-center" data-aos="fade-up" data-aos-offset="200">
         

    <div
      class="nav flex-column nav-pills text-start"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        className={`nav-link  mb-2 ${activeTab === 'income-and-sales-tax-services' ? 'active' : ''}`}
        id="income-and-sales-tax-services-tab"
        data-mdb-toggle="pill"
        href="#income-and-sales-tax-services"
        role="tab"
        onClick={() => handleTabChange('income-and-sales-tax-services')}
        aria-controls="income-and-sales-tax-services"
        aria-selected={activeTab === 'income-and-sales-tax-services'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'income-and-sales-tax-services'?  '#012a49' : 'White' }}
        ><span className="mt-3">Income And Sales Tax Services</span></a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'tax-litigation' ? 'active' : ''}`}
        id="tax-litigation-tab"
        data-mdb-toggle="pill"
        href="#tax-litigation"
        role="tab"
        onClick={() => handleTabChange('tax-litigation')}
        aria-controls="tax-litigation"
        aria-selected={activeTab === 'tax-litigation'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'tax-litigation'?  '#012a49' : 'White' }}
        >Tax Litigation</a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'income-tax-appeal' ? 'active' : ''}`}
        id="income-tax-appeal-tab"
        data-mdb-toggle="pill"
        href="#income-tax-appeal"
        role="tab"
        onClick={() => handleTabChange('income-tax-appeal')}
        aria-controls="income-tax-appeal"
        aria-selected={activeTab === 'income-tax-appeal'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'income-tax-appeal'?  '#012a49' : 'White' }}
        >Income Tax Appeal</a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'sales-tax-on-services' ? 'active' : ''}`}
        id="sales-tax-on-services-tab"
        data-mdb-toggle="pill"
        href="#sales-tax-on-services"
        role="tab"
        onClick={() => handleTabChange('sales-tax-on-services')}
        aria-controls="corporate-matters"
        aria-selected={activeTab === 'sales-tax-on-services'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'sales-tax-on-services'?  '#012a49' : 'White' }}
        >Sales Tax On Services</a
      >
      <a
        className={`nav-link mb-2 ${activeTab === 'visa-file-application' ? 'active' : ''}`}
        id="visa-file-application-tab"
        data-mdb-toggle="pill"
        href="#visa-file-application"
        role="tab"
        onClick={() => handleTabChange('visa-file-application')}
        aria-controls="visa-file-application"
        aria-selected={activeTab === 'visa-file-application'}
        style={{fontWeight: "bold",height: "60px", backgroundColor: activeTab === 'visa-file-application'?  '#012a49' : 'White' }}
        >Visa File Application</a
      >
      
    </div>
    
  </div>

  <div class="col-md-8 tab-detail" data-aos="fade-up" data-aos-offset="200">
   


    <div class="tab-content" id="v-pills-tabContent">
      <div
        className={`tab-pane fade show ${activeTab === 'income-and-sales-tax-services' ? 'active' : ''}`}
        id="income-and-sales-tax-services"
        role="tabpanel"
        aria-labelledby="income-and-sales-tax-services-tab"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Navigating taxation intricacies is crucial for financial success, and Sheikh Law excels in comprehensive Income Tax Services. Our experienced tax professionals optimize financial strategies, ensuring compliance and maximizing returns. From planning to accurate filing, Sheikh Law is a trusted partner committed to securing clients' financial well-being.</p>

        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">In the commerce realm, Sales Tax compliance is pivotal, and Sheikh Law offers expert services to streamline this process. Leveraging tax regulations knowledge, our team guides businesses from registration to return filing. With a focus on precision and efficiency, Sheikh Law ensures businesses meet tax obligations and leverage strategic insights for financial efficiency and compliance. </p>
      </div>
      <div
        className={`tab-pane fade show ${activeTab === 'tax-litigation' ? 'active' : ''}`}
        id="tax-litigation"
        role="tabpanel"
        aria-labelledby="tax-litigation-tab"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Tax disputes can pose significant challenges, and Sheikh Law specializes in providing adept Tax Litigation Services to navigate these complexities. Our experienced legal team is well-versed in tax laws, offering strategic representation and advocacy for individuals and businesses facing tax-related conflicts. From negotiations with tax authorities to representing clients in court, Sheikh Law is committed to resolving tax disputes efficiently and ensuring our clients' interests are safeguarded. </p>
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law's Tax Litigation Services encompass a comprehensive approach to address diverse tax issues. Whether it's contesting tax assessments, handling audits, or appealing adverse decisions, our legal experts employ their expertise to navigate the intricacies of tax litigation. With a focus on minimizing liabilities and securing favorable outcomes, Sheikh Law stands as a reliable partner for clients seeking effective resolution in the realm of tax disputes. </p>
      </div>
      <div
        className={`tab-pane fade show ${activeTab === 'income-tax-appeal' ? 'active' : ''}`}
        id="income-tax-appeal"
        role="tabpanel"
        aria-labelledby="income-tax-appeal-tab"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Appealing income tax decisions demands a meticulous approach, and Sheikh Law excels in delivering specialized Income Tax Appeal Legal Services. Our seasoned legal team, well-versed in tax intricacies, provides strategic representation for individuals and businesses seeking to challenge unfavorable income tax rulings. From in-depth case analysis to crafting persuasive arguments, Sheikh Law is dedicated to navigating the appeal process, aiming for favorable outcomes tailored to our clients' needs. </p>
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">our Income Tax Appeal Legal Services encompass a comprehensive strategy, assisting clients throughout the entire appeals journey. Whether disputing tax assessments, addressing conflicts, or presenting compelling cases before appellate authorities, our legal experts leverage their proficiency to craft effective appeals.</p>
      </div>

      <div
        className={`tab-pane fade show ${activeTab === 'sales-tax-on-services' ? 'active' : ''}`}
        id="sales-tax-on-services"
        role="tabpanel"
        aria-labelledby="sales-tax-on-services"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sailing through the intricacies of sales tax on services demands precise expertise, and Sheikh Law stands at the forefront in delivering specialized guidance. Our adept team, well-versed in sales tax regulations, provides strategic assistance to businesses, ensuring seamless compliance with service-related tax obligations. From meticulous assessments of taxable transactions to devising effective compliance strategies, Sheikh Law is committed to empowering businesses to navigate the nuanced landscape of sales tax on services. </p>
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law's proficiency in Sales Tax on Services includes holistic support. From deciphering tax liabilities to tackling compliance hurdles, our experts deliver tailored solutions for businesses navigating the nuanced landscape of sales tax on services.</p>
      </div>

      <div
        className={`tab-pane fade show ${activeTab === 'visa-file-application' ? 'active' : ''}`}
        id="visa-file-application"
        role="tabpanel"
        aria-labelledby="visa-file-application"
      >
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law takes pride in offering streamlined Visa File Application services, simplifying the complex process of visa applications. Our dedicated team of experts ensures meticulous preparation of visa files, adhering to all requirements and regulations. With a commitment to efficiency and accuracy, Sheikh Law provides comprehensive support, guiding individuals through the intricacies of the visa application process and increasing the likelihood of a successful outcome. </p>
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Our dedicated experts meticulously prepare visa files, ensuring strict adherence to all requirements. With a focus on efficiency and precision, Sheikh Law guides individuals through the intricacies of visa applications, maximizing the chances of a successful outcome. </p>
      </div>

   
    </div>

  </div>
</div>
</div>
</section>

{/* Tabs services Ends */}

{/* Legal Agreements & Drafts */}


<section className="tax-details mt-4" id="business-registration-services" style={{scrollMarginTop: "65px", backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row d-flex align-items-center">
        <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="business-registration.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header mt-4 mb-4" data-aos="fade-up" data-aos-offset="200">
              <h2>Sheikh Law's Expert</h2>
              <h3 className="">Business Registration Services</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Sheikh Law stands as a beacon for seamless and professional Business Registration Services. Our team, well-versed in the intricacies of corporate compliance, navigates the complexities of business formation with precision and expertise. We offer a comprehensive suite of services, streamlining the registration process and empowering entrepreneurs to establish their ventures with confidence.
              </p>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Our Business Registration Services are tailored to meet individual needs, ensuring that each entity adheres to legal requirements and operates with a solid legal foundation. From initial consultations to document preparation and submission, our dedicated professionals guide clients through every step, fostering a business environment where compliance meets innovation. 
              </p>
            
          </div> 
        </div>
      </div>
  </section>
{/* Legal Agreements end */}


{/* Family Law starts */}

<section className="family-law-services mt-4" id="chamber-of-commerce-registration" style={{ scrollMarginTop: "65px",backgroundColor: "#f5f5f5"}}>
  <div className="container ">
  
    <div className="row d-flex align-items-center">
      <div className="col-md-12"> 
      <div className="section-header mt-4 mb-4 text-center" data-aos="fade-up" data-aos-offset="200">
              <h2>Explore Our Services For</h2>
              <h3 className="">Chamber Of Commerce Registration</h3>
              </div>
              </div>
   
      <div className="col-md-4" data-aos="fade-up" data-aos-offset="200">
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law Company excels in providing In the realm of commerce, Sheikh Law offers seamless Chamber of Commerce Registration Services, guiding clients through the intricacies efficiently. Our adept team specializes in swift compliance, fostering strong business connections and empowering enterprises to thrive.</p>
      </div>
      <div className="col-md-4 family-law-img" data-aos="fade-up" data-aos-offset="200">
        <img src="gcci-registration.webp" className="img-fluid mb-4" alt="family-law" />
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-offset="200">
        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">Sheikh Law's Chamber of Commerce Registration Services go beyond registration, emphasizing strategic guidance. From document preparation to formalities, our experts prioritize efficiency, enabling businesses to access exclusive opportunities actively. With Sheikh Law, registration becomes a streamlined process, fostering an environment where businesses flourish. </p>
      </div>
    </div>
  </div>
</section>

{/* Family law Ends */}

{/* Real Estate Law */}


<section className="tax-details mt-4 mb-4" id="trademark-registration-services" style={{scrollMarginTop: "65px", backgroundImage: `url({""})`}}>
      <div className="container">
        <div className="row d-flex align-items-center">
        <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-offset="200">
            <div className="taxation-img">
              <img src="trademark-registration.webp" className="img-fluid" alt="tax-law" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header mt-3" data-aos="fade-up" data-aos-offset="200">
              <h2>Explore Our</h2>
              <h3 className="">Trademark Registration Services</h3>
              </div>
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              Sheikh Law excels in providing seamless Trademark Registration Services. Our specialized team navigates the complexities of trademark registration with precision, ensuring that our clients' unique brands receive the legal protection they deserve. From initial consultations to thorough trademark searches and the submission of applications, Sheikh Law is dedicated to safeguarding the distinct identity of businesses.
              </p>
              <br />
              <p style={{ textAlign: "justify" }} data-aos="fade-up" data-aos-offset="200">
              We offer strategic counsel to optimize the registration process, guiding clients on class selection and comprehensive brand protection. With our commitment to excellence, businesses can trust Sheikh Law to secure their trademarks effectively, providing a legal foundation for brand recognition and longevity in the market.
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

export default Morelegalservices;
