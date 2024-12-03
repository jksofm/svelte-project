const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","css/animate.css","css/bootstrap.min.css","css/font-awesome.css","css/magnific-popup.css","css/main.css","css/main.css.map","css/meanmenu.css","css/nice-select.css","css/output.css","css/output.css.map","css/slick.css","css/swiper-bundle.min.css","css/tailwind.css","favicon.png","fonts/fa-brands-400.eot","fonts/fa-brands-400.woff","fonts/fa-brands-400.woff2","fonts/fa-light-300.eot","fonts/fa-light-300.woff","fonts/fa-light-300.woff2","fonts/fa-regular-400.eot","fonts/fa-regular-400.woff","fonts/fa-regular-400.woff2","fonts/fa-solid-900.eot","fonts/fa-solid-900.woff","fonts/fa-solid-900.woff2","fonts/flaticon.eot","fonts/flaticon.woff","fonts/flaticon.woff2","img/.DS_Store","img/about/about-2.jpg","img/about/about-3.jpg","img/about/about-4.jpg","img/about/about-5.jpg","img/about/about-6.jpg","img/about/about-7.jpg","img/about/about.jpg","img/about/author.png","img/about/award.png","img/about/bar-2.png","img/about/bar.png","img/about/border-shape-2.png","img/about/border-shape.png","img/about/circle-2.png","img/about/circle.png","img/about/client-2.png","img/about/client.png","img/about/line.png","img/about/shape-image.png","img/about/signature.png","img/about/video.jpg","img/app-store.png","img/asterisk-2.svg","img/asterisk-3.svg","img/asterisk.svg","img/banner/01.jpg","img/bar-3.svg","img/brand/01.png","img/brand/02.png","img/breadcrumb.jpg","img/call.png","img/case-studies/01.jpg","img/case-studies/02.jpg","img/case-studies/03.jpg","img/case-studies/04.jpg","img/case-studies/05.jpg","img/case-studies/06.jpg","img/case-studies/07.jpg","img/choose/01.jpg","img/choose/02.jpg","img/choose/03.jpg","img/choose/04.jpg","img/choose/circle-shape.png","img/choose/feature.png","img/choose/shape.png","img/choose-us/01.jpg","img/choose-us/02.jpg","img/choose-us/03.jpg","img/circle.png","img/client.png","img/coaching/01.jpg","img/coaching/02.jpg","img/coaching/03.jpg","img/coaching/04.jpg","img/coaching/05.jpg","img/coaching/06.jpg","img/coaching/07.jpg","img/coaching/08.jpg","img/coaching/details-1.jpg","img/coaching/details-2.jpg","img/coaching/details-3.jpg","img/coaching/details-4.jpg","img/contact/01.jpg","img/contact/02.jpg","img/contact/bg-shape.png","img/contact/shape-img.png","img/contact-2.png","img/contact-bg.jpg","img/contact-shape.png","img/contact.png","img/counting.png","img/country/01.jpg","img/country/02.jpg","img/country/03.jpg","img/country/04.jpg","img/country/details-1.jpg","img/country/details-2.jpg","img/country/details-3.jpg","img/discuss.jpg","img/error.png","img/favicon.svg","img/feature/icon-1.svg","img/feature/icon-2.svg","img/feature/icon-3.svg","img/feature/trusted.jpg","img/flag/aus (2).png","img/flag/aus.jpg","img/flag/bra.png","img/flag/dubai.png","img/flag/eng.png","img/flag/france.png","img/flag/ger.png","img/flag/india.png","img/flag/lines-waves1.png","img/flag/russ.png","img/flag/turkey.png","img/flag/us.png","img/flag-1.jpg","img/flag-2.jpg","img/flag-3.jpg","img/flag.png","img/footer/arrow-shape-1.png","img/footer/arrow-shape-2.png","img/footer/gallery-1.jpg","img/footer/gallery-2.jpg","img/footer/gallery-3.jpg","img/footer/gallery-4.jpg","img/footer/gallery-5.jpg","img/footer/gallery-6.jpg","img/footer/post1.jpg","img/footer/post2.jpg","img/footer-shape-2.png","img/footer-shape.png","img/google-play.png","img/header/home-1.jpg","img/header/home-2.jpg","img/header/home-3.jpg","img/header/home-4.jpg","img/hero/bar.png","img/hero/circle-shape.png","img/hero/frame-1.png","img/hero/frame-2.png","img/hero/frame-3.png","img/hero/frame-shape.png","img/hero/hero-1.jpg","img/hero/hero-10.jpg","img/hero/hero-11.jpg","img/hero/hero-2.jpg","img/hero/hero-3.jpg","img/hero/hero-4.jpg","img/hero/hero-5.jpg","img/hero/hero-6.jpg","img/hero/hero-7.jpg","img/hero/hero-8.jpg","img/hero/hero-9.jpg","img/hero/icon-dots-8.png","img/hero/line-circle.png","img/hero/line.png","img/hero/object1.png","img/hero/right-shape.png","img/home-4/about/about2 - Copy.jpg","img/home-4/about/about2.jpg","img/home-4/about/about3.jpg","img/home-4/about/arrow-shape.png","img/home-4/about/bg-shape.png","img/home-4/about/circle-shape.png","img/home-4/about/icon/icon1.svg","img/home-4/about/icon/icon2.svg","img/home-4/banner1.jpg","img/home-4/case-study/arrow-shape.png","img/home-4/case-study/case-study1.jpg","img/home-4/case-study/case-study2.jpg","img/home-4/case-study/case-study3.jpg","img/home-4/case-study/icon/icon1.svg","img/home-4/case-study/icon/icon2.svg","img/home-4/case-study/icon/icon3.svg","img/home-4/faq-img.jpg","img/home-4/feature/arrow-shape.png","img/home-4/feature/arrow-shape2.png","img/home-4/feature/benefits-one-img-1.jpg","img/home-4/feature/benefits-one-img-2.jpg","img/home-4/feature/dot-shape.png","img/home-4/feature/feature.jpg","img/home-4/feature/feature2.jpg","img/home-4/feature/quote.png","img/home-4/feature-icon/icon1.svg","img/home-4/feature-icon/icon2.svg","img/home-4/feature-icon/icon3.svg","img/home-4/hero/circle.png","img/home-4/hero/hero-bg.jpg","img/home-4/hero/hero4.jpg","img/home-4/news/01.jpg","img/home-4/news/02.jpg","img/home-4/news/03.jpg","img/home-4/news/author.jpg","img/home-4/news/author2.jpg","img/home-4/news/author3.jpg","img/home-4/news/circle-shape.png","img/home-4/pricing/arrow.png","img/home-4/pricing/dot.png","img/home-4/pricing/dot2.png","img/home-4/pricing/icon1.svg","img/home-4/pricing/icon2.svg","img/home-4/pricing/icon3.svg","img/home-4/pricing/tag.png","img/home-4/service/arrow.png","img/home-4/service/arrow2.png","img/home-4/service/bg-shape.png","img/home-4/service/icon-1.svg","img/home-4/service/icon-2.svg","img/home-4/service/icon-3.svg","img/home-4/service/icon-4.svg","img/home-4/service/icon-5.svg","img/home-4/service/icon6.svg","img/home-4/service/icon7.svg","img/home-4/service/item-shape.png","img/home-4/service/item-shape2.png","img/home-4/service/line-shape.png","img/home-4/service/line-shape2.png","img/home-4/service/service-bg.jpg","img/home-4/service/service-provide-bg.jpg","img/home-4/team/team1.jpg","img/home-4/team/team2.jpg","img/home-4/team/team3.jpg","img/home-4/team/team4.jpg","img/home-4/team/team5.jpg","img/home-4/testimonial/bg.png","img/home-4/testimonial/client.png","img/home-4/testimonial/client2.png","img/home-4/testimonial/comma.png","img/home-4/testimonial/quote2.png","img/icon/icon-1.svg","img/icon/icon-2.svg","img/icon/icon-3.svg","img/icon/icon-4.svg","img/icon.png","img/line.png","img/linepng.png","img/logo/.DS_Store","img/logo/footer-logo.svg","img/logo/logo-2.svg","img/logo/logo.svg","img/logo/white-logo.svg","img/news/01.jpg","img/news/02.jpg","img/news/03.jpg","img/news/04.jpg","img/news/05.jpg","img/news/06.jpg","img/news/07.jpg","img/news/08.jpg","img/news/09.jpg","img/news/10.jpg","img/news/11.jpg","img/news/12.jpg","img/news/author_img2.jpg","img/news/author_img3.jpg","img/news/author_img4.jpg","img/news/post-1.jpg","img/news/post-2.jpg","img/news/post-3.jpg","img/news/post-4.jpg","img/news/post-5.jpg","img/news/pp1.jpg","img/news/pp2.jpg","img/news/pp3.jpg","img/project/01.jpg","img/project/02.jpg","img/project/03.jpg","img/project/04.jpg","img/project/05.jpg","img/project/06.jpg","img/project/07.jpg","img/project/08.jpg","img/project/09.jpg","img/project/10.jpg","img/project/11.jpg","img/project/12.jpg","img/project/details-2.jpg","img/project/details-3.jpg","img/project/details-4.jpg","img/project/details.jpg","img/quotepost.png","img/service/01.jpg","img/service/02.jpg","img/service/03.jpg","img/service/04.jpg","img/service/bottom-shape.png","img/service/contact-bg.jpg","img/service/details-1.jpg","img/service/icon/01.svg","img/service/icon/02.svg","img/service/icon/03.svg","img/service/icon/04.svg","img/service/left-shape.png","img/service/line-shape-2.png","img/service/line-shape.png","img/service/right-shape.png","img/service/shape.png","img/shape-left.jpg","img/shape-left.png","img/shape-right.jpg","img/shape-right.png","img/shape.png","img/team/01.jpg","img/team/02.jpg","img/team/03.jpg","img/team/04.jpg","img/team/05.jpg","img/team/06.jpg","img/team/07.jpg","img/team/08.jpg","img/team/09.jpg","img/team/10.jpg","img/team/11.jpg","img/team/12.jpg","img/team/13.jpg","img/team/14.jpg","img/team/circle-shape.png","img/team/details-1.jpg","img/team/dot-shape-2.png","img/team/dot-shape.png","img/testimonial/01.png","img/testimonial/02.png","img/testimonial/03.png","img/testimonial/04.png","img/testimonial/05.png","img/testimonial/06.jpg","img/testimonial/07.jpg","img/testimonial/07.png","img/testimonial/08.jpg","img/testimonial/08.png","img/testimonial/09.jpg","img/testimonial/09.png","img/testimonial/quote.png","img/visa/01.jpg","img/visa/02.jpg","img/visa/03.jpg","js/ajax-mail.js","js/bootstrap.bundle.min.js","js/circle-progress.js","js/gsap/gsap-scroll-smoother.js","js/gsap/gsap-scroll-to-plugin.js","js/gsap/gsap-scroll-trigger.js","js/gsap/gsap-split-text.js","js/gsap/gsap.js","js/jquery-3.7.1.min.js","js/jquery.counterup.min.js","js/jquery.magnific-popup.min.js","js/jquery.meanmenu.min.js","js/jquery.nice-select.min.js","js/jquery.waypoints.js","js/main.js","js/slick-animation.min.js","js/slick.min.js","js/swiper-bundle.min.js","js/viewport.jquery.js","js/wow.min.js","scss/.DS_Store","scss/_about.scss","scss/_animation.scss","scss/_blog.scss","scss/_brand.scss","scss/_buttons.scss","scss/_coaching.scss","scss/_contact.scss","scss/_country.scss","scss/_cta.scss","scss/_faq.scss","scss/_feature.scss","scss/_footer.scss","scss/_header.scss","scss/_helping.scss","scss/_hero.scss","scss/_main-sidebar.scss","scss/_marquee.scss","scss/_meanmenu.scss","scss/_mixins.scss","scss/_news-addons.scss","scss/_preloader.scss","scss/_section.scss","scss/_team.scss","scss/_testimonial.scss","scss/_typography.scss","scss/_variables.scss","scss/_visa.scss","scss/main.scss"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".svg":"image/svg+xml",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.DgrL7lqj.js","app":"_app/immutable/entry/app.Bs1xqIRv.js","imports":["_app/immutable/entry/start.DgrL7lqj.js","_app/immutable/chunks/entry.B4jh6SZj.js","_app/immutable/chunks/runtime.BHQ3mifw.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index.eMn303K4.js","_app/immutable/entry/app.Bs1xqIRv.js","_app/immutable/chunks/runtime.BHQ3mifw.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.CgGeDR3F.js","_app/immutable/chunks/template.BB6DrY9z.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/index-client.DL7_V8Jg.js","_app/immutable/chunks/props.C97raaOs.js","_app/immutable/chunks/proxy.CXpVfyZ2.js","_app/immutable/chunks/store.Dmb9GBCp.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-3bYWLwib.js')),
			__memo(() => import('./chunks/1-D71MmkAK.js')),
			__memo(() => import('./chunks/2-CUjatbeR.js')),
			__memo(() => import('./chunks/3-DMtZHe8_.js')),
			__memo(() => import('./chunks/4-CTHMuUep.js')),
			__memo(() => import('./chunks/5-C_qmXwQq.js')),
			__memo(() => import('./chunks/6-COL7scNY.js')),
			__memo(() => import('./chunks/7-PYAENw-H.js')),
			__memo(() => import('./chunks/8-C112JWFG.js')),
			__memo(() => import('./chunks/9-CzQ0tQsI.js'))
		],
		routes: [
			{
				id: "/(user)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(user)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/header",
				pattern: /^\/admin\/header\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/home",
				pattern: /^\/admin\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(admin)/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-3PcsXlbx.js'))
			},
			{
				id: "/(user)/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
