'use client';


export default function BenefitsSection() {
  const sections = [
    {
      title: 'Valuable Features',
      heading: 'Don’t Stop There is More…',
      subheading:
        'Adapt our platform to suit your unique business needs with flexible, scalable solutions designed to grow with you.',
      columns: 3,
      cards: [
        {
          title: 'Reputation Management',
          description: 'Monitor result performance with real time insights.',
          icon: 'https://framerusercontent.com/images/g0IzcQ8nVLVDKLftRrR4S6BPODs.svg',
          image: './assets/img/F1 Reputation management.png',
        },
        {
          title: 'Agreements / Contracts',
          description: 'Plan and schedule content across all platforms.',
          icon: 'https://framerusercontent.com/images/k6femoT7icmuqmWn0BhOEtCzIo.svg',
          image: './assets/img/F2 Agreements & contracts.png',
        },
        {
          title: 'Team Collaboration',
          description: 'Collaborate with team using all in one team inbox.',
          icon: 'https://framerusercontent.com/images/J99C1i2fb1NT2M6psXb0G98jgk.svg',
          image: 'https://framerusercontent.com/images/A7cCrglKezIsVIm88768rZVcFJo.png',
        },
      ],
    },
    {
      columns: 2,
      cards: [
        {
          title: 'Wordpress',
          description: "Access Wordpress & it's all features from Myskript itself.",
          icon: 'https://framerusercontent.com/images/UX7V6iQCHgJV9wGD6nh5qQJEa8.svg',
          image: './assets/img/F3 Wordpress.png',
        },
        {
          title: 'Customizable Dashboards',
          description: 'Adapt your workspace to highlight critical metrics.',
          icon: 'https://framerusercontent.com/images/XBuXmqS11zJWm9Z9ADQGF1MwEAg.svg',
          image: './assets/img/F4 Dashboard.png',
        },
      ],
    },
    {
      columns: 3,
      cards: [
        {
          title: 'Forms & Surveys',
          description: 'Create your own forms & surveys with premade templates.',
          icon: 'https://framerusercontent.com/images/g0IzcQ8nVLVDKLftRrR4S6BPODs.svg',
          image: './assets/img/F5 Forms & Surveys.png',
        },
        {
          title: 'Webinar Funnels',
          description: 'Launch "On Demand Webinar" or "Live Webinar" in seconds.',
          icon: 'https://framerusercontent.com/images/k6femoT7icmuqmWn0BhOEtCzIo.svg',
          image: './assets/img/F6 Webinar Funnels.png',
        },
        {
          title: 'Stores',
          description: 'Create & launch your store in minutes with 500+ templates',
          icon: 'https://framerusercontent.com/images/J99C1i2fb1NT2M6psXb0G98jgk.svg',
          image: './assets/img/F7 Stores.png',
        },
      ],
    },
    {
      columns: 2,
      cards: [
        {
          title: 'Reporting & Analytics',
          description:
            'Get Facebook Ads, Google Ads & many more reports & analytics in live mode.',
          icon: 'https://framerusercontent.com/images/UX7V6iQCHgJV9wGD6nh5qQJEa8.svg',
          image: './assets/img/F8 Reporting & Analysis.png',
        },
        {
          title: 'Ad Manager',
          description:
            'Plan, create & launch Facebook & Google campaigns from Myskript itself.',
          icon: 'https://framerusercontent.com/images/XBuXmqS11zJWm9Z9ADQGF1MwEAg.svg',
          image: './assets/img/F2 Agreements & contracts.png',
        },
      ],
    },
    {
      columns: 3,
      cards: [
        {
          title: 'Media Folder',
          description: 'Use media folder as free storage room for your important files.',
          icon: 'https://framerusercontent.com/images/g0IzcQ8nVLVDKLftRrR4S6BPODs.svg',
          image: './assets/img/F9 Media Folder.png',
        },
        {
          title: 'WebChat',
          description: 'Launch any type of Webchat on your website in seconds.',
          icon: 'https://framerusercontent.com/images/k6femoT7icmuqmWn0BhOEtCzIo.svg',
          image: './assets/img/F10 tasks in CRM.png',
        },
        {
          title: 'Tasks in CRM',
          description: "Now create tasks in CRM on the go so you don't miss them.",
          icon: 'https://framerusercontent.com/images/J99C1i2fb1NT2M6psXb0G98jgk.svg',
          image: './assets/img/F2 Agreements & contracts.png',
        },
      ],
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <section className="py-5 bg-white" key={index}>
          <div className="max-w-7xl mx-auto px-4">
            {index === 0 && (
              <div className="text-center pt-5">
            <div
  style={{
    display: "inline-block",
    marginBottom: "1rem",         // mb-4
    padding: "0.25rem 1rem",      // py-1 px-4
    borderRadius: "9999px",       // rounded-full
background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    color: "#ffffff",             // text-white
    fontSize: "0.875rem",         // text-sm
    fontWeight: 600,              // font-semibold
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)" // shadow-sm
  }}
>
  {section.title}
</div>

                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                  {section.subheading}
                </p>
              </div>
            )}
            <div className={`grid grid-cols-1 md:grid-cols-${section.columns} gap-8`}>
              {section.cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-6 rounded-3xl shadow-lg flex flex-col justify-between text-left"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                    <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <img src={card.icon} alt={`${card.title} Icon`} width={20} height={20} />
                    </div>
                  </div>
                 <img
  src={card.image}
  alt={`${card.title} Screenshot`}
  width={600}
  height={350}
  className="rounded-xl mt-4 w-full h-auto object-cover"
/>

                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
