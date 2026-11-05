// Past campaigns led or staffed by Michael Katz (Alternative Brand Marketing and agency partners).
// Photos live in /public/work. Width/height are the exported web sizes.

const img = (src, w, h, alt) => ({ src: `/work/${src}.webp`, w, h, alt })

export const featured = [
  {
    id: 'celsius',
    brand: 'Celsius',
    title: 'Arnold Sports Festival trade booth',
    type: 'Trade Show',
    where: 'Columbus, OH',
    summary:
      'Fitness-ready spokesmodel team for the Celsius booth at one of the largest fitness expos in the country: sampling, product education, influencer photo moments and a full weekend of crowd flow.',
    points: ['Spokesmodels & brand ambassadors', 'Sampling & product education', 'Influencer / social content support'],
    images: [
      img('celsius-team', 1800, 1200, 'Celsius brand ambassador team in branded athletic wear at the Arnold Sports Festival'),
      img('celsius-cheers', 1400, 933, 'Celsius ambassadors toasting with cans in front of the booth wall'),
      img('celsius-crew', 1400, 987, 'Celsius booth crew lined up in front of the HEAT and Sparkling wall'),
      img('celsius-booth', 1200, 583, 'Celsius booth staff in lab coats beside the branded cooler'),
      img('celsius-sampling', 1000, 750, 'Celsius team pouring samples at the booth'),
      img('celsius-selfie', 800, 533, 'Attendees taking a selfie with Celsius cans'),
    ],
  },
  {
    id: 'hm',
    brand: 'H&M',
    title: 'All Points West custom festival dome',
    type: 'Festival',
    where: 'Liberty State Park, NJ',
    agency: 'Revolution Marketing',
    summary:
      'A lit geodesic dome at the All Points West Music & Arts Festival with an H&M lounge, internet café and branded bar. We ran the on-site team that greeted, hosted and kept the dome full all weekend.',
    points: ['Custom build-out & footprint', 'Lounge, café & bar staffing', 'Three-day festival operation'],
    images: [
      img('hm-dome-night', 1800, 1350, 'H&M geodesic dome lit red and pink at night at All Points West'),
      img('hm-lounge', 1200, 900, 'Inside the H&M dome lounge with glowing H&M counters'),
      img('hm-bar', 1000, 750, 'H&M staff serving at the branded bar inside the dome'),
      img('hm-dome-day', 1200, 900, 'H&M dome on the festival grounds by day'),
      img('hm-cafe', 1000, 750, 'H&M Internet Café stations'),
    ],
  },
  {
    id: 'mtvu',
    brand: 'mtvU × HP × Intel',
    title: 'Sunblock Music Festival sponsor village',
    type: 'Concert',
    where: 'St. Louis, MO',
    agency: 'Revolution Marketing',
    summary:
      'Sponsor activation at mtvU’s Sunblock Music Festival: an HP and Intel registration booth, sweepstakes entry, LED-screen fan messaging and a crew working a crowd in the thousands.',
    points: ['Sponsor booth staffing', 'Sweepstakes & data capture', 'Large-crowd management'],
    images: [
      img('mtvu-crowd', 1600, 1200, 'Packed crowd in front of the main stage at mtvU Sunblock'),
      img('mtvu-booth-staff', 1200, 900, 'Brand ambassadors at the HP and Intel booth'),
      img('mtvu-booth', 1200, 900, 'mtvU Sunblock sponsor booth with red carpet entry'),
      img('mtvu-team', 1000, 750, 'Sunblock street team in branded tees'),
    ],
  },
  {
    id: 'boost',
    brand: 'Boost Mobile',
    title: 'Taco Truck Takeover mobile tour',
    type: 'Mobile Tour',
    where: 'Los Angeles, CA',
    agency: 'Massive Media',
    summary:
      'A wrapped Boost Mobile taco truck touring Los Angeles retail locations: free tacos, bilingual brand ambassadors and plan sign-ups at the curb, rain or shine.',
    points: ['Bilingual brand ambassadors', 'Retail-traffic driving', 'Multi-stop tour logistics'],
    images: [
      img('boost-truck-staff', 1400, 1050, 'Boost Mobile ambassadors at the branded taco truck'),
      img('boost-tent', 1200, 900, 'Boost Mobile tent with consumers lining up'),
      img('boost-storefront', 1200, 900, 'Boost Mobile tent and truck outside a retail store'),
      img('boost-team', 1000, 750, 'Boost Mobile tour team in front of the truck'),
    ],
  },
  {
    id: 'dunkin',
    brand: "Dunkin' Donuts",
    title: 'NYC Marathon start-village handout',
    type: 'Sports Event',
    where: 'Staten Island, NY',
    agency: 'Massive Media',
    summary:
      "Pre-dawn start-village activation at the New York City Marathon: a branded team handing out Dunkin' hats to thousands of runners before the start.",
    points: ['Large-scale distribution', 'Early-call crew management', 'Branded uniforms & logistics'],
    images: [
      img('dunkin-team', 1400, 1050, "Dunkin' team in pink and orange hats in front of the branded truck"),
      img('dunkin-handout', 1000, 750, "Ambassador handing a Dunkin' hat to a runner"),
      img('dunkin-crew', 1000, 750, "Dunkin' crew posing in front of the donut wall"),
    ],
  },
  {
    id: 'widmer',
    brand: 'Widmer Brothers',
    title: '“Free Rides” London taxi program',
    type: 'Guerrilla',
    where: 'San Francisco & Seattle',
    agency: 'Massive Media',
    summary:
      'Wrapped London black cabs offering free safe rides home after games and nights out — a responsible-drinking message riders could sit inside, with ambassadors working the pickup points.',
    points: ['Vehicle-wrap program', 'Driver & ambassador staffing', 'Responsible-drinking messaging'],
    images: [
      img('widmer-taxi', 1400, 1050, 'Widmer Brothers wrapped red London taxi'),
      img('widmer-taxi-front', 1000, 750, 'Front of the Widmer Brothers London taxi'),
      img('widmer-riders', 1000, 748, 'Riders posing with the Widmer Brothers taxi at night'),
    ],
  },
]

export const more = [
  {
    id: 'aqua',
    brand: 'AQUAhydrate',
    title: 'NYC field marketing & influencer events',
    type: 'Sampling',
    where: 'New York, NY',
    summary:
      'Season-long East Coast field program: street sampling teams, branded coolers and premium sampling at top-tier influencer events.',
    points: ['Street teams', 'Influencer event sampling', 'Monthly recaps & reporting'],
    images: [
      img('aqua-lineup', 1400, 788, 'AQUAhydrate team lined up behind a branded table'),
      img('aqua-street', 675, 900, 'AQUAhydrate street team with branded cooler in Manhattan'),
      img('aqua-crowd', 1000, 750, 'Consumers holding AQUAhydrate bottles at a street event'),
    ]
  },
  {
    id: 'activate',
    brand: 'Activate Drinks',
    title: 'Tri-state street fair sampling',
    type: 'Sampling',
    where: 'NY / NJ',
    summary:
      'Branded tents, wrapped van and high-volume cup sampling at tri-state street fairs, plus retail demos to drive trial to purchase.',
    points: ['High-volume sampling', 'Retail demos', 'Branded vehicle support'],
    images: [
      img('activate-sampling', 1200, 900, 'Activate ambassadors sampling at a street fair'),
      img('activate-van', 1400, 1050, 'Wrapped Activate van and tent'),
      img('activate-tent', 1000, 750, 'Crowd at the Activate tent'),
      img('activate-cups', 1000, 750, 'Rows of Activate sample cups'),
    ]
  },
  {
    id: 'remy',
    brand: 'Rémy Martin',
    title: 'VIP nightlife event',
    type: 'Nightlife',
    where: 'New Jersey',
    summary:
      'Spokesmodel and hosting team for a Rémy Martin VIP night: step-and-repeat, throne photo moment and premium pours.',
    points: ['Spokesmodels & hosts', 'VIP guest experience', 'Photo moments'],
    images: [
      img('remy-team', 1400, 933, 'Rémy Martin hosts in red dresses'),
      img('remy-throne', 1400, 933, 'Rémy Martin throne photo moment'),
      img('remy-backdrop', 1200, 800, 'Rémy Martin step-and-repeat'),
    ]
  },
  {
    id: 'cheesecake',
    brand: 'The Cheesecake Factory',
    title: 'Black Friday line activation',
    type: 'Guerrilla',
    where: 'New York, NY',
    agency: 'Hype',
    summary:
      'Overnight holiday team working the Black Friday lines in Manhattan with treats, gift-card offers and plenty of on-camera energy.',
    points: ['Overnight crew', 'Sampling & offers', 'Press-friendly moments'],
    images: [
      img('cheesecake-tent', 785, 463, 'The Cheesecake Factory holiday tent and team'),
      img('cheesecake-team', 800, 600, 'Cheesecake Factory team in holiday scarves and hats'),
      img('cheesecake-crew', 800, 600, 'Cheesecake Factory crew with branded gift bags'),
    ]
  },
  {
    id: 'namco',
    brand: 'Bandai Namco',
    title: 'Soulcalibur IV gaming tour',
    type: 'Mobile Tour',
    where: 'U.S. & Canada',
    summary:
      'Multi-city game-demo tour across gaming expos: playable stations, tournaments, giveaways and booth teams from Dallas to Toronto.',
    points: ['Multi-city tour', 'Demo stations & tournaments', 'Giveaways'],
    images: [
      img('namco-booth', 1200, 900, 'Soulcalibur IV demo booth with players'),
      img('namco-crowd', 1000, 750, 'Crowd at the Bandai Namco demo stations'),
      img('namco-display', 1000, 750, 'Soulcalibur IV branded display'),
    ]
  },
  {
    id: 'vino',
    brand: 'Vino',
    title: 'National trade-show program',
    type: 'Trade Show',
    where: 'Las Vegas & New York',
    summary:
      'Booth production and spokesmodel teams for alcohol-removed wine at national beverage and hospitality shows.',
    points: ['Booth production', 'Trade spokesmodels', 'Lead capture'],
    images: [
      img('vino-booth-team', 1400, 788, 'Vino booth team in branded tanks'),
      img('vino-booth', 1200, 675, 'Vino trade-show booth display'),
    ]
  },
  {
    id: 'sobe',
    brand: 'SoBe Adrenaline Rush',
    title: 'College campus tour',
    type: 'Campus',
    where: 'Northeast colleges',
    agency: 'Red Peg Marketing',
    summary:
      'Campus street teams, tailgates and Greek-life events putting cans in hands for SoBe Adrenaline Rush and No Fear.',
    points: ['Campus street teams', 'Tailgates & events', 'Cans-in-hands sampling'],
    images: [
      img('sobe-table', 640, 480, 'SoBe sampling table'),
      img('sobe-team', 640, 480, 'SoBe campus team'),
      img('sobe-campus', 640, 480, 'SoBe campus event group'),
    ]
  },
]

export const gallery = [
  img('deep-eddy', 1200, 900, 'Deep Eddy Vodka spokesmodels in polka-dot dresses'),
  img('talking-rain', 1200, 900, 'Sparkling ICE sampling team at a balloon festival'),
  img('food-truck', 1200, 900, 'Branded food truck activation'),
  img('grand-marnier-team', 720, 540, 'Grand Marnier event team in red polos'),
  img('canei-retail', 1000, 750, 'In-store wine tasting demo'),
  img('coors-light', 507, 900, 'Coors Light promo model'),
  img('jergens-balloon', 450, 600, 'Jergens giant balloon street activation in New York'),
]

export const brandGroups = [
  { group: 'Beverage & Spirits', names: ['PepsiCo', 'SoBe', 'No Fear', 'Celsius', 'AQUAhydrate', 'Coors Light', 'Bud Light', 'Rémy Martin', 'Grand Marnier', 'Captain Morgan', 'Drambuie', 'Deep Eddy Vodka', "Jerry's Vodka", 'Widmer Brothers', 'Activate', 'KeVita', 'Sparkling ICE', 'V8', 'ONE Coconut Water', 'Vino'] },
  { group: 'Food & Retail', names: ["McDonald's", "Dunkin'", 'The Cheesecake Factory', 'Best Buy', 'H&M', 'Family Dollar', 'Doritos', 'Giovanni Rana'] },
  { group: 'Media & Entertainment', names: ['MTV', 'mtvU', 'Bravo', 'Food Network', 'A&E', 'New York Post', 'The Wall Street Journal', 'Nitro Circus', 'Bandai Namco'] },
  { group: 'Tech & Finance', names: ['Boost Mobile', 'Virgin Mobile', 'HP', 'Intel', 'Toshiba', 'Philips', 'Twitter', 'Rosetta Stone', 'MasterCard', 'Geico'] },
  { group: 'CPG & Public Sector', names: ['Procter & Gamble', 'Jergens', 'U.S. Air Force', 'National Guard', 'Susan G. Komen'] },
]

export const agencies = ['Red Peg Marketing', 'Revolution Marketing', 'Massive Media', 'MKTG', 'Encore Nationwide', 'Passage Events', 'SoHo Experiential', 'Ubiquitous Media', 'Look Media', 'Hype', 'Crossmark']
