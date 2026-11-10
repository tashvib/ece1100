// =================================================================
// Content: edit these arrays to update the site.
// Each page only shows the sections it has a container for.
// =================================================================

// The Discovery Project is featured at the top of the Projects page.
// Fill this in by Week 15. Set `ready: true` once it's done.
const discoveryProject = {
  ready: false,
  name: "Discovery Project Showcase",
  summary: "",        // a short description of the project, the problem, and your role
  outcomes: [],       // e.g. ["What you built", "Results", "What you learned"]
  image: "",          // e.g. "assets/discovery.jpg"
  video: "",          // optional YouTube embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID"
  links: []           // e.g. [{ label: "Slides", url: "https://..." }]
};

// Projects. Optional link fields: github, devpost, demo, website
// Optional extras: eyebrow, points (bullets), tags (tools), wide (full-width card),
// image (leave "" for a placeholder panel until you have a screenshot).
const projects = [
  {
    name: "RISC-V CPU",
    eyebrow: "Silicon Jackets | Aug 2026 – Present",
    image: "assets/riscv-layout-card.webp",
    imageAlt: "Cadence Virtuoso chip layout of the RISC-V CPU alongside Pegasus DRC results",
    placeholder: "RTL → GDSII",
    description: "A RISC-V processor I designed in SystemVerilog and took from RTL all the way to a physical chip layout.",
    points: [
      "Designed and implemented a RISC-V CPU in SystemVerilog, building RTL for arithmetic, load/store, branch, and shift instructions and integrating instruction/data SRAM.",
      "Verified the CPU using directed and constrained-random testing, assertions, and scoreboarding; detected and characterized all 3 intentionally injected hardware bugs through waveform analysis.",
      "Debugged RTL with Cadence Xcelium and SimVision and analyzed code coverage with Cadence IMC to identify untested processor behavior.",
      "Converted the CPU's SystemVerilog RTL into a physical chip layout using Synopsys Design Compiler and Cadence Innovus, performing synthesis, floorplanning, static timing analysis, timing optimization, and DRC/LVS signoff."
    ],
    tags: ["SystemVerilog", "RISC-V", "Cadence Xcelium", "Cadence Innovus", "Synopsys Design Compiler"]
  },
  {
    name: "Murder On Enchanted Island",
    eyebrow: "Game Developer | 2023",
    description: "A complete adventure game built from scratch in Java, without a game engine.",
    points: [
      "Enemy AI: enemies chase the player in real time, steering toward them with trigonometry and vector math.",
      "Side-scrolling platformer: checks every move before it happens to prevent wall-clipping, using Axis-Aligned Bounding Box (AABB) collision and a scrolling camera that only renders objects on screen.",
      "Combat arena: bombs deal area-of-effect damage to every enemy in the blast radius, and enemies and thrown daggers live in dynamic arrays so any number can be on screen at once.",
      "Custom animations, sound effects, and a story told across three levels."
    ],
    tags: ["Java", "OOP", "Swing", "2D Graphics", "Animation", "Event-Driven Programming", "State Management"],
    image: "assets/MurderOnEnchatedIslandHomePage.jpg",
    github: "https://github.com/tashvib/MurderOnEnchantedIsland"
  },
  {
    name: "GreenOvation",
    eyebrow: "iOS App | 2023",
    description: "An award-winning iOS app that gamifies waste disposal and sustainability education.",
    points: [
      "Built an iOS app in Swift that turns sustainable habits into a game: users earn ecopoints and compete on a live leaderboard stored in Firebase.",
      "Waste-sorting quiz: an on-device Inception v3 image classifier (Core ML and Vision) identifies an item from the camera, and the user guesses whether it is recyclable, organic, e-waste, or hazardous.",
      "CO2 impact scanner: real-time YOLOv5 object detection on the live camera feed looks up the carbon emissions of each detected object.",
      "Also rates climate news headlines as positive or negative with an on-device sentiment classifier and matches users to volunteer opportunities based on their skills.",
      "Won \"Most Creative Hack\" at PoweringSTEMHacks2, placed 3rd in the Congressional App Challenge for district OR-06, and reached over 100 users."
    ],
    tags: ["Swift", "UIKit", "Core ML", "Vision", "Firebase"],
    image: "assets/GreenovationLendingPage.jpg",
    github: "https://github.com/tashvib/GreenOvationCode_",
    devpost: "https://devpost.com/software/greenovation-h7d4v8"
  }
];

// Research. Optional fields: points, conferences, pdf, poster, upcoming (shows an "Upcoming" tag),
// figure ({ src, alt, caption } shows an image under the bullets), logo ({ src, alt } shows next to the title)
const research = [
  {
    title: "GPU Cluster Optimization and Benchmarking",
    venue: "AI@GT Applied Research Division, Georgia Tech",
    upcoming: true,
    logo: { src: "assets/aigt-logo.png", alt: "AI@GT logo" },
    figure: {
      src: "assets/gpu-cluster-plan.svg",
      alt: "Diagram of the planned GPU cluster: host CPU memory streams model layers over PCIe to seven RTX 3090 GPUs, four online and three to restore, with a scaling plan from 1 to 7 GPUs.",
      caption: "Planned cluster setup."
    },
    points: [
      "Selected to join an applied research project under AI@GT's Applied Research Division, working hands-on with a cluster of 7 NVIDIA RTX 3090 GPUs at Georgia Tech's Advanced Technology Development Center (ATDC).",
      "Hardware restoration: diagnose and resolve hardware issues to bring the cluster from 4 to all 7 GPUs online, then record each GPU's PCIe link, NUMA node, and thermals to set a hardware baseline.",
      "Benchmarking and optimization: set up MegaTrain, a framework that trains large language models by streaming layers from CPU memory through the GPU, tune it on a single RTX 3090, and scale it from 1 to 2, 4, and all 7 GPUs while measuring throughput and scaling efficiency.",
      "Cluster tuning: keep each GPU worker's CPU cores and memory on the closest NUMA node and launch training jobs through the Slurm scheduler with CPU, memory, and GPU binding.",
      "Intel Xeon integration: investigate adding Intel Xeon hardware to the cluster to expand its compute capabilities and improve CPU–GPU performance."
    ]
  },
  {
    title: "Know Your Limits: On the Faithfulness of LLMs as Solvers and Autoformalizers in Legal Reasoning",
    venue: "ICML 2026 Workshops",
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
    venue: "arXiv (2025)",
    pdf: "https://arxiv.org/pdf/2510.09970",
    figure: {
      src: "assets/acs-2025-poster.webp",
      alt: "Tashvi Bansal standing with co-presenters beside the Follow My Lead research poster at Advances in Cognitive Systems 2025 at Georgia Tech.",
      caption: "Presenting Follow My Lead at Advances in Cognitive Systems (ACS) 2025 at Georgia Tech."
    },
    points: [
      "Co-authored a paper on AI reasoning.",
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
    venue: "Research Paper (2024)",
    pdf: "https://drive.google.com/file/d/1-46Ep7oWloXVb9eyrHY4FGZORyh-WCLt/view?usp=sharing",
    points: [
      "Built Natural Language Processing pipelines to discover political bias patterns.",
      "Developed a hybrid LLM and probabilistic topic modeling method to process data.",
      "Primary author and presenter of the paper to 150+ PhDs and professors at the Capstone Seminar, the Southern California Conference for Undergraduate Research, and the National Conference for Undergraduate Research."
    ],
    conferences: [
      { name: "Southern California Conference for Undergraduate Research" },
      { name: "National Conference for Undergraduate Research" }
    ]
  },
  {
    title: "Counterfactual Loss Improves Feature-Token Transformer Performance in Community Homelessness Prediction",
    venue: "Research Paper (2024)",
    pdf: "https://drive.google.com/file/d/1pxGPWxUAHrLOtAsLrvLUJMcptFZYDSG_/view?usp=sharing",
    poster: "https://docs.google.com/presentation/d/1sH1uCYneM2FHOw3DITIsagd2ubruiLCXc8imiBe4tEo/edit?usp=sharing",
    points: [
      "Built an improved machine learning model that predicts homelessness rates across U.S. communities with 85% accuracy.",
      "Identified which community factors (housing costs, job availability, social services) have the biggest impact on homelessness to help guide more efficient government spending."
    ]
  }
];

// Community. Points may contain simple HTML like <strong>
const community = [
  {
    title: "Code Coach",
    org: "theCoderSchool",
    points: [
      "Led 2 <strong>in-person</strong> summer <strong>coding camps</strong>; entrusted by my manager with running the space and keeping 25 students safe.",
      "Designed CodingBat curriculum; helped students break down problems, trace code, and explained abstract algorithms to varying levels of learners."
    ]
  },
  {
    title: "Tutor",
    org: "Schoolhouse.world & Vivekanand High School",
    points: [
      "Tutored 19 learners across Azerbaijan, Egypt, Ghana, India, and Pakistan through Schoolhouse.world.",
      "Led an AI education session for students at Vivekanand High School."
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

  // Not ready yet: a simple "upcoming" card with just the title.
  if(!p.ready){
    const card = el('article', 'card featured-card is-upcoming reveal');
    const body = el('div', 'featured-body');
    const eyebrow = el('div', 'eyebrow');
    eyebrow.appendChild(el('span', 'status-pill', 'Upcoming'));
    eyebrow.appendChild(document.createTextNode('TBD'));
    body.appendChild(eyebrow);
    const title = el('h3', 'card-title'); title.textContent = p.name; body.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);
    return;
  }

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
  }

  const body = el('div', 'featured-body');
  body.appendChild(el('div', 'eyebrow', 'Featured Discovery Project'));
  const title = el('h3', 'card-title'); title.textContent = p.name; body.appendChild(title);
  if(p.summary){ const summary = el('p', 'card-text'); summary.textContent = p.summary; body.appendChild(summary); }
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

  if(media.children.length) card.appendChild(media);
  else card.classList.add('no-media');
  card.appendChild(body);
  container.appendChild(card);
}

function renderProjects(container){
  projects.forEach(p => {
    const card = el('article', 'card project-card reveal' + (p.wide ? ' is-wide' : ''));
    const media = el('div', 'project-image');
    if(p.image){
      card.classList.add('has-image');
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.imageAlt || (p.name + ' screenshot');
      img.loading = 'lazy';
      media.appendChild(img);
    } else {
      media.classList.add('is-placeholder');
      const label = el('span', 'placeholder-label');
      label.textContent = p.placeholder || p.name;
      media.appendChild(label);
    }

    const body = el('div', 'project-body');
    if(p.eyebrow){ const e = el('div', 'eyebrow'); e.textContent = p.eyebrow; body.appendChild(e); }
    body.appendChild(el('h3', 'card-title', p.name));
    body.appendChild(el('p', 'card-text', p.description || ''));

    const extra = [];
    if(p.points && p.points.length){
      const ul = el('ul', 'points');
      p.points.forEach(pt => { const li = el('li'); li.textContent = pt; ul.appendChild(li); });
      extra.push(ul);
    }
    if(p.tags && p.tags.length){
      const tags = el('ul', 'tag-list');
      p.tags.forEach(t => { const li = el('li'); li.textContent = t; tags.appendChild(li); });
      extra.push(tags);
    }
    if(extra.length){
      if(p.wide){
        extra.forEach(x => body.appendChild(x));
      } else {
        // keep regular cards the same size: bullets and tools live behind a "Details" toggle
        const details = el('details', 'card-details');
        details.appendChild(el('summary', '', 'Details'));
        extra.forEach(x => details.appendChild(x));
        body.appendChild(details);
      }
    }

    const links = el('div', 'link-row');
    if(p.github) links.appendChild(linkBtn('GitHub', p.github, 'is-dark'));
    if(p.devpost) links.appendChild(linkBtn('Devpost', p.devpost));
    if(p.demo) links.appendChild(linkBtn('Live demo', p.demo));
    if(p.website || p.url) links.appendChild(linkBtn('Website', p.website || p.url));
    if(links.children.length) body.appendChild(links);

    card.append(media, body);
    container.appendChild(card);
  });
}

function renderResearch(container){
  research.forEach(r => {
    const card = el('article', 'card research-card reveal' + (r.upcoming ? ' is-upcoming' : ''));
    const eyebrow = el('div', 'eyebrow');
    if(r.upcoming) eyebrow.appendChild(el('span', 'status-pill', 'Upcoming'));
    eyebrow.appendChild(document.createTextNode(r.venue));
    const title = el('h3', 'card-title'); title.textContent = r.title;
    if(r.logo && r.logo.src){
      // organization logo sits to the right of the eyebrow and title
      const head = el('div', 'research-head');
      const text = el('div');
      text.append(eyebrow, title);
      const logo = document.createElement('img');
      logo.className = 'org-logo';
      logo.src = r.logo.src;
      logo.alt = r.logo.alt || '';
      head.append(text, logo);
      card.appendChild(head);
    } else {
      card.append(eyebrow, title);
    }

    if(r.points && r.points.length){
      const ul = el('ul', 'points');
      r.points.forEach(pt => { const li = el('li'); li.textContent = pt; ul.appendChild(li); });
      card.appendChild(ul);
    }

    if(r.figure && r.figure.src){
      const fig = el('figure', 'research-figure');
      const img = document.createElement('img');
      img.src = r.figure.src;
      img.alt = r.figure.alt || r.title;
      img.loading = 'lazy';
      fig.appendChild(img);
      if(r.figure.caption){ const cap = el('figcaption'); cap.textContent = r.figure.caption; fig.appendChild(cap); }
      card.appendChild(fig);
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
