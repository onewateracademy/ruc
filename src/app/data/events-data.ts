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
          name: "B. Sheinbaum - Water Security is National Security",
          url: "https://www.dropbox.com/scl/fi/loo2h316r4dp5fbekbtmt/B.-Sheinbaum-Water-Security-is-National-Security.pptx?dl=0&rlkey=nputya42i61bpa5phwyue5w0s",
          type: "ppt",
        },

        {
          name: "C. Tamayo - Miami Beach",
          url: "https://www.dropbox.com/s/7bnrbqrfa10u3st/C.%20Tamayo%20-%20Miami%20Beach.pdf?dl=0",
          type: "ppt",
        },
        {
          name: "Garcia - The C-51 Reservoir Project",
          url: "https://www.dropbox.com/scl/fi/5rqx06nfegrmbhumpg4fj/Garcia-The-C-51-Reservoir-Project.pptx?dl=0&rlkey=m9s8k19dnkv7jif775rkwvz3v",
          type: "ppt",
        },
        {
          name: "J. Barksdale - Metropolitan Cities Accepting the Challenge",
          url: "https://www.dropbox.com/s/ti6alw64cgp4c7j/J.%20Barksdale%20-%20Metropolitan%20Cities%20Accepting%20the%20Challenge.pdf?dl=0",
          type: "ppt",
        },
        {
          name: "J. Kassel - Cybersecurity",
          url: "https://www.dropbox.com/scl/fi/ti4tltneyitpx58lh9v47/J.-Kassel-Cybersecurity.pptx?dl=0&rlkey=adjl6r7ys7ck5ww3vrpk76x3v",
          type: "ppt",
        },
        {
          name: "J. Murin - One Water Blueprint",
          url: "https://www.dropbox.com/scl/fi/hwoa61cbjzf3vobeftdk2/J.-Murin-One-Water-Blueprint.pptx?dl=0&rlkey=pyxloufmthotwq1b1r5lenel0",
          type: "ppt",
        },
        {
          name: "K. Dragash - Leveraging Merged Hydraulic Models",
          url: "https://www.dropbox.com/scl/fi/mjzfs4njg38oxxzxrbihz/K.-Dragash-Leveraging-Merged-Hydraulic-Models.pptx?dl=0&rlkey=me3kq6ch7rue4d15w2ez70tw4",
          type: "ppt",
        },
        {
          name: "K. Keiser - Managing Cybersecurity Risk",
          url: "https://www.dropbox.com/scl/fi/s5jji6moobym5xwql155y/K.-Keiser-Managing-Cybersecurity-Risk.pptx?dl=0&rlkey=9spr6legp2ejymyqnrnmqn936",
          type: "ppt",
        },
        {
          name: "L. Eshed - NDMA Free Water Reuse Process",
          url: "https://www.dropbox.com/scl/fi/eh0lxeev4mkt3v57psrmz/L.-Eshed-NDMA-Free-Water-Reuse-Process.pptx?dl=0&rlkey=d6yxcr684v26eit7yxd56j6ho",
          type: "ppt",
        },
        {
          name: "L. Patton - Attribution Science",
          url: "https://www.dropbox.com/scl/fi/kldnb45ok409nlvr035ud/L.-Patton-Attribution-Science.pptx?dl=0&rlkey=f0tgvwviytasrkudstq7j6bt6",
          type: "ppt",
        },
        {
          name: "M. Markus - Financing Investments in Resiliency",
          url: "https://www.dropbox.com/scl/fi/5xoehc1r90pg7fi0fb164/M.-Markus-Financing-Investments-in-Resiliency.pptx?dl=0&rlkey=q7trlswhk6ycsc0o1dsy04mk1",
          type: "ppt",
        },
        {
          name: "M. Schmidt - Salem Climate Change Adaptation Plan",
          url: "https://www.dropbox.com/scl/fi/v04h8rb2fs3yajgxw2186/M.-Schmidt-Salem-Climate-Change-Adaptation-Plan.pptx?dl=0&rlkey=l1ljibgrrmxyixpctt3iyutup",
          type: "ppt",
        },
        {
          name: "N. Kaiser - Embracing Innovation",
          url: "https://www.dropbox.com/scl/fi/yc1b9ek91b338thnoqsq3/N.-Kaiser-Embracing-Innovation.pptx?dl=0&rlkey=1sn40vgwwjfz4sogd10tf2692",
          type: "ppt",
        },
        {
          name: "P. Gayle - Lessons Learned",
          url: "https://www.dropbox.com/scl/fi/ngkmhy4uiv3fh1g9x832v/P.-Gayle-Lessons-Learned.pptx?dl=0&rlkey=0d1zg63nzn6hg577eleynb692",
          type: "ppt",
        },
        {
          name: "R. Brotchie - Planning for Deep Uncertainty",
          url: "https://www.dropbox.com/s/d3rdvkzd37k8rmn/R.%20Brotchie%20-%20Planning%20for%20Deep%20Uncertainty.pdf?dl=0",
          type: "ppt",
        },
        {
          name: "S. Siddique - NYCDEP Operational and Resiliency Planning",
          url: "https://www.dropbox.com/scl/fi/6wdi6hy5edoesqdsjme86/S.-Siddique-NYCDEP-Operational-and-Resiliency-Planning.pptx?dl=0&rlkey=y0co5l5y2okwcqvlc6vwwtv0z",
          type: "ppt",
        },
        {
          name: "6 Organizing Goals",
          url: "assets/resources/ruc_summit/6 Organizing Goals.JPG",
          type: "img",
        },
        {
          name: "2018 Summit Program",
          url: "assets/resources/ruc_summit/2018 Summit Program.pdf",
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
