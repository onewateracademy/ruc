import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EventsData {
  topEvents = [
    {
      topic: "RUC Summit",
      date: "January 25-26, 2018",
      speakers: [
        "Lester Sola",
        "Sudhir Murthy",
        "Hardeep Anand",
        "Susanne Torriente",
      ],
      desc:
        'The Resilient Utility Coalition Summit brought together water, wastewater, and storm water utilities with industry, academia, and the greater community with the objective to advance utility infrastructure efforts - to "Operationalize Resilience."',
      thumbnail: "assets/resources/ruc_summit/ruc-submmit-thumb.jpg",
      files: [
        {
          name: "RUC Vision and Mission Slides",
          url: "assets/resources/ruc_summit/RUC Vision and Mission Slides.pptx",
          type: "ppt",
        },
        {
          name: "6 Organizing Goals",
          url: "assets/resources/ruc_summit/6 Organizing Goals.JPG",
          type: "img",
        },
      ],
    },
  ];

  pastEvents = [
    {
      topic: "RUC Visioning Workshop",
      date: "August 18 2016",
      speakers: [],
      desc: `The Resilient Utility Coalition (RUC) seeks to bring together utilities, the water industry, professional organizations, and academia to develop strategies that will advance utility infrastructure resiliency efforts and provide essential value to its members and partners. The coalition's goal is to provide leadership in adapting utility operations to address the potential effects of climate change. The group seeks to ehance usefulness of climate science by developing adaptation strategies and improving water management decision-making in the face of climate uncertainty.`,
      thumbnail: "assets/resources/ruc_visioning_workshop/thumb.jpg",
      files: [
        {
          name: "Event Flyer",
          url: "assets/resources/ruc_visioning_workshop/Flyer.pdf",
          type: "img",
        },

        {
          name: "RUC Visioning Report",
          url:
            "assets/resources/ruc_visioning_workshop/RUC Visioning Report.pdf",
          type: "pdf",
        },
        {
          name: "RUC Program",
          url: "assets/resources/ruc_visioning_workshop/Program.pdf",
          type: "pdf",
        },
        {
          name: "Partnering with DOE on the Water-Energy Nexus",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/DASEK_ALICE_DOE.pptx",
          type: "ppt",
        },
        {
          name: "EPA's Climate Ready Water Utilities",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/EPA's Climate Ready Water Utilities.pdf",
          type: "pdf",
        },
        {
          name:
            "EPA’s Climate Ready Water Utilities:Supporting Utilities Adapting to the Impacts of Climate Change",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/FRIES_STEVE_EPA.pptx",
          type: "ppt",
        },
        {
          name:
            "HOW MIAMI-DADE IS ADAPTING AND BUILDING RESILIENCE ON MULTIPLE LEVELS THROUGH COLLABORATION",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/HEFTY_NICHOLE_RER.pptx",
          type: "ppt",
        },
        {
          name:
            "How Miami-Dade is Adapting and Building Resilience on Multiple Levels Through Collaboration",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/How Miami-Dade is Adapting and Building Resilience on Multiple Levels Through Collaboration.pdf",
          type: "pdf",
        },
        {
          name: "Operationalizing Resilience in Water Utilities",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/Operationalizing Resilience in Water Utilities.pdf",
          type: "pdf",
        },
        {
          name: "Partnering with DOE on the Water-Energy Nexus",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/Partnering with DOE on the Water-Energy Nexus.pdf",
          type: "pdf",
        },
        {
          name: "Resilient Utility Coalition Visioning Workshop Reporting",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/Resilient Utility Coalition Visioning Workshop Reporting.pdf",
          type: "pdf",
        },
        {
          name: "RUC Visioning Workshop",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/RUC Visioning Workshop PPT.pptx",
          type: "ppt",
        },
        {
          name: "RUC Visioning Report",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/RUC_VIS_RPRT.pptx",
          type: "ppt",
        },
        {
          name: "Sponsors' Logos",
          url:
            "assets/resources/ruc_visioning_workshop/Presentations/Sponsors_Logos_R02.pptx",
          type: "ppt",
        },
      ],
    },
    {
      topic: "MOCOA Fundraiser",
      date: "June 8 2017",
      speakers: [],
      desc: `On April 2, 2017, mudslides in the rural village of Mocoa, Colomia killed more than 300 people and displaced hundreds more. As a result, the majority of villagers still lack basic necessities as they begin to rebuild. The Association of Colombian Civil Engineers and the Resilient Utility Coalition invite you to come help us support the victims of this tragedy.`,
      thumbnail: "assets/resources/mocoa/MOCOA Fundraiser Flyer.gif",
      files: [
        {
          name: "MOCOA Fundraiser Flyer",
          url: "assets/resources/mocoa/MOCOA Fundraiser Flyer.gif",
          type: "img",
        },
      ],
    },
    {
      topic: "Tech Talk - Kick-Off",
      date: "June 8 2017",
      speakers: ["Laurens van der Tak P.E.", "Jason Bird"],
      desc: `RUC Tech Talk Series Kick-off - This initiative is a continuation of RUC’s mission for serving as a facilitator for communication and knowledge sharing, regarding topics relevant to the development of joint strategies and actions to achieve resilience within our utilities.`,
      thumbnail: "assets/resources/tt_kick_off/Tech Talk Kick-Off Flyer.jpg",
      files: [
        {
          name: "Tech Talk Kick-Off Flyer",
          url: "assets/resources/tt_kick_off/Tech Talk Kick-Off Flyer.jpg",
          type: "img",
        },
        // {
        //   name:
        //     "ONE WATER ACADEMY AND RESILIENT UTILITIES COALITION Partnening Proposal",
        //   url:
        //     "assets/resources/tt_kick_off/ONE WATER ACADEMY AND RESILIENT UTILITIES COALITION_UPDATED Jose and Hardeep.pdf",
        //   type: "pdf",
        // },
        // {
        //   name: "RUC 2017 Training Curriculum",
        //   url: "assets/resources/tt_kick_off/RUC 2017 Training Curriculum.pdf",
        //   type: "pdf",
        // },
        {
          name: "Enhancing Utility Resilience",
          url:
            "assets/resources/tt_kick_off/Presentations/Enhancing Utility Resilience.pdf",
          type: "ppt",
        },
      ],
    },
    {
      topic:
        "Tech Talk - J100 on a Budget: Maximizing the Benefits Derived from a J100 RAMCAP Risk Assessment while Managing Costs",
      date: "August 24 2017",
      speakers: ["Perry Gayle Ph.D, P.E., LEED AP"],
      desc: `This presentation focused on the application of the J100 standard, and how to utilize it to direct the design and evaluation of options to reduce risk and enhance resilience, support resource allocation decisions to risk-reduction and resilience-enhancement options, impliment Risk Analysis and Management for Critical Asset Protection (RAMCAP), and ultimately reduce risk and enhance resilience of utilities in a cost-effective manner.`,
      thumbnail: "assets/resources/tt_j100/Flyer - TT J100 on a Budget.jpg",
      files: [
        {
          name: "Flyer - TT J100 on a Budget",
          url: "assets/resources/tt_j100/Flyer - TT J100 on a Budget.jpg",
          type: "img",
        },
        {
          name: "P. Gayle - J100 on a Budget",
          url:
            "assets/resources/tt_j100/Presentations/P. Gayle - J100 on a Budget.pptx",
          type: "ppt",
        },
      ],
    },
    {
      topic:
        "Tech Talk - Security Starts Here: Homeland Security Starts with Hometown Security",
      date: "May 23 2018",
      speakers: [
        "Matthew Frost, Protective Security Advisor, U.S. Department of Homeland Security",
      ],
      desc: `This presentation includes information on DHS tools and services to assess the vulnerability of critical infrastructure including water and wastewater treatment plants. Hazards considered range from natural hazards to manmade, including site safety and cybersecurity assessments. Assessment tools include dashboards that provide a resilience measure index score including a comparison to similar facilities across the nation.`,
      thumbnail:
        "assets/resources/tt_security/Flyer - TT Security Starts Here.JPG",
      files: [
        {
          name: "Flyer - TT Security Starts Here",
          url:
            "assets/resources/tt_security/Flyer - TT Security Starts Here.JPG",
          type: "img",
        },
        {
          name: "Homeland Security Starts with Hometown Security",
          url:
            "assets/resources/tt_security/Homeland Security Starts with Hometown Security.pptx",
          type: "ppt",
        },
        {
          name: "DHS Resources Guide",
          url:
            "assets/resources/tt_security/DHS Resources Guide.pdf",
          type: "img",
        },
      ],
    },
    {
      topic: "Tech Talk - Identifying Risk and Understanding Funding Options",
      date: "October 3 2018",
      speakers: [
        "Katherine Hageman, Resiliency Program Manager, Adaptation, Miami-Dade County",
        "Tony Vesay, P.E., PMP, LEED AP, Executive Program Manager, King-Ardurra",
        "Adam Faschan, Ph.D, P.E., Senior Project Manager, King-Ardurra",
      ],
      desc: `Understanding which assets are most vulnerable to climate change impacts and their criticality to operations can help utilities prioritize investments and prepare them to take advantage of funding opportunities. Speakers shared a process for this analysis including estimating the cost of incremental adaptation as a part of a captial improvement plan. Information on funding programs and strategies were also provided.`,
      thumbnail: "assets/resources/tt_risk/Flyer - TT Identifying Risk.png",
      files: [
        {
          name: "Flyer - TT Identifying Risk",
          url: "assets/resources/tt_risk/Flyer - TT Identifying Risk.png",
          type: "img",
        },
        {
          name: "Recovery & Resiliency Funding",
          url: "assets/resources/tt_risk/Recovery & Resiliency Funding.pptx",
          type: "ppt",
        },
      ],
    },
    {
      topic: "Tech Talk - Energy Resilience for Utilities",
      date: "March 7 2019",
      speakers: [
        "Jennifer Jurardo, Ph.D, Chief Resiliency Officer, Director, Broward County",
        "Michael Case, P.E., LEED AP Vice President, Energy, WSP USA",
        "Warren D. Andrews, P.E., Vice President, WSP USA",
      ],
      desc: `This Tech Talk discussed how the electric utilities are strengthening their own infrastructure and reviewed various technology and market trends, such as distributed energy resources and microgrids. Speakers shared variuos strategies being employed in our region to deliver targeted energy reductions, reduce emissions, and expand renwable energy portfolios.`,
      thumbnail: "assets/resources/tt_energy/Flyer - TT Energy.png",
      files: [
        {
          name: "Flyer - TT Energy",
          url: "assets/resources/tt_energy/Flyer - TT Energy.png",
          type: "img",
        },
        {
          name: "TT Combined Presentations",
          url: "assets/resources/tt_energy/TT Combined Presentations.pdf",
          type: "pdf",
        },
      ],
    },
    {
      topic:
        "NYC Green Stormwater Infrastructure Program:Opportunities and Lessons Learned",
      date: "October 17 2019",
      speakers: [
        "Hardeep Anand, P.E., Deputy Director, Miami-Dade Water & Sewer Department",
        "Pinar Balci, Ph.D., Assistant Commissioner, New York City Department of Environmental Protection, Matthew Jones",
        "Sandeep Mehrotra, Hazen and Sawyer",
      ],
      desc: `This Tech Talk discussed the roles of water utilities and incentives provided to promote successful implementation of stormwater green infrastructure. The City of New York presented the opportunities and lessons learned in advancing the largest and most recognized program in the nation to improve local water quality. Speakers shared various innovative strategies being employed to implement green infrastructure, or stormwater source controls, to manage stormwater runoff, reduce sewer overflows and improve water quality in NYC waterways. `,
      thumbnail: "assets/resources/tt_nyc/thumb.jpg",
      files: [
        {
          name: "Flyer - TT NYC Green",
          url: "assets/resources/tt_nyc/Flyer - TT NYC Green.pdf",
          type: "pdf",
        },
        {
          name: "GI Balci RUC",
          url: "assets/resources/tt_nyc/GI_Balci_RUC_Talk.pdf",
          type: "ppt",
        },
      ],
    },
  ];
}
