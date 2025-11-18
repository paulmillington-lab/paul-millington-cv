const profile = {
  name: 'Paul Millington',
  summary:
    'Strategic and results-driven Global Operations Director with expertise in AI-led operations, automation, vendor optimisation and scalable delivery models.',
  workHistory: [
    {
      role: 'Global Customer Operations Director',
      company: 'MindGym',
      dates: 'Oct 2022 – Present',
      location: 'Gateshead',
      scale: ['£5m budget', '300+ FTE', '30+ countries'],
      highlights: [
        'Built and scaled global operations to support FTSE100 and Fortune 500 clients across 30+ countries.',
        'Led global AI, automation and process redesign programmes, rolling out AI-assisted scheduling and forecasting tools.',
        'Cut service issues by 40% via a new operations centre, service recovery controls and predictive analytics.',
        'Delivered 25% cost savings and £1m vendor savings through model redesign and supplier optimisation.',
        'Eliminated 60% of manual processes with Salesforce, NetSuite and Administrate automation; embedded data-driven decisions via JIRA, Clockify and Power BI.',
      ],
    },
    {
      role: 'European Director, Operational Excellence',
      company: 'Firstsource',
      dates: 'Apr 2021 – Oct 2022',
      location: 'United Kingdom',
      scale: ['1,500+ hires onboarded', 'Multi-client coverage'],
      highlights: [
        'Improved NPS by +10 points for a major bank while cutting FCA complaints by 25%.',
        'Reduced handling time by 15% through workflow optimisation and knowledge management uplift.',
        'Lowered early-life attrition by 20% through redesigned onboarding journeys.',
        'Implemented standardised QA frameworks across multiple regulated clients.',
        'Launched a digital learning platform for a Tier 1 global bank.',
      ],
    },
    {
      role: 'Global Head of Customer Care',
      company: 'FIS Worldpay',
      dates: 'Jan 2019 – Jan 2021',
      location: 'Gateshead',
      scale: ['650 FTE', '4 global delivery centres'],
      highlights: [
        'Led a 650-FTE global customer care organisation across the UK, Philippines, Colombia and India.',
        'Cut operating costs by 30% with chatbot, video support and co-browsing self-service.',
        'Delivered £1m+ savings through vendor consolidation and onboarding a new strategic BPO.',
        'Improved First Contact Resolution by 10% with redesigned FCA-regulated complaint handling.',
        'Introduced global delivery standards to improve consistency across regions.',
      ],
    },
    {
      role: 'Senior Vice President, UK Operations',
      company: 'Worldpay',
      dates: 'Jan 2016 – Jan 2019',
      location: 'Gateshead',
      scale: ['1,000-seat operation', 'Chargebacks & onboarding'],
      highlights: [
        'Accountable for Service, Retention, Chargebacks and Onboarding across a 1,000-seat operation.',
        'Reduced cost-to-serve by £3m annually by consolidating service sites post-M&A.',
        'Automated chargeback processing (Chargebacks911) improving accuracy and speed.',
        'Reduced onboarding time from 5 days to under 24 hours through automated KYC.',
        'Delivered 30% OPEX reduction via digital self-service (chatbots, co-browsing).',
      ],
    },
  ],
  achievements: [
    'Led global operations of 1,000+ FTE across four continents.',
    'Delivered multimillion-pound savings via automation and vendor optimisation.',
    'Achieved +10 NPS uplift and 40% fewer service issues through CX transformation.',
    'Cut onboarding time from 5 days to under 24 hours using automated KYC.',
    'Balanced compliance and commercial goals in FCA-regulated environments.',
  ],
  certifications: [
    'Google AI Leadership Certification',
    'Generative AI Leadership Specialisations',
    'Prompt Engineering and Applied GenAI',
    'Responsible AI and Governance',
    'AI Productivity Tools and Integration',
  ],
  education: [
    'Masters Degree, Management (International Payments Ecosystem) — Middlesex University',
  ],
};

const timelineTrack = document.getElementById('timelineTrack');
const detailDates = document.getElementById('detailDates');
const detailRole = document.getElementById('detailRole');
const detailCompany = document.getElementById('detailCompany');
const detailLocation = document.getElementById('detailLocation');
const detailHighlights = document.getElementById('detailHighlights');
const detailMetrics = document.getElementById('detailMetrics');
const achievementsGrid = document.getElementById('achievementsGrid');
const roleCards = document.getElementById('roleCards');
const certList = document.getElementById('certList');
const educationList = document.getElementById('educationList');
const yearSpan = document.getElementById('year');

let activeIndex = 0;

const createNode = (role, idx) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'timeline__node';
  wrapper.role = 'listitem';

  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.index = idx;
  button.innerHTML = `
    <p class="eyebrow">${role.dates}</p>
    <h4>${role.role}</h4>
    <p>${role.company}</p>
  `;

  button.addEventListener('click', () => setActive(idx));
  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      setActive(Math.min(idx + 1, profile.workHistory.length - 1));
      event.preventDefault();
    }
    if (event.key === 'ArrowLeft') {
      setActive(Math.max(idx - 1, 0));
      event.preventDefault();
    }
  });

  wrapper.appendChild(button);
  return wrapper;
};

const renderTimeline = () => {
  if (!timelineTrack) return;
  profile.workHistory.forEach((role, idx) => {
    const node = createNode(role, idx);
    timelineTrack.appendChild(node);
  });
};

const setActive = (idx) => {
  activeIndex = idx;
  const role = profile.workHistory[idx];
  const nodes = document.querySelectorAll('.timeline__node');
  nodes.forEach((node, nodeIdx) => node.classList.toggle('active', nodeIdx === idx));

  detailDates.textContent = role.dates;
  detailRole.textContent = role.role;
  detailCompany.textContent = role.company;
  detailLocation.textContent = role.location;

  detailMetrics.innerHTML = '';
  role.scale.forEach((metric) => {
    const chip = document.createElement('span');
    chip.textContent = metric;
    detailMetrics.appendChild(chip);
  });

  detailHighlights.innerHTML = '';
  role.highlights.forEach((point) => {
    const li = document.createElement('li');
    li.textContent = point;
    detailHighlights.appendChild(li);
  });

  nodes[idx].scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
};

const renderAchievements = () => {
  if (!achievementsGrid) return;
  profile.achievements.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'panel__card';
    card.innerHTML = `<strong>Impact</strong><p>${item}</p>`;
    achievementsGrid.appendChild(card);
  });
};

const renderLists = () => {
  if (certList) {
    profile.certifications.forEach((cert) => {
      const li = document.createElement('li');
      li.textContent = cert;
      certList.appendChild(li);
    });
  }

  if (educationList) {
    profile.education.forEach((edu) => {
      const li = document.createElement('li');
      li.textContent = edu;
      educationList.appendChild(li);
    });
  }
};

const renderRoleCards = () => {
  if (!roleCards) return;
  profile.workHistory.forEach((role, idx) => {
    const card = document.createElement('article');
    card.className = 'role-card';

    const headerButton = document.createElement('button');
    headerButton.type = 'button';
    headerButton.className = 'role-card__header';
    headerButton.setAttribute('aria-expanded', 'false');
    headerButton.setAttribute('aria-controls', `role-body-${idx}`);
    headerButton.innerHTML = `
      <div>
        <p class="eyebrow">${role.dates}</p>
        <h3>${role.role}</h3>
        <span>${role.company} · ${role.location}</span>
      </div>
      <div class="role-card__chevron">⌄</div>
    `;

    const body = document.createElement('div');
    body.className = 'role-card__body';
    body.id = `role-body-${idx}`;
    body.innerHTML = `
      <div class="role-card__body-content">
        <div class="role-card__chips">
          ${role.scale.map((chip) => `<span>${chip}</span>`).join('')}
        </div>
        <div>
          <h4>Highlights</h4>
          <ul>
            ${role.highlights.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

    headerButton.addEventListener('click', () => {
      const isOpen = card.classList.toggle('open');
      headerButton.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        body.style.maxHeight = `${body.scrollHeight}px`;
      } else {
        body.style.maxHeight = '0px';
      }
    });

    headerButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        headerButton.click();
      }
    });

    card.appendChild(headerButton);
    card.appendChild(body);
    roleCards.appendChild(card);
  });
};
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

renderTimeline();
renderAchievements();
renderRoleCards();
renderLists();
setActive(0);
