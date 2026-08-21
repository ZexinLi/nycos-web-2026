// Injects per-route <title>/meta/OG tags into the served HTML before it
// reaches the client, so link-preview crawlers (which don't run JS) see the
// correct title/description/canonical for deep links like /donate or /guide.
// The client-side app still overwrites these again at runtime via syncMeta().

const SEO = {
  '/': { title: 'New York Chinese Opera Society | Jingju, Kunqu & Calligraphy in NYC', description: 'A volunteer-run nonprofit bringing Chinese opera, calligraphy, and brush painting to New York since 2006. No experience needed — classes, performances, and community events in Lower Manhattan.' },
  '/about': { title: 'About Us | New York Chinese Opera Society', description: 'Founded in 2006, NYCOS is a 501(c)(3) nonprofit dedicated to Chinese opera and traditional arts in New York City. Meet the people and story behind the Society.' },
  '/programs': { title: 'Classes & Programs | New York Chinese Opera Society', description: 'Thirteen classes in Jingju, Kunqu, calligraphy, and brush painting for all levels. No experience required — join a class in Lower Manhattan.' },
  '/programs/opera': { title: 'Beijing & Kunqu Opera Classes NYC | New York Chinese Opera Society', description: 'Learn Jingju and Kunqu opera technique — movement, voice, and stagecraft — from experienced instructors in Lower Manhattan. Beginners welcome.' },
  '/programs/brush': { title: 'Chinese Calligraphy & Painting Classes NYC | New York Chinese Opera Society', description: 'Study traditional Chinese calligraphy and brush painting at Ranhao Studio, taught by exhibiting artists. Classes for all ages and skill levels.' },
  '/programs/workshops': { title: 'Cultural Workshops & School Visits | New York Chinese Opera Society', description: 'Book a Chinese opera or calligraphy workshop for your school, library, or festival. Live demonstrations and hands-on introductions to the art form.' },
  '/guide': { title: 'What Is Chinese Opera? Jingju vs Kunqu Explained | New York Chinese Opera Society', description: 'New to Chinese opera? Learn the real difference between Jingju (Beijing Opera) and Kunqu, plus the four traditional role types — sheng, dan, jing, and chou.' },
  '/youth': { title: 'NYCOS Youth Troupe | New York Chinese Opera Society', description: 'Founded in 2012 for young people who love Chinese opera and culture. Training, performance opportunities, and community for the next generation.' },
  '/events': { title: 'Events & Performances | New York Chinese Opera Society', description: 'Upcoming Chinese opera performances, concerts, and lectures in New York City. Most events are free or low-cost — no experience needed to attend.' },
  '/membership': { title: 'Become a Member | New York Chinese Opera Society', description: 'Join NYCOS for discounted classes, rehearsal invitations, and first access to performances. Memberships start at $20/year.' },
  '/volunteer': { title: 'Volunteer With Us | New York Chinese Opera Society', description: 'NYCOS runs entirely on volunteers. Help with front-of-house, stagecraft, costumes, translation, and more — no experience necessary.' },
  '/contact': { title: 'Contact Us | New York Chinese Opera Society', description: 'Get in touch with New York Chinese Opera Society for classes, performance bookings, membership, or media inquiries.' },
  '/donate': { title: 'Donate | New York Chinese Opera Society', description: 'Support Chinese opera in New York. Your gift funds Youth Troupe training, studio rent, and teachers who keep this art form alive. NYCOS is a 501(c)(3) nonprofit.' }
};

export const config = {
  matcher: ['/((?!api|_next|assets|_ds|uploads|favicon|index\\.html|robots\\.txt|sitemap\\.xml).*)']
};

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function injectSeo(html, seo, canonicalUrl) {
  const title = escapeHtml(seo.title);
  const titleAttr = escapeAttr(seo.title);
  const descAttr = escapeAttr(seo.description);
  const urlAttr = escapeAttr(canonicalUrl);

  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${descAttr}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${urlAttr}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${urlAttr}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${titleAttr}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${descAttr}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${titleAttr}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${descAttr}">`);
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const seo = SEO[url.pathname];
  if (!seo) return;

  const originResp = await fetch(new URL('/index.html', url.origin));
  if (!originResp.ok) return;

  const html = await originResp.text();
  const canonicalUrl = 'https://www.nycos.org' + url.pathname;
  const injected = injectSeo(html, seo, canonicalUrl);

  return new Response(injected, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' }
  });
}
