import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderScript, g as addAttribute, j as renderHead, k as renderComponent, l as renderSlot, h as createAstro } from '../chunks/astro/server_Bq0L69xg.mjs';
import { createClient } from 'tinacms/dist/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
const HomepagePartsFragmentDoc = gql`
    fragment HomepageParts on Homepage {
  __typename
  introText
  aboutText
  reservationText
  pricingText
  photoText
  paintingText
  faq {
    __typename
    question
    answer
  }
}
    `;
const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  body
}
    `;
const HomepageDocument = gql`
    query homepage($relativePath: String!) {
  homepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomepageParts
  }
}
    ${HomepagePartsFragmentDoc}`;
const HomepageConnectionDocument = gql`
    query homepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomepageFilter) {
  homepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomepageParts
      }
    }
  }
}
    ${HomepagePartsFragmentDoc}`;
const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
function getSdk(requester) {
  return {
    homepage(variables, options) {
      return requester(HomepageDocument, variables, options);
    },
    homepageConnection(variables, options) {
      return requester(HomepageConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    }
  };
}
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

const client = createClient({ url: "https://content.tinajs.io/1.4/content/74d418b2-9784-4385-ab0e-75c2249005a8/github/master", token: "81d65d516f87507827699da185c920750f57a207", queries });

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="nav" data-astro-cid-pux6a34n> <a class="logo" href="./" data-astro-cid-pux6a34n><img alt="Logo" class="logoImg" src="/logo.png" data-astro-cid-pux6a34n></a> <div class="toggleMenu" data-astro-cid-pux6a34n> <input id="hamburgerInput" type="checkbox" data-astro-cid-pux6a34n> <div class="hamburger" data-astro-cid-pux6a34n></div> <div class="navLinks" data-astro-cid-pux6a34n> <a class="navLink" href="#aboutMe" data-astro-cid-pux6a34n>O mně</a> <a class="navLink" href="#pricing" data-astro-cid-pux6a34n>Ceník</a> <a class="navLink" href="#tattoo" data-astro-cid-pux6a34n>Tetování</a> <a class="navLink" href="#reservation" data-astro-cid-pux6a34n>Rezervace</a> <a class="navLink" href="#photography" data-astro-cid-pux6a34n>Fotografie</a> <a class="navLink" href="#painting" data-astro-cid-pux6a34n>Obrazy</a> <a class="navLink" href="#therms" data-astro-cid-pux6a34n>Podmínky</a> <a class="navLink" href="#faq" data-astro-cid-pux6a34n>FAQ</a> </div> </div> </nav>  ${renderScript($$result, "C:/Users/JakubSmagin/Dev/sarkasaskova/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/JakubSmagin/Dev/sarkasaskova/src/components/Navigation.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Chcete tetování, které bude odrážet vaši osobnost? Šárka v Praze vám nabídne unikátní designy, které jsou nejen originální, ale i precizně provedené s důrazem na detail. Rezervuj si svůj termín."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderSlot($$result, $$slots["default"])} <footer> <p>Šářka Šašková &copy; 2024</p> </footer> </body></html>`;
}, "C:/Users/JakubSmagin/Dev/sarkasaskova/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$FileLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FileLink;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="fileLink"${addAttribute(href, "href")} target="_blank" data-astro-cid-7f5cczh6> <svg class="fileIcon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-astro-cid-7f5cczh6><path d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" fill-rule="evenodd" data-astro-cid-7f5cczh6></path></svg> ${text} </a> `;
}, "C:/Users/JakubSmagin/Dev/sarkasaskova/src/components/FileLink.astro", void 0);

async function get(
    incomingReq,
    endpoint,
    cb,
) {
    const origin = new URL(incomingReq.url).origin;
    const response = await fetch(`${origin}${endpoint}`, {
        credentials: 'same-origin',
        headers: incomingReq.headers,
    });
    if (!response.ok) {
        throw new Error('Fetch failed');
    }
    return cb(response);
}

async function getPosts(incomingReq) {
    return get(incomingReq, `/api/posts`, async (response) => {
        const posts = await response.json();
        return posts;
    });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getPosts(Astro2.request);
  const postImages = posts.data?.map((post) => post.media_url).filter((post) => !post.includes("video")).slice(0, 12);
  const data = await client.queries.homepage({ relativePath: "homepage.md" });
  return renderTemplate(_a || (_a = __template(["", `  <script type="module">
	import 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js';

	GLightbox({
		zoomable: false,
	})

	document.addEventListener('DOMContentLoaded', () => {
		const faqQuestions = document.querySelectorAll('.faqQuestion');

		faqQuestions.forEach(question => {
			question.addEventListener('click', () => {
				const faqItem = question.closest('.faqItem');
				faqItem.classList.toggle('open');
			});
		});
	});
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "\u0160\xE1rka - Tetov\xE1n\xED Praha", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section section--intro" data-astro-cid-j7pv25f6></section> <section class="intro" data-astro-cid-j7pv25f6> <div class="introText" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": data.data.homepage.introText, "data-astro-cid-j7pv25f6": true })} </div> </section> <div id="aboutMe" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--about" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>O mně</h2> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": data.data.homepage.aboutText, "data-astro-cid-j7pv25f6": true })} <div class="socialLinks" data-astro-cid-j7pv25f6> <a href="https://www.instagram.com/sarka.ink/" class="socialLink" target="_blank" data-astro-cid-j7pv25f6> <svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 512 512" data-astro-cid-j7pv25f6><linearGradient id="a" x1="65.904" x2="446.357" y1="444.477" y2="64.023" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6><stop offset="0" style="stop-color:#ffc107" data-astro-cid-j7pv25f6></stop><stop offset=".221" style="stop-color:#f98d1c" data-astro-cid-j7pv25f6></stop><stop offset=".514" style="stop-color:#f1423b" data-astro-cid-j7pv25f6></stop><stop offset=".833" style="stop-color:#b93088" data-astro-cid-j7pv25f6></stop><stop offset=".994" style="stop-color:#9c27b0" data-astro-cid-j7pv25f6></stop></linearGradient><path d="M343.193 22H168.32C87.854 22 23 86.863 23 166.958v174.079C23 421.137 87.854 487 168.32 487h174.873C423.66 487 490 421.137 490 341.037V166.958C490 86.863 423.66 22 343.193 22zM446 341.037C446 397.025 399.438 443 343.193 443H168.32C112.071 443 66 397.025 66 341.037V166.958C66 110.973 112.071 65 168.32 65h174.873C399.438 65 446 110.973 446 166.958v174.079z" style="fill:url(#a)" data-astro-cid-j7pv25f6></path><linearGradient id="b" x1="173.511" x2="338.003" y1="336.245" y2="171.753" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6><stop offset="0" style="stop-color:#ffc107" data-astro-cid-j7pv25f6></stop><stop offset=".221" style="stop-color:#f98d1c" data-astro-cid-j7pv25f6></stop><stop offset=".514" style="stop-color:#f1423b" data-astro-cid-j7pv25f6></stop><stop offset=".833" style="stop-color:#b93088" data-astro-cid-j7pv25f6></stop><stop offset=".994" style="stop-color:#9c27b0" data-astro-cid-j7pv25f6></stop></linearGradient><path d="M255.756 137.947c-64.382 0-116.581 51.961-116.581 116.055 0 64.085 52.199 116.045 116.581 116.045 64.383 0 116.58-51.96 116.58-116.045 0-64.094-52.197-116.055-116.58-116.055zm0 188.584c-40.164 0-72.86-32.551-72.86-72.529 0-40.016 32.696-72.534 72.86-72.534 40.162 0 72.861 32.519 72.861 72.534 0 39.978-32.699 72.529-72.861 72.529z" style="fill:url(#b)" data-astro-cid-j7pv25f6></path><linearGradient id="c" x1="370.118" x2="392.037" y1="140.203" y2="118.284" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6><stop offset="0" style="stop-color:#ffc107" data-astro-cid-j7pv25f6></stop><stop offset=".221" style="stop-color:#f98d1c" data-astro-cid-j7pv25f6></stop><stop offset=".514" style="stop-color:#f1423b" data-astro-cid-j7pv25f6></stop><stop offset=".833" style="stop-color:#b93088" data-astro-cid-j7pv25f6></stop><stop offset=".994" style="stop-color:#9c27b0" data-astro-cid-j7pv25f6></stop></linearGradient><path d="M381.08 113.779c-8.581 0-15.538 6.924-15.538 15.463 0 8.54 6.957 15.467 15.538 15.467 8.573 0 15.532-6.927 15.532-15.467 0-8.539-6.959-15.463-15.532-15.463z" style="fill:url(#c)" data-astro-cid-j7pv25f6></path></svg> </a> <a href="https://www.facebook.com/sarkaartist" class="socialLink" target="_blank" data-astro-cid-j7pv25f6> <svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 512 512" data-astro-cid-j7pv25f6><path d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256Z" style="fill:#1877f2;fill-rule:nonzero" data-astro-cid-j7pv25f6></path><path d="M355.65 330 367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0 0 40 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65Z" style="fill:#fff;fill-rule:nonzero" data-astro-cid-j7pv25f6></path></svg> </a> <a href="mailto:sarka.sskv@gmail.com" class="socialLink" target="_blank" data-astro-cid-j7pv25f6> <svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" id="Icons" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><defs data-astro-cid-j7pv25f6><style>.cls-1{fill:#232323}</style></defs><path d="M20 2H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm2 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" class="cls-1" data-astro-cid-j7pv25f6></path><path d="M19.74 7.017a1 1 0 0 0-1.413-.067l-4.977 4.529a2.005 2.005 0 0 1-2.7 0L5.673 6.95a1 1 0 1 0-1.346 1.48l3.957 3.6-3.956 3.59a1 1 0 1 0 1.344 1.48l4.143-3.76a3.937 3.937 0 0 0 4.37 0l4.143 3.76a1 1 0 1 0 1.344-1.48l-3.955-3.591 3.956-3.6a1 1 0 0 0 .067-1.412Z" class="cls-1" data-astro-cid-j7pv25f6></path></svg> </a> <a href="https://maps.app.goo.gl/2V8HbG6bbVT4ebfV9" class="socialLink" target="_blank" data-astro-cid-j7pv25f6> <svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 26 26" data-astro-cid-j7pv25f6><g fill="#1D1D1B" data-astro-cid-j7pv25f6><path d="M24.9 24.054a.719.719 0 0 0 .084-.276c.003-.027.016-.05.016-.078 0-.025-.012-.046-.014-.07-.003-.025.005-.048 0-.072l-1.83-9.482c-.006-.027-.023-.048-.03-.073a.72.72 0 0 0-.362-.44.723.723 0 0 0-.27-.08c-.026-.002-.049-.015-.075-.015h-4.083l.282-.383.022-.03c.682-.96 1.496-2.5 1.496-4.37 0-3.922-3.179-7.115-7.093-7.135H12.992c-3.915.02-7.094 3.213-7.094 7.134 0 1.855.8 3.383 1.48 4.347l.022.033.298.404H3.58c-.027 0-.05.013-.077.016a.725.725 0 0 0-.63.518c-.007.026-.024.047-.03.074l-1.83 9.482c-.005.024.003.047 0 .071-.002.025-.014.046-.014.071 0 .028.013.05.016.078a.723.723 0 0 0 .264.493.716.716 0 0 0 .255.136c.026.008.046.024.072.03.049.009.096.013.142.013H24.25a.769.769 0 0 0 .143-.013c.026-.006.046-.022.072-.03a.724.724 0 0 0 .434-.353zM7.397 8.684a5.64 5.64 0 0 1 5.62-5.634 5.639 5.639 0 0 1 5.618 5.634c0 1.464-.653 2.7-1.205 3.484l-.006.007-4.407 5.996-4.392-5.973-.008-.01c-.556-.785-1.22-2.029-1.22-3.504zm5.002 11.18c.142.193.392.306.63.306s.463-.114.605-.306l3.599-4.896H21.8l1.541 7.982H2.66L4.2 14.968h4.6l3.6 4.896z" data-astro-cid-j7pv25f6></path><path d="M13.03 11.847c1.741 0 3.158-1.419 3.158-3.163s-1.417-3.163-3.158-3.163c-1.742 0-3.159 1.419-3.159 3.163s1.417 3.163 3.16 3.163zm0-5.326a2.163 2.163 0 0 1 0 4.326 2.164 2.164 0 0 1 0-4.326z" data-astro-cid-j7pv25f6></path></g></svg> </a> </div> </div> <div class="sectionBackground aboutBackground" data-astro-cid-j7pv25f6></div> </section> <div id="pricing" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--pricing" data-astro-cid-j7pv25f6> <div class="sectionBackground pricingBackground" data-astro-cid-j7pv25f6></div> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>Ceník</h2> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": data.data.homepage.pricingText, "data-astro-cid-j7pv25f6": true })} </div> </section> <div id="tattoo" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--tattoo" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>Tetování</h2> <div class="tattooGallery" data-astro-cid-j7pv25f6> ${postImages?.map((src) => renderTemplate`<a class="glightbox"${addAttribute(src, "href")} data-astro-cid-j7pv25f6> <img class="tattooImage"${addAttribute(src, "src")} alt="Tetování" data-astro-cid-j7pv25f6> </a>`)} </div> </div> </section> <div id="reservation" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--reservation" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>Rezervace</h2> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": data.data.homepage.reservationText, "data-astro-cid-j7pv25f6": true })} <div class="reservationButtonWrapper" data-astro-cid-j7pv25f6> <a class="button button--reservation" href="https://www.onlinetermin.cz/customer?ownerId=628&entityId=738" data-astro-cid-j7pv25f6>Rezervovat</a> </div> </div> <div class="sectionBackground reservationBackground" data-astro-cid-j7pv25f6></div> </section> <div id="photography" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--photo" data-astro-cid-j7pv25f6> <div class="sectionBackground photoBackground" data-astro-cid-j7pv25f6></div> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>Fotografie</h2> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": data.data.homepage.photoText, "data-astro-cid-j7pv25f6": true })} </div> </section> <div id="painting" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--painting" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>Obrazy</h2> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": data.data.homepage.paintingText, "data-astro-cid-j7pv25f6": true })} </div> <div class="sectionBackground paintingBackground" data-astro-cid-j7pv25f6></div> </section> <div id="therms" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--therms" data-astro-cid-j7pv25f6> <div class="sectionBackground thermsBackground" data-astro-cid-j7pv25f6></div> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>Smluvní podmínky a ke stažení</h2> <div class="fileLinks" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FileLink", $$FileLink, { "href": "https://assets.tina.io/74d418b2-9784-4385-ab0e-75c2249005a8/tetovani_ac.pdf", "text": "P\xE9\u010De o tetov\xE1n\xED", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FileLink", $$FileLink, { "href": "https://assets.tina.io/74d418b2-9784-4385-ab0e-75c2249005a8/obchodni_podminky_inkhouse.pdf", "text": "Obchodn\xED podm\xEDnky", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FileLink", $$FileLink, { "href": "https://assets.tina.io/74d418b2-9784-4385-ab0e-75c2249005a8/formular_pro_nezletile.pdf", "text": "Formul\xE1\u0159 pro nezletil\xE9", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FileLink", $$FileLink, { "href": "https://assets.tina.io/74d418b2-9784-4385-ab0e-75c2249005a8/cestne_prohlaseni_k_vytvoreni_tetovani.pdf", "text": "\u010Cestn\xE9 prohl\xE1\u0161en\xED k vytvo\u0159en\xED tetov\xE1n\xED", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FileLink", $$FileLink, { "href": "https://assets.tina.io/74d418b2-9784-4385-ab0e-75c2249005a8/reklamacni_rad.pdf", "text": "Reklama\u010Dn\xED \u0159\xE1d", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <div id="faq" class="sectionAnchor" data-astro-cid-j7pv25f6></div> <section class="section section--faq" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>FAQ</h2> ${data.data.homepage.faq?.map((faq) => renderTemplate`<div class="faqItem" data-astro-cid-j7pv25f6> <h3 class="faqQuestion" data-astro-cid-j7pv25f6>${faq.question}</h3> <div class="faqAnswer" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": faq.answer, "data-astro-cid-j7pv25f6": true })} </div> </div>`)} </div> <div class="sectionBackground faqBackground" data-astro-cid-j7pv25f6></div> </section> ` }));
}, "C:/Users/JakubSmagin/Dev/sarkasaskova/src/pages/index.astro", void 0);

const $$file = "C:/Users/JakubSmagin/Dev/sarkasaskova/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
