import { W as ensure_array_like, x as pop, v as push } from './index-CSLrv6GN.js';
import { a as aboutData, p as path, t as teamData, s as serviceData } from './common-hxGttqce.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { T as Team, h as html } from './Team-zUXGT58b.js';

function About($$payload, $$props) {
  push();
  const each_array = ensure_array_like(aboutData.circleBars);
  const each_array_1 = ensure_array_like(aboutData.aboutList);
  $$payload.out += `<section class="about-section fix section-padding"><div class="container"><div class="about-wrapper"><div class="row"><div class="col-lg-6"><div class="about-image-items"><div class="border-shape"><img src="/img/about/border-shape.png" alt="shape-img"></div> <div class="about-image bg-cover wow fadeInLeft" data-wow-delay=".3s"${attr("style", `background-image: url('${aboutData.imgLarge}');`)}><div class="about-image-2 wow fadeInUp" data-wow-delay=".5s"><img${attr("src", `${aboutData.img}`)} alt="about-img"></div></div></div></div> <div class="col-lg-6 mt-5 mt-lg-0"><div class="about-content"><div class="section-title"><span class="wow fadeInUp">About Company</span> <h2 class="title-anim">${escape_html(aboutData.title)}</h2></div> <p class="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">${escape_html(aboutData.description)}</p> <div class="circle-progress-bar-wrapper"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let circleBar = each_array[$$index];
    $$payload.out += `<div class="single-circle-bar wow fadeInUp" data-wow-delay=".3s"><div class="circle-bar"${attr("data-percent", circleBar.percent)} data-duration="1000"></div> <div class="content"><h6 class="circle-bar-title">${escape_html(circleBar?.title)}</h6></div></div>`;
  }
  $$payload.out += `<!--]--></div> <ul class="about-list wow fadeInUp" data-wow-delay=".5s"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out += `<li><i class="far fa-check me-2"></i> ${escape_html(item)}</li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="about-author"><div class="about-button wow fadeInUp" data-wow-delay=".8s"><a${attr("href", path.about.base())} class="theme-btn"><span>Learn More Us <i class="fas fa-chevron-right"></i></span></a></div> <div class="author-image wow fadeInUp" data-wow-delay=".9s"><img${attr("src", teamData.ceoInfo.avatar)} alt="author-img"> <div class="content"><img src="/img/about/signature.png" alt="signature"> <p>${escape_html(teamData.ceoInfo.role)}</p></div></div></div></div></div></div></div></div></section>`;
  pop();
}
function Banner($$payload) {
  $$payload.out += `<div><div class="cta-banner-section bg-cover section-padding" style="background-image: url('/img/banner/01.jpg');"><div class="container"><div class="cta-banner-wrapper section-padding pt-0"><div class="video-box"><a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" class="video-buttton ripple video-popup"><i class="fas fa-play"></i></a></div></div></div></div> <section class="feature-icon-box-area bg-black"><div class="container"><div class="feature-icon-box-wrapper"><div class="row g-4"><div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s"><div class="icon-box-items"><div class="icon"><i class="flaticon-passport-5"></i></div> <div class="content"><h3>Visa Process</h3> <p>Sed perspiciatis undm nise este natus sit volutate</p></div></div></div> <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s"><div class="icon-box-items active"><div class="icon"><i class="flaticon-visa-2"></i></div> <div class="content"><h3>99% Visa Approvals</h3> <p>Sed perspiciatis undm nise este natus sit volutate</p></div></div></div> <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s"><div class="icon-box-items"><div class="icon"><i class="flaticon-immigration-law"></i></div> <div class="content"><h3>Immigration</h3> <p>Sed perspiciatis undm nise este natus sit volutate</p></div></div></div></div></div></div></section></div>`;
}
function Brand($$payload) {
  $$payload.out += `<div class="brand-section fix section-padding pt-0"><div class="container"><div class="brand-wrapper"><h6 class="text-center wow fadeInUp" data-wow-delay=".3s">1K+ BRANDS TRUST US</h6> <div class="brand-carousel-active"><div class="brand-image"><img src="/img/brand/01.png" alt="brand-img"></div> <div class="brand-image"><img src="/img/brand/01.png" alt="brand-img"></div> <div class="brand-image"><img src="/img/brand/01.png" alt="brand-img"></div> <div class="brand-image"><img src="/img/brand/01.png" alt="brand-img"></div> <div class="brand-image"><img src="/img/brand/01.png" alt="brand-img"></div> <div class="brand-image"><img src="/img/brand/01.png" alt="brand-img"></div> <div class="brand-image"><img src="/img/brand/01.png" alt="brand-img"></div></div></div></div></div>`;
}
function Certification($$payload) {
  $$payload.out += `<section class="coaching-section fix section-padding section-bg"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">Training &amp; Certification</span> <h2 class="title-anim">We Provide Special Care To Make <br> Easy Your Dream</h2></div> <div class="row"><div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s"><div class="coaching-card-items"><div class="coacing-image"><img src="/img/coaching/01.jpg" alt="img"></div> <div class="icon"><i class="flaticon-mortarboard"></i></div> <div class="content text-center"><h3><a href="coaching-details.html">IELTS Courses</a></h3> <p>Sit amet conse bestibulume
                                    ullamcorper nulla amet</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s"><div class="coaching-card-items"><div class="coacing-image"><img src="/img/coaching/02.jpg" alt="img"></div> <div class="icon"><i class="flaticon-graduated"></i></div> <div class="content text-center"><h3><a href="coaching-details.html">Citizenship Test</a></h3> <p>Sit amet conse bestibulume
                                    ullamcorper nulla amet</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s"><div class="coaching-card-items active"><div class="coacing-image"><img src="/img/coaching/03.jpg" alt="img"></div> <div class="icon"><i class="flaticon-plane-ticket"></i></div> <div class="content text-center"><h3><a href="coaching-details.html">TOFEL Coaching</a></h3> <p>Sit amet conse bestibulume
                                    ullamcorper nulla amet</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s"><div class="coaching-card-items"><div class="coacing-image"><img src="/img/coaching/04.jpg" alt="img"></div> <div class="icon"><i class="flaticon-airplane-2"></i></div> <div class="content text-center"><h3><a href="coaching-details.html">OET Coaching</a></h3> <p>Sit amet conse bestibulume
                                    ullamcorper nulla amet</p></div></div></div></div></div></section>`;
}
function Countries($$payload) {
  const countriest = [
    {
      name: "turkey",
      image: "/img/flag/turkey.png",
      link: ""
    },
    {
      name: "france",
      image: "/img/flag/france.png",
      link: ""
    },
    {
      name: "Australia",
      image: "/img/flag/aus.jpg",
      link: ""
    },
    {
      name: "United States",
      image: "/img/flag/us.png",
      link: ""
    },
    {
      name: "India",
      image: "/img/flag/india.png",
      link: ""
    },
    {
      name: "Dubai",
      image: "/img/flag/dubai.png",
      link: ""
    }
  ];
  const each_array = ensure_array_like(countriest);
  $$payload.out += `<section class="countries-section fix section-padding pt-0"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">Countries we offer</span> <h2 class="title-anim">Countries We Support <br> for Immigration.</h2></div> <div class="row"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let country = each_array[$$index];
    $$payload.out += `<div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s"><div class="countries-card-items"><div class="thumb"><img${attr("src", country.image)} alt="img"></div> <div class="content"><h3><a${attr("href", country.link)}>${escape_html(country.name)}</a></h3> <p>Average time to resolve a
                            cyber.</p></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function CtaMessage($$payload, $$props) {
  push();
  $$payload.out += `<section class="cta-chat-section section-padding pt-0"><div class="container"><div class="cta-chat-wrapper"><div class="chat-items wow fadeInUp" data-wow-delay=".3s"><div class="icon"><i class="flaticon-chat"></i></div> <div class="content"><h3>Let’s Discuss &amp; Start Visa Consultations</h3> <p>Lorem ipsum dolor sit amet, consectetur notted adipisicin</p></div></div> <a${attr("href", path.contact.base())} class="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s"><span>Lets Get Started <i class="fas fa-chevron-right"></i></span></a></div></div></section>`;
  pop();
}
function Hero($$payload, $$props) {
  push();
  $$payload.out += `<section class="hero-section hero-1"><div class="swiper-dot"><div class="dot"></div></div> <div class="swiper hero-slider"><div class="swiper-wrapper">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></section>`;
  pop();
}
function Process($$payload) {
  $$payload.out += `<section class="process-work-section fix section-padding pt-0"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">Working Process</span> <h2 class="title-anim">4 Step Follow You Can Get <br> Your Visa Easily</h2></div> <div class="process-work-wrapper"><div class="line-shape"><img src="/img/linepng.png" alt="img"></div> <div class="row"><div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s"><div class="work-process-items text-center"><div class="icon"><i class="flaticon-passport-5"></i> <h6 class="number">1</h6></div> <div class="content"><h4>Choose A Service</h4> <p>In a free hour, when our power of choice is untrammeled and</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s"><div class="work-process-items text-center"><div class="content style-2"><h4>Documents and Payments</h4> <p>In a free hour, when our power of choice is untrammeled and</p></div> <div class="icon"><i class="flaticon-money"></i> <h6 class="number">2</h6></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s"><div class="work-process-items text-center"><div class="icon"><i class="flaticon-customer-service"></i> <h6 class="number">3</h6></div> <div class="content"><h4>Request A Meeting</h4> <p>In a free hour, when our power of choice is untrammeled and</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s"><div class="work-process-items text-center"><div class="content style-2"><h4>Receive your Visa Now</h4> <p>In a free hour, when our power of choice is untrammeled and</p></div> <div class="icon"><i class="flaticon-visa"></i> <h6 class="number">4</h6></div></div></div></div></div></div></section>`;
}
function Service($$payload, $$props) {
  push();
  const each_array = ensure_array_like(serviceData.services);
  $$payload.out += `<section class="service-section fix section-padding pt-0"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">${escape_html(serviceData.title)}</span> <h2 class="title-anim">${html(serviceData.heading)}</h2></div></div> <div class="service-wrapper"><div class="row"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$payload.out += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s"><div class="service-card-items"><h3><a href="service-details.html">${escape_html(service.title)}</a></h3> <p>${escape_html(service.description)}</p> <div class="service-thumb"><img${attr("src", service.image)} alt="img"></div> <a${attr("href", service.link)} class="link-btn"><span>read more</span> <i class="fas fa-chevron-right"></i></a></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
  pop();
}
function Stat($$payload) {
  $$payload.out += `<section class="counter-section section-padding section-bg"><div class="container"><div class="counter-wrapper"><div class="row g-4"><div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-around"></i></div> <div class="content"><h2><span class="count">35</span>+</h2> <p>Countries <br> Represented</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-visa-2"></i></div> <div class="content"><h2><span class="count">853</span>+</h2> <p>Completed <br> Visa Passport</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-money"></i></div> <div class="content"><h2><span class="count">55</span>M+</h2> <p>Revenew <br> In per year</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-immigration-officer"></i></div> <div class="content"><h2><span class="count">35</span>+</h2> <p>Experience <br> immigration officer</p></div></div></div></div></div></div></section>`;
}
function Testimonial($$payload) {
  $$payload.out += `<section class="testimonial-section section-padding"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">Our Testimonials</span> <h2 class="title-anim">Let’s Explore Why People Say <br> About Our Services</h2></div> <div class="testimonial-carousel-active"><div class="testimonial-card-items"><div class="author-items"><div class="author-image bg-cover" style="background-image: url('/img/testimonial/01.png');"></div> <div class="author-content"><h5>Kawser Ahmed</h5> <span>Web Developer</span></div></div> <p>creative agency, we believe in the Eid
                            and innovation. We are constantly melt
                            of what is possible, and strive to cat 
                            only bea utiful and effective,but shark 
                            inventore veritatis et quasi archite 
                            cto beatae citae dicta sunt atlantic</p> <ul><li>January 23, 2024</li></ul></div> <div class="testimonial-card-items"><div class="author-items"><div class="author-image bg-cover" style="background-image: url('/img/testimonial/03.png');"></div> <div class="author-content"><h5>Jhon Dev</h5> <span>UI Designer</span></div></div> <p>creative agency, we believe in the Eid
                            and innovation. We are constantly melt
                            of what is possible, and strive to cat 
                            only bea utiful and effective,but shark 
                            inventore veritatis et quasi archite 
                            cto beatae citae dicta sunt atlantic</p> <ul><li>January 23, 2024</li></ul></div> <div class="testimonial-card-items"><div class="author-items"><div class="author-image bg-cover" style="background-image: url('/img/testimonial/02.png');"></div> <div class="author-content"><h5>Salman Ahmed</h5> <span>WordPress Developer</span></div></div> <p>creative agency, we believe in the Eid
                            and innovation. We are constantly melt
                            of what is possible, and strive to cat
                            we pride ourselve on delivering</p> <ul><li>May 15, 2023</li></ul></div> <div class="testimonial-card-items"><div class="author-items"><div class="author-image bg-cover" style="background-image: url('/img/testimonial/01.png');"></div> <div class="author-content"><h5>Shikon Islam</h5> <span>Frontend Engineer</span></div></div> <p>creative agency, we believe in the Eid
                            and innovation. We are constantly melt
                            of what is possible, and strive to cat 
                            only bea utiful and effective,but shark 
                            inventore veritatis et quasi archite 
                            cto beatae citae dicta sunt atlantic</p> <ul><li>January 23, 2024</li></ul></div></div></div></section>`;
}
function _page($$payload) {
  Hero($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> `;
  Service($$payload);
  $$payload.out += `<!----> `;
  Brand($$payload);
  $$payload.out += `<!----> `;
  Countries($$payload);
  $$payload.out += `<!----> `;
  Banner($$payload);
  $$payload.out += `<!----> `;
  Team($$payload);
  $$payload.out += `<!----> `;
  Certification($$payload);
  $$payload.out += `<!----> `;
  Stat($$payload);
  $$payload.out += `<!----> `;
  Testimonial($$payload);
  $$payload.out += `<!----> `;
  CtaMessage($$payload);
  $$payload.out += `<!----> `;
  Process($$payload);
  $$payload.out += `<!---->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D6aZSvWu.js.map
