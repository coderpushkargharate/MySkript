
import React from "react";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-60 space-y-16" >
      <div className="text-center mb-12 px-5">
       <span
  style={{
    background: "linear-gradient(90deg, #2087FF 0%, #E60CEB 100%)",
    color: "#ffffff",
    padding: "0.25rem 1rem", // py-1 px-4
    borderRadius: "9999px", // rounded-full
    fontSize: "0.875rem", // text-sm
    fontWeight: 500, // font-medium
    display: "inline-block",
    marginBottom: "1rem"
  }}
>
  Top Features
</span>

        <h2 className="text-[1.8rem] 
    lg:text-[2.5rem]"
  style={{
    fontWeight: "500", // font-bold
    marginBottom: "1rem", // mb-4
    lineHeight: 1.2,
  }}
>
  Simple but still includes{" "}
  <span style={{ color: "#000000" }}>Tons of Features</span>
</h2>

<p
  style={{
    color: "#4B5563", // text-gray-600
    maxWidth: "42rem", // max-w-2xl (~672px)
    margin: "0 auto",
    lineHeight: 1.5,
  }}
>
  Adapt our platform to suit your unique business needs with flexible, <br />
  scalable solutions designed to grow with you.
</p>

      </div>

{/* Section 1: Funnel Builder */}
<div className="flex flex-col md:flex-row-reverse items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* On mobile, heading comes first */}
  <div className="block md:hidden w-full  mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2">
      BEAUTIFUL FUNNELS, WEBSITES, BLOGS
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage:
          "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Easiest Drag & Drop <br /> Funnel, Web Builder
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: right side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/F1- Drag Drop Web Builder.png"
      alt="Fully responsive websites"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: left side) */}
  <div className="md:w-1/2">
    {/* For desktop: show heading normally */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2">
        BEAUTIFUL FUNNELS, WEBSITES, BLOGS
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage:
            "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Easiest Drag & Drop <br /> Funnel, Web Builder
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Simple and easy to use drag & drop page builder we can use to create
      World class Funnels & Landing Pages within no time
    </p>
    <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base md:text-lg lg:text-xl">
      Insanely fast loading speeds + Fully Mobile Responsive
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-md">
      <li>
        2000+ pre-built and Professionally designed templates across 15+
        Niches
      </li>
      <li>
        Generate new leads to follow-up with again and again, even after
        they leave your page!
      </li>
      <li>A/B Split Testing</li>
    </ul>
    <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Wordpress, ClickFunnels, Wix, Kartra
      </span>
    </p>
  </div>
</div>


{/* Section 2: Automations */}
<div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* On mobile, heading comes first */}
  <div className="block md:hidden w-full mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Automation At Your Finger Tip
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage:
          "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Automations
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: left side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/2. automations.png"
      alt="Automation preview"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Section (mobile: after image, desktop: right side) */}
  <div className="md:w-1/2">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Automation At Your Finger Tip
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage:
            "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Automations
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Automate anything – Make your business processes a lot more automated
      with our training and reduce manual and repetitive tasks by at least 60%
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>
        <strong>Email and WhatsApp</strong> Nurture Sequences, Campaigns
      </li>
      <li>
        <strong>Create AI Bots!</strong> – Social Media DM's, Email and WhatsApp
      </li>
      <li>
        With our <strong>Chat-GPT built into automations</strong>, just put AI to
        work for you on automation
      </li>
    </ul>
    <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Activecampaign, Keap, Hubspot
      </span>
    </p>
  </div>
</div>


{/* Section 3: Ad Tracking */}
<div className="flex flex-col md:flex-row lg:flex-row-reverse items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile heading first */}
  <div className="block md:hidden w-full  mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      #1 AD TRACKING AND AI OPTIMISATION
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage:
          "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Feed AI by AD Tracking
    </h2>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/3. Feed AI.png"
      alt="Feed AI by AD Tracking Diagram"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Section */}
  <div className="md:w-1/2">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        #1 AD TRACKING AND AI OPTIMISATION
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage:
            "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Feed AI by AD Tracking
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      With Myskript's Exclusive Ad Tracking AI System, get at least 20% increase in ROI by feeding data back to Facebook and Google AI instantly and get more relevant and qualified leads!
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Operate on Revenue instead of Leads, CPC, CPM.</li>
      <li>Know exactly from which AD you got the sale.</li>
      <li>Track the whole Customer Journey with our CRM Module.</li>
      <li>Just one WhatsApp number for all your leads and your company.</li>
    </ul>
     <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">60% of HYROS</span>
    </p>
  </div>
</div>


     {/* Section 4: Ad Tracking */}
<div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full  mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Track Leads Precisely & Automate Reminders
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Opportunity Pipelines
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: left side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/4. Opportunity Pipelines.png"
      alt="Opportunity Pipelines Diagram"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: right side) */}
  <div className="md:w-1/2">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Track Leads Precisely & Automate Reminders
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Opportunity Pipelines
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Myskript's Sales or Opportunity Pipelines are designed to help you track your sales and increase conversions.
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Create as many pipelines & stages as you would like.</li>
      <li>Get an overview where your sales is heading in a glance.</li>
      <li>Automate follow-ups and reminders effortlessly when the stage in pipeline changes.</li>
    </ul>
   <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">Active Campaign, Hubspot, Keap, Pipedrive</span>
    </p>
  </div>
</div>

  {/* Section 5: Courses & Membership Areas */}
<div className="flex flex-col md:flex-row-reverse items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full  mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Ways to Build Communities With
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage:
          "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Courses, Communities<br />& Membership Areas
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: right side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/5. Membership & Courses.png"
      alt="Membership and Courses Dashboard"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Section (mobile: after image, desktop: left side) */}
  <div className="md:w-1/2">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Ways to Build Communities With
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage:
            "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Courses, Communities<br />& Membership Areas
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Give access to your content, test your students with assessments in an automated way and build your tribe!
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Courses with Inbuilt Video Hosting</li>
      <li>Community Spaces (Coming Soon)</li>
      <li><span className="font-bold">PWA Mobile APP</span> for your courses</li>
      <li>Students and Revenue Analytics built-in</li>
    </ul>
    <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Teachable, Kajabi, New Zenler, Knorish
      </span>
    </p>
  </div>
</div>




   {/* Section 6: All in One Team Inbox */}
<div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full  mb-6">
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      All in One Team Inbox
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: left side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/6. All in One Team Inbox.png"
      alt="All in One Team Inbox Preview"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: right side) */}
  <div className="md:w-1/2 md:pl-10">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        All in One Team Inbox
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Centralised communication with your prospects via{" "}
      <span className="font-semibold">
        Email, SMS, GMB, WhatsApp, Facebook, Instagram.
      </span>
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Get all your DM's into Synamate</li>
      <li>Automate your conversations with our Conversational AI</li>
      <li>Reply suggestions to leads and customers with AI</li>
      <li>Just one WhatsApp number for all your customers and your company</li>
    </ul>
   <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Wati, Interakt, Many Chat
      </span>
    </p>
  </div>
</div>


      

           {/* Section 7: C.R.M */}
<div className="flex flex-col md:flex-row-reverse items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full  mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Customer Relationship Management
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      C.R.M
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: right side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/7. CRM.png"
      alt="CRM System Preview"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: left side) */}
  <div className="md:w-1/2">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Customer Relationship Management
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        C.R.M
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Centralised communication with your prospects via{" "}
      <span className="font-semibold">
        Email, SMS, GMB, WhatsApp, Facebook, Instagram.
      </span>
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Track complete Customer Journey</li>
      <li>Smart Lists with advance segmentations</li>
      <li>Tags and custom fields for data capture</li>
      <li>Take notes and assign tasks to team members</li>
    </ul>
    <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Hubspot, Close, pipedrive
      </span>
    </p>
  </div>
</div>



        {/* Section 8: Email Marketing */}
<div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Email Marketing with AI
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Email Marketing
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: left side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="/assets/img/8. Email Maketing.png"
      alt="Email Marketing Builder Preview"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: right side) */}
  <div className="md:w-1/2 md:pl-10">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Email Marketing with AI
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Email Marketing
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Send highly personalised campaigns with our advanced segmentations and easy drag-n-drop email builder.
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Bulk Emails, Automation Sequences, 1:1 Emails</li>
      <li>A/B Testing for subject lines and email body</li>
      <li>Reporting and analytics for campaigns and sequences</li>
      <li>Generate content with AI inside of the builder</li>
    </ul>
     <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Mailchimp, Active Campaign, Mailerlite
      </span>
    </p>
  </div>
</div>


  {/* Section 9: Social Planner and Content Scheduling */}
<div className="flex flex-col md:flex-row-reverse items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full  mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Social Media Schedule at Scale
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Social Planner and <br />Content Scheduling
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: right side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/9. Social Planner.png"
      alt="Social Planner and Content Scheduling Preview"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: left side) */}
  <div className="md:w-1/2">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Social Media Schedule at Scale
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Social Planner and <br />Content Scheduling
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Plan and schedule posts, stories, reels (coming soon) across Facebook, Instagram, LinkedIn, Twitter.
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Image, content and hashtag generation with AI</li>
      <li>Save a ton of time with post approvals feature</li>
      <li>Collaboration made easy – whole team can work on it</li>
      <li>400+ Templates</li>
    </ul>
     <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Hoot Suite, Buffer
      </span>
    </p>
  </div>
</div>


{/* Section 10: WhatsApp */}
<div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl p-4 shadow-lg">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Create, Share, Get Booked
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      WhatsApp
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: left side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/12. Whatsapp.png"
      alt="WhatsApp Automation Preview"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: right side) */}
  <div className="md:w-1/2 md:pl-10">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Create, Share, Get Booked
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        WhatsApp
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Centralised communication with your prospects via <span className="font-semibold">Email, SMS, GMB, WhatsApp, Facebook, Instagram.</span>
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Meeting Reminders & Automations on any channel available</li>
      <li>Qualification Forms before booking, Get qualified appointments!</li>
    </ul>
    <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Wati, Aisensy, Double Tick
      </span>
    </p>
  </div>
</div>



{/* Section 11: Calendar Booking */}
<div className="flex flex-col md:flex-row-reverse items-center bg-gray-100 rounded-3xl p-4 shadow-lg my-8">
  {/* Mobile: Heading comes first */}
  <div className="block md:hidden w-full mb-6">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
      Create, Share, Get Booked
    </p>
    <h2
      className="text-[1.8rem] lg:text-[2.5rem]"
      style={{
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Calendar Booking
    </h2>
  </div>

  {/* Image Section (mobile: after heading, desktop: right side) */}
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img
      src="./assets/img/10. Calender Booking.png"
      alt="Calendar Booking Feature"
      className="rounded-xl max-w-full"
    />
  </div>

  {/* Text Content (mobile: after image, desktop: left side) */}
  <div className="md:w-1/2">
    {/* Desktop heading */}
    <div className="hidden md:block">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-2 uppercase">
        Create, Share, Get Booked
      </p>
      <h2
        className="text-[1.8rem] lg:text-[2.5rem]"
        style={{
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundImage: "linear-gradient(to right, #2e7af5ff, #8b5cf6, #7513c5ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Calendar Booking
      </h2>
    </div>

    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Send highly personalised campaigns with our advanced segmentations and easy drag-n-drop email builder.
    </p>
    <ul className="text-gray-700 list-disc list-inside space-y-1 mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
      <li>Creating calendar in as less as 30 seconds</li>
      <li>Round Robin - Calendar for Teams (Auto Assign Team)</li>
      <li>Meeting Reminders & Automations on any channel available</li>
      <li>Qualification Forms before booking, Get qualified appointments!</li>
    </ul>
     <a href="#pricing"><button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex items-center space-x-2">
      <span>Get Started For Free</span>
      <span>↗</span>
    </button></a>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-3">
      Replaces:
      <span className="text-blue-600 ml-1">
        Calendly, Tidycal, Acuity Scheduling
      </span>
    </p>
  </div>
</div>

    </section>
  );
}
