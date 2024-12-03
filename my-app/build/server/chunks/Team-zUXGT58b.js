import { W as ensure_array_like, x as pop, v as push } from './index-CSLrv6GN.js';
import { t as teamData } from './common-hxGttqce.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-BeaNKpgU.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Team($$payload, $$props) {
  push();
  const each_array = ensure_array_like(teamData.members);
  $$payload.out += `<section class="team-section section-padding section-bg-3"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">${escape_html(teamData.title)}</span> <h2 class="text-white title-anim">${html(teamData.heading)}</h2></div> <div class="row align-items-center"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let member = each_array[index];
    $$payload.out += `<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"${attr("data-wow-delay", index * 0.2)}><div class="single-team-items"><div class="team-image"><img${attr("src", member.avatar)} alt="team-img"> <div class="social-profile"><span class="plus-btn"><i class="fas fa-share-alt"></i></span> <ul><li><a${attr("href", member.facebookLink)} aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li> <li><a aria-label="Twitter"${attr("href", member.twitterLink)}><i class="fab fa-twitter"></i></a></li> <li><a aria-label="Linkedin"${attr("href", member.linkdinLink)}><i class="fab fa-linkedin-in"></i></a></li></ul></div></div> <div class="team-content text-center"><h5><a${attr("href", member.link)}>${escape_html(member.name)}</a></h5> <p>${escape_html(member.role)}</p></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="team-button wow fadeInUp" data-wow-delay=".4s"><a href="team.html" class="theme-btn mt-5 hover-white"><span>Explore more team <i class="fas fa-chevron-right"></i></span></a></div></div></section>`;
  pop();
}

export { Team as T, html as h };
//# sourceMappingURL=Team-zUXGT58b.js.map
