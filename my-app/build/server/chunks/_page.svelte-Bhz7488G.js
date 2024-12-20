import { V as head, W as ensure_array_like } from './index-CSLrv6GN.js';
import { B as BreadCrumbImage } from './common-hxGttqce.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function BreadCrumb($$payload, $$props) {
  let { background, title, list } = $$props;
  const each_array = ensure_array_like(list);
  $$payload.out += `<div class="breadcrumb-wrapper section-padding bg-cover"${attr("style", `background-image: url('${background || BreadCrumbImage}')`)}><div class="container"><div class="page-heading"><h1 class="wow fadeInUp" data-wow-delay=".3s">${escape_html(title)}</h1> <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".5s"><li><a href="/">Home Page</a></li> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<li><i class="fal fa-minus"></i></li> <li><a${attr("href", item.link)}>${escape_html(item.name)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></div>`;
}
function _page($$payload) {
  const list = [{ name: "Contact", link: "" }];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Contact page | Visaland</title>`;
    $$payload2.out += `<meta name="description" content="This is a contact page">`;
  });
  $$payload.out += `<div>`;
  BreadCrumb($$payload, { title: "Contact", list });
  $$payload.out += `<!----> <section class="contact-main-area fix section-padding"><div class="container"><div class="contact-main-wrapper"><div class="row g-4"><div class="col-lg-6"><div class="contact-content"><div class="section-title mb-2"><span class="wow fadeInUp">Get In Touch</span> <h2 class="title-anim">Contact Us</h2></div> <p class="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque inventore</p> <div class="row g-4 mt-3"><div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s"><div class="info-items"><div class="icon"><i class="fas fa-map-marker-alt"></i></div> <div class="content"><h5>Location</h5> <p>55 Main street, 2nd block, <br> Melbourne, Australia</p></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s"><div class="info-items"><div class="icon"><i class="far fa-phone"></i></div> <div class="content"><h5>Phone</h5> <a href="tel:+09354587874">+09 354 587 874</a> <br> <a href="tel:+01368567894">+01 368 567 894</a></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".7s"><div class="info-items"><div class="icon"><i class="fal fa-envelope"></i></div> <div class="content"><h5>Email</h5> <a href="mailto:info@example.com" class="link">info@example.com</a> <br> <a href="mailto:info@example.com" class="link">info@example.com</a></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".9s"><div class="info-items"><div class="icon"><i class="fas fa-share-alt"></i></div> <div class="content"><h5>Social</h5> <div class="social-icon d-flex align-items-center"><a href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i class="fab fa-twitter"></i></a> <a href="#"><i class="fab fa-vimeo-v"></i></a> <a href="#"><i class="fab fa-pinterest-p"></i></a></div></div></div></div></div> <div class="contact-image wow fadeInUp" data-wow-delay=".4s"><img src="/img/contact.jpg" alt="img"></div></div></div> <div class="col-lg-6 mt-5 mt-lg-0"><div class="contact-form-items"><div class="contact-title"><h3 class="wow fadeInUp" data-wow-delay=".3s">Fill Up The Form</h3> <p class="wow fadeInUp" data-wow-delay=".5s">Your email address will not be published. Required fields are marked *</p></div> <form action="contact.php" id="contact-form" method="POST"><div class="row g-4"><div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s"><div class="form-clt"><input type="text" name="name" id="name" placeholder="Your Name*"> <div class="icon"><i class="fal fa-user"></i></div></div></div> <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s"><div class="form-clt"><input type="text" name="email" id="email" placeholder="Email Address*"> <div class="icon"><i class="fal fa-envelope"></i></div></div></div> <div class="col-lg-12 wow fadeInUp" data-wow-delay=".7s"><div class="form-clt"><textarea name="message" id="message" placeholder="Enter Your Messege here"></textarea> <div class="icon"><i class="fal fa-edit"></i></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".8s"><button type="submit" class="theme-btn"><span><i class="fal fa-paper-plane"></i>Get In Touch</span></button></div></div></form></div></div></div></div></div></section> <div class="map-section"><div class="google-map wow fadeInUp" data-wow-delay=".7s"><iframe title="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style="border:0;"${attr("allowfullscreen", true, true)} loading="lazy"></iframe></div></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Bhz7488G.js.map
