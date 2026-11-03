// =================================================================
// Content: edit these arrays to update the site.
// Each page only shows the sections it has a container for.
// =================================================================

// The Discovery Project is featured at the top of the Projects page.
// Fill this in by Week 15. Set `ready: true` once it's done.
const discoveryProject = {
  ready: false,
  name: "ECE 1100 Discovery Project",
  summary: "Summary coming soon: a short description of what the project is, the problem it tackles, and my role on the team.",
  outcomes: [
    "Key outcome #1 (what you built or found)",
    "Key outcome #2 (results, measurements, or what worked)",
    "Key outcome #3 (what you learned)"
  ],
  image: "",          // e.g. "assets/discovery.jpg"
  video: "",          // optional YouTube embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID"
  links: []           // e.g. [{ label: "Slides", url: "https://..." }]
};

// Projects. Optional link fields: github, devpost, demo, website
const projects = [
  {
    name: "Murder On Enchanted Island",
    description: "A multi-genre adventure game built entirely from scratch.",
    image: "assets/MurderOnEnchatedIslandHomePage.jpg",
    github: "https://github.com/tashvib/MurderOnEnchantedIsland"
  },
  {
    name: "GreenOvation",
    description: "An award-winning iOS app that gamifies waste disposal and sustainability education.",
    image: "assets/GreenovationLendingPage.jpg",
    github: "https://github.com/tashvib/GreenOvationCode_",
    devpost: "https://devpost.com/software/greenovation-h7d4v8"
  },
  {
    name: "Mitra",
    description: "A low-cost Raspberry Pi–based tutoring device bringing offline education to under-resourced students.",
    image: "assets/low-cost Raspberry Pi.png",
    website: "https://sheleapsintech.com"
  }
];

// Research. Optional fields: points, conferences, pdf, poster
const research = [
  {
    title: "Know Your Limits: On the Faithfulness of LLMs as Solvers and Autoformalizers in Legal Reasoning",
    venue: "ICML 2026 Workshops · 2026",
    pdf: "https://arxiv.org/pdf/2606.16118",
    points: [
      "Research Intern at the AIEA Lab (Prof. Leilani Gilpin), UC Santa Cruz, studying LLM reliability and formal reasoning.",
      "Compared 3 reasoning methods (pure LLM classification, LLM-based formal reasoning, and Z3 solver-based formal reasoning).",
      "Discovered \"scope laundering\" across all 5 LLMs tested, with rates ranging from 15.3% in GPT to 52.5% in Qwen."
    ],
    conferences: [
      { name: "AI4Law Workshop at ICML 2026", url: "https://icml.cc/virtual/2026/80630" },
      { name: "AI for Math Workshop at ICML 2026" }
    ]
  },
  {
    title: "Follow My Lead: Logical Fallacy Classification with Knowledge-Augmented LLMs",
    venue: "arXiv · 2025",
    pdf: "https://arxiv.org/pdf/2510.09970",
    points: [
      "Co-authored AI reasoning paper",
      "Created the first \"chain of decision\" method making model decisions verifiable, enhancing interpretability.",
      "Developed novel neurosymbolic AI method to improve LLM logical reasoning by 20.7% accuracy without expensive model training.",
      "Learned logic programming in Prolog, AWS (Bedrock, S3), RAG, and prompt engineering."
    ],
    conferences: [
      { name: "Advances in Cognitive Systems at Georgia Tech", url: "http://cogsys.org/conference/2025/schedule.html" },
      { name: "BayLearn Machine Learning Symposium", url: "https://baylearn-org.github.io/www/submissions.html" }
    ]
  },
  {
    title: "Analyzing Media Narratives with Machine Learning: Topic Alignment and Sentiment in Rally Speeches and News Media Coverage",
    venue: "Paper · 2024",
    pdf: "https://drive.google.com/file/d/1-46Ep7oWloXVb9eyrHY4FGZORyh-WCLt/view?usp=sharing",
    points: [
      "Built Natural Language Processing pipelines to discover political bias patterns",
      "Developed a hybrid LLM and probabilistic topic modeling method to process data.",
      "Primary author and presenter of paper to 150+ PhDs and Profs at Capstone Seminar, Southern California & Natl. Conference for Undergraduate Research."
    ],
    conferences: [
      { name: "Southern California Conference for Undergraduate Research" },
      { name: "National Conference for Undergraduate Research" }
    ]
  },
  {
    title: "Counterfactual Loss Improves Feature-Token Transformer Performance in Community Homelessness Prediction",
    venue: "Paper · 2024",
    pdf: "https://drive.google.com/file/d/1pxGPWxUAHrLOtAsLrvLUJMcptFZYDSG_/view?usp=sharing",
    poster: "https://docs.google.com/presentation/d/1sH1uCYneM2FHOw3DITIsagd2ubruiLCXc8imiBe4tEo/edit?usp=sharing",
    points: [
      "Built an improved machine learning model that predicts homelessness rates across U.S. communities with 85% accuracy",
      "Identified which community factors (housing costs, job availability, social services) have the biggest impact on homelessness to help guide more efficient government spending"
    ]
  }
];

// Community. Points may contain simple HTML like <strong>
const community = [
  {
    title: "Code Coach",
    org: "theCoderSchool",
    points: [
      "Led 2 <strong>in-person</strong> summer <strong>coding camps</strong>; entrusted by Manager with operation of space and safety of 25 students.",
      "Designed CodingBat curriculum; helped students break down problems, trace code, and explained abstract algorithms to varying levels of learners."
    ]
  },
  {
    title: "Tutor",
    org: "Schoolhouse.world & Vivekanand High School",
    points: [
      "Tutored 19 learners across Azerbaijan, Egypt, Ghana, India, and Pakistan through Schoolhouse.world",
      "Led AI education session for students at Vivekanand High School"
    ]
  }
];

// =================================================================
// Rendering
// =================================================================

function el(tag, className, html){
  const node = document.createElement(tag);
  if(className) node.className = className;
  if(html !== undefined) node.innerHTML = html;
  return node;
}

function linkBtn(label, href, variant){
  const a = el('a', 'chip-link' + (variant ? ' ' + variant : ''));
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = label;
  return a;
}

function renderDiscovery(container){
  const p = discoveryProject;
  const card = el('article', 'card featured-card reveal');

  const media = el('div', 'featured-media');
  if(p.video){
    const frame = document.createElement('iframe');
    frame.src = p.video;
    frame.title = p.name + ' video';
    frame.allowFullscreen = true;
    frame.loading = 'lazy';
    media.appendChild(frame);
  } else if(p.image){
    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.name;
    img.loading = 'lazy';
    media.appendChild(img);
  } else {
    media.appendChild(el('span', 'media-placeholder', 'Photos &amp; video coming soon'));
  }

  const body = el('div', 'featured-body');
  body.appendChild(el('div', 'eyebrow', p.ready ? 'Featured · Discovery Project' : 'Featured · In progress'));
  const title = el('h3', 'card-title'); title.textContent = p.name; body.appendChild(title);
  const summary = el('p', 'card-text'); summary.textContent = p.summary; body.appendChild(summary);
  if(p.outcomes && p.outcomes.length){
    body.appendChild(el('h4', 'mini-head', 'Key outcomes'));
    const ul = el('ul', 'points');
    p.outcomes.forEach(o => { const li = el('li'); li.textContent = o; ul.appendChild(li); });
    body.appendChild(ul);
  }
  if(p.links && p.links.length){
    const row = el('div', 'link-row');
    p.links.forEach((l, i) => row.appendChild(linkBtn(l.label, l.url, i === 0 ? 'is-dark' : '')));
    body.appendChild(row);
  }

  card.append(media, body);
  container.appendChild(card);
}

function renderProjects(container){
  projects.forEach(p => {
    const card = el('article', 'card project-card reveal');
    const media = el('div', 'project-image');
    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.name + ' screenshot';
    img.loading = 'lazy';
    media.appendChild(img);

    const body = el('div', 'project-body');
    body.appendChild(el('h3', 'card-title', p.name));
    body.appendChild(el('p', 'card-text', p.description || ''));

    const links = el('div', 'link-row');
    if(p.github) links.appendChild(linkBtn('GitHub', p.github, 'is-dark'));
    if(p.devpost) links.appendChild(linkBtn('Devpost', p.devpost));
    if(p.demo) links.appendChild(linkBtn('Live demo', p.demo));
    if(p.website || p.url) links.appendChild(linkBtn('Website', p.website || p.url));
    body.appendChild(links);

    card.append(media, body);
    container.appendChild(card);
  });
}

function renderResearch(container){
  research.forEach(r => {
    const card = el('article', 'card research-card reveal');
    card.appendChild(el('div', 'eyebrow', r.venue));
    const title = el('h3', 'card-title'); title.textContent = r.title; card.appendChild(title);

    if(r.points && r.points.length){
      const ul = el('ul', 'points');
      r.points.forEach(pt => { const li = el('li'); li.textContent = pt; ul.appendChild(li); });
      card.appendChild(ul);
    }

    if(r.conferences && r.conferences.length){
      const conf = el('div', 'conferences');
      conf.appendChild(el('span', 'conf-label', 'Presented at'));
      const list = el('ul', 'conf-list');
      r.conferences.forEach(c => {
        const li = el('li');
        if(c.url){
          const a = el('a');
          a.href = c.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = c.name;
          li.appendChild(a);
        } else {
          li.textContent = c.name;
        }
        list.appendChild(li);
      });
      conf.appendChild(list);
      card.appendChild(conf);
    }

    const links = el('div', 'link-row');
    if(r.pdf) links.appendChild(linkBtn('Read paper', r.pdf, 'is-dark'));
    if(r.poster) links.appendChild(linkBtn('View poster', r.poster));
    if(links.children.length) card.appendChild(links);

    container.appendChild(card);
  });
}

function renderCommunity(container){
  community.forEach(c => {
    const card = el('article', 'card community-card reveal');
    if(c.org) card.appendChild(el('div', 'eyebrow', c.org));
    card.appendChild(el('h3', 'card-title', c.title));
    const ul = el('ul', 'points');
    (c.points || []).forEach(pt => ul.appendChild(el('li', '', pt))); // trusted content
    card.appendChild(ul);
    container.appendChild(card);
  });
}

const renderers = {
  'discovery-feature': renderDiscovery,
  'projects-list': renderProjects,
  'research-list': renderResearch,
  'community-list': renderCommunity
};
Object.keys(renderers).forEach(id => {
  const container = document.getElementById(id);
  if(container) renderers[id](container);
});

const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// =================================================================
// Header shadow + reveal-on-scroll
// =================================================================
(function(){
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    items.forEach(i => i.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach(i => io.observe(i));
})();
