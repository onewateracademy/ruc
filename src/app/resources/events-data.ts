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
     // img: null,
    },
  ];

  pastEvents = [
    {
      topic: "RUC Visioning Workshop",
      date: "August 18 2016",
      speakers: [],
      desc: `The Resilient Utility Coalition (RUC) seeks to bring together utilities, the water industry, professional organizations, and academia to develop strategies that will advance utility infrastructure resiliency efforts and provide essential value to its members and partners. The coalition's goal is to provide leadership in adapting utility operations to address the potential effects of climate change. The group seeks to ehance usefulness of climate science by developing adaptation strategies and improving water management decision-making in the face of climate uncertainty.`,
     // img: null,
    },
    {
      topic: "MOCOA Fundraiser",
      date: "June 8 2017",
      speakers: [],
      desc: `On April 2, 2017, mudslides in the rural village of Mocoa, Colomia killed more than 300 people and displaced hundreds more. As a result, the majority of villagers still lack basic necessities as they begin to rebuild. The Association of Colombian Civil Engineers and the Resilient Utility Coalition invite you to come help us support the victims of this tragedy.`,
     // img: null,
    },
    {
      topic: "Tech Talk - Kick-Off",
      date: "June 8 2017",
      speakers: ["Laurens van der Tak P.E.", "Jason Bird"],
      desc: `RUC Tech Talk Series Kick-off - This initiative is a continuation of RUC’s mission for serving as a facilitator for communication and knowledge sharing, regarding topics relevant to the development of joint strategies and actions to achieve resilience within our utilities.`,
     // img: null,
    },
    {
      topic:
        "Tech Talk - J100 on a Budget: Maximizing the Benefits Derived from a J100 RAMCAP Risk Assessment while Managing Costs",
      date: "August 24 2017",
      speakers: ["Perry Gayle Ph.D, P.E., LEED AP"],
      desc: `This presentation focused on the application of the J100 standard, and how to utilize it to direct the design and evaluation of options to reduce risk and enhance resilience, support resource allocation decisions to risk-reduction and resilience-enhancement options, impliment Risk Analysis and Management for Critical Asset Protection (RAMCAP), and ultimately reduce risk and enhance resilience of utilities in a cost-effective manner.`,
     // img: null,
    },
    {
      topic:
        "Tech Talk - Security Starts Here: Homeland Security Starts with Hometown Security",
      date: "May 23 2018",
      speakers: [
        "Matthew Frost, Protective Security Advisor, U.S. Department of Homeland Security",
      ],
      desc: `This presentation includes information on DHS tools and services to assess the vulnerability of critical infrastructure including water and wastewater treatment plants. Hazards considered range from natural hazards to manmade, including site safety and cybersecurity assessments. Assessment tools include dashboards that provide a resilience measure index score including a comparison to similar facilities across the nation.`,
     // img: null,
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
     // img: null,
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
     // img: null,
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
     // img: null,
    },
  ];
}
