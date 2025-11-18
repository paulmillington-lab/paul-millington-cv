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
      scope: 'Responsible for building and leading MindGym\'s global operations capability across Client & Coach Operations, Shared Services, Vendor Management, Business Systems Architecture, IT Service Management, and Change Implementation. Accountable for operational processes, delivery governance, global scheduling, capacity planning, and integration of platforms such as Salesforce, NetSuite, Administrate, and Coaching.com. Led 300+ FTE globally and managed a multi-million-pound operational budget, partnering with the CEO and CFO to shape the enterprise operating model, technology roadmap, and service standards.',
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
      scope: 'Accountable for operational excellence, customer experience, and compliance programmes across regulated UK organisations. Responsible for CX framework design, onboarding experience development, knowledge management, workflow governance, and embedding operational controls across multiple client brands. Supported operational leaders in improving service standards, onboarding processes, digital learning adoption, and compliance alignment.',
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
      scope: 'Led global customer care operations serving SME and enterprise merchants across the UK, Europe, India, the Philippines, and Latin America. Accountable for service delivery, contact centre strategy, regulatory process ownership, partner management, operational governance, and customer support policy design. Oversaw in-house and BPO teams, workforce planning, service standards, and global operational controls.',
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
      scope: 'Reported to the UK Managing Director with accountability for Customer Service, Retention, Chargeback Operations, and Merchant Onboarding. Led a 1,000-seat operation and owned operational strategy, financial governance, multi-site delivery, regulatory compliance, and the operating model during major M&A integration. Responsible for CRM transitions, digital support channel oversight, workforce planning, and operational governance frameworks.',
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
const detailScope = document.getElementById('detailScope');
const achievementsGrid = document.getElementById('achievementsGrid');
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

  // Render scope & responsibilities section
  if (detailScope) {
    if (role.scope) {
      detailScope.innerHTML = `
        <h4>Scope & Responsibilities</h4>
        <p>${role.scope}</p>
      `;
    } else {
      detailScope.innerHTML = '';
    }
  }

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
  const achievementIds = {
    'Led global operations of 1,000+ FTE across four continents.': 'impact-global-ops',
    'Delivered multimillion-pound savings via automation and vendor optimisation.': 'impact-automation',
    'Achieved +10 NPS uplift and 40% fewer service issues through CX transformation.': 'impact-cx',
    'Cut onboarding time from 5 days to under 24 hours using automated KYC.': 'impact-automation-kyc',
    'Balanced compliance and commercial goals in FCA-regulated environments.': 'impact-compliance',
  };
  profile.achievements.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'panel__card';
    const id = achievementIds[item] || '';
    card.id = id;
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

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

renderTimeline();
renderAchievements();
renderLists();
setActive(0);
