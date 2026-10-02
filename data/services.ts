export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  whoIsItFor: string[];
  process: string[];
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "complying-development-certificate",
    slug: "complying-development-certificate",
    title: "Complying Development Certificate (CDC)",
    shortTitle: "CDC",
    tagline: "Fast-track approval for eligible residential projects — no council required.",
    description:
      "A Complying Development Certificate (CDC) is the fastest path to building approval for eligible projects. Skip the council DA process entirely and get your approval from a registered private certifier.",
    longDescription: `A Complying Development Certificate (CDC) is a combined planning and construction approval that can be issued by a private certifier instead of going through council — making it significantly faster for eligible projects.

To qualify for a CDC, your project must comply with the State Environmental Planning Policy (SEPP) — Exempt and Complying Development Codes. This includes many standard residential builds, alterations, additions, granny flats, and demolition works.

At Certify Right, we review your plans against the relevant SEPP codes upfront and guide you through the process clearly. If your project qualifies, we handle the assessment and issue your CDC efficiently — so you can start construction sooner.

Fadi Habbouche is a NSW Fair Trading Registered Building Surveyor (Class A3, BDC2868) with over 15 years of experience across civil engineering, building surveying and council compliance. He knows the codes inside out and gives you straight answers.`,
    features: [
      "No council lodgement required — faster approval pathway",
      "Thorough assessment against SEPP Complying Development Codes",
      "Plain-English advice on whether your project qualifies",
      "Combined planning and construction approval in a single certificate",
      "Issued by a NSW Fair Trading Registered Building Surveyor",
      "Covers residential builds, alterations, additions, granny flats and more",
    ],
    whoIsItFor: [
      "Homeowners building new residences or extensions",
      "Builders and developers on eligible residential projects",
      "Granny flat companies seeking fast approvals",
      "Anyone wanting to avoid the council DA process",
    ],
    process: [
      "Contact Fadi with your project details and site address",
      "We assess eligibility against the SEPP Complying Development Codes",
      "You submit your plans and required documentation",
      "We carry out the formal assessment and issue your CDC",
      "Construction can commence — with inspections scheduled as required",
    ],
    icon: "FileCheck",
    featured: true,
  },
  {
    id: "construction-certificate",
    slug: "construction-certificate",
    title: "Construction Certificate (CC)",
    shortTitle: "Construction Certificate",
    tagline: "Approval to commence construction — confirms your plans meet the Building Code.",
    description:
      "A Construction Certificate confirms your construction plans and specifications comply with the Building Code of Australia (BCA/NCC) and any relevant development consent conditions. It is required before building work can commence.",
    longDescription: `Once you have a development consent (DA) approved by council, you need a Construction Certificate before any building work can start. The CC confirms that your detailed construction plans and specifications comply with the Building Code of Australia (BCA/NCC) and any conditions attached to your DA.

A Construction Certificate is issued by either a private certifier or council. Using a private certifier like Certify Right is generally faster and gives you direct access to a qualified professional who reviews your plans thoroughly and communicates clearly.

We assess your documentation, identify any issues early, and work with you to resolve them before issuing the certificate — so there are no surprises on site.`,
    features: [
      "Review of construction plans and specifications for BCA/NCC compliance",
      "Assessment of DA conditions and how they apply to your design",
      "Clear identification of any compliance issues before issuing",
      "Issued by a NSW Fair Trading Registered Building Surveyor",
      "Fast turnaround to keep your project on schedule",
      "Ongoing support through the construction phase",
    ],
    whoIsItFor: [
      "Property owners with a council-approved DA",
      "Builders requiring certification before commencing work",
      "Developers at the construction-ready stage",
      "Anyone needing BCA/NCC compliance confirmation",
    ],
    process: [
      "Provide your DA approval and construction documents",
      "We review plans and specs for BCA/NCC compliance and DA conditions",
      "Any issues are identified and communicated clearly",
      "Once satisfied, we issue your Construction Certificate",
      "Inspections are scheduled at critical stages during construction",
    ],
    icon: "HardHat",
  },
  {
    id: "occupation-certificate",
    slug: "occupation-certificate",
    title: "Occupation Certificate (OC)",
    shortTitle: "Occupation Certificate",
    tagline: "The final sign-off confirming your building is safe and legal to occupy.",
    description:
      "An Occupation Certificate is the final step in the certification process. It confirms that your building has been constructed in accordance with the relevant approval and is safe and suitable for occupation.",
    longDescription: `An Occupation Certificate (OC) is issued at the completion of a building project. It confirms that the building has been constructed in accordance with the relevant approval — whether a CDC or a DA/CC — and that it is safe and fit to occupy.

You cannot legally occupy a new building or a newly completed extension without an OC. The OC is only issued once all required critical stage inspections have been completed satisfactorily and any outstanding issues have been resolved.

At Certify Right, we manage the inspection process from start to finish and work with you to ensure any issues are addressed promptly. We make the path to your Occupation Certificate as smooth as possible.`,
    features: [
      "Final confirmation that your building is safe and legal to occupy",
      "Issued only after all required inspections are completed",
      "Clear communication throughout the inspection process",
      "Prompt identification and resolution of any outstanding issues",
      "Covers new builds, extensions, alterations, and CDC projects",
      "Issued by a NSW Fair Trading Registered Building Surveyor",
    ],
    whoIsItFor: [
      "Homeowners completing a new residence or extension",
      "Builders at practical completion stage",
      "Developers requiring final sign-off across multiple dwellings",
      "Anyone needing legal authority to occupy a building",
    ],
    process: [
      "All required critical stage inspections are completed",
      "Any defects or issues identified are communicated and addressed",
      "Final inspection confirms compliance with the relevant approval",
      "Occupation Certificate is issued",
      "You have legal authority to occupy your building",
    ],
    icon: "CheckCircle2",
  },
  {
    id: "principal-certifier-appointment",
    slug: "principal-certifier-appointment",
    title: "Principal Certifier Appointment",
    shortTitle: "Principal Certifier",
    tagline: "Your legally required certification supervisor — from first inspection to final certificate.",
    description:
      "Under the Environmental Planning and Assessment Act, a Principal Certifier (PC) must be appointed for all development projects requiring certification. Certify Right can act as your Principal Certifier, managing the full inspection and certification process.",
    longDescription: `Under NSW law, a Principal Certifier must be appointed for any development that requires certification. The Principal Certifier is responsible for coordinating and conducting critical stage inspections, ensuring the building is constructed in accordance with the relevant approval, and ultimately issuing the Occupation Certificate.

Appointing Certify Right as your Principal Certifier gives you a direct line to Fadi Habbouche — an experienced Registered Building Surveyor who responds promptly, keeps you informed, and manages the certification process efficiently.

We handle the documentation, inspection scheduling, compliance monitoring, and final certification. You focus on building; we focus on keeping the process moving.`,
    features: [
      "Legally required appointment under NSW building legislation",
      "Coordination of all required critical stage inspections",
      "Direct access to a NSW Registered Building Surveyor",
      "Compliance monitoring throughout the construction phase",
      "Clear and responsive communication at every stage",
      "Issuing the final Occupation Certificate",
    ],
    whoIsItFor: [
      "Owners and builders on any certifiable development",
      "Projects requiring inspections at critical construction stages",
      "Anyone wanting a responsive, experienced certifier on their project",
      "CDC and CC projects requiring a Principal Certifier",
    ],
    process: [
      "You appoint Certify Right as your Principal Certifier at the outset",
      "We review the approval and identify all required inspections",
      "Critical stage inspections are scheduled and conducted",
      "Any compliance issues are communicated and followed up",
      "Final inspection completed and Occupation Certificate issued",
    ],
    icon: "ClipboardCheck",
  },
  {
    id: "bca-ncc-compliance",
    slug: "bca-ncc-compliance",
    title: "BCA / NCC Compliance Advice",
    shortTitle: "BCA / NCC Compliance",
    tagline: "Plain-English compliance advice — so your design gets approved the first time.",
    description:
      "Building Code of Australia and National Construction Code compliance advice for designers, architects, and builders. Get plain-English guidance on compliance requirements before you lodge — so your design gets approved the first time.",
    longDescription: `The Building Code of Australia (BCA) and National Construction Code (NCC) set the minimum standards for the design, construction, and performance of buildings across Australia. For most projects, demonstrating compliance is not optional — it is a legal requirement.

Getting BCA/NCC compliance wrong at the design stage leads to delays, costly redesigns, and frustration. At Certify Right, we provide clear, practical compliance advice that helps designers, architects, and builders understand the requirements and get their designs right before lodgement.

With Fadi's background in civil engineering and building surveying — including experience as a building design professional and council compliance officer — you get advice grounded in real-world building experience, not just code reading.`,
    features: [
      "Plain-English BCA/NCC compliance review of design documents",
      "Advice on deemed-to-satisfy and performance solution pathways",
      "Early identification of compliance issues before lodgement",
      "Guidance on fire safety, structural, accessibility and energy requirements",
      "Support for residential, commercial and mixed-use projects",
      "Experience as a qualified civil engineer and building design professional",
    ],
    whoIsItFor: [
      "Architects and designers checking compliance before lodgement",
      "Builders seeking clarification on BCA/NCC requirements",
      "Developers assessing new project feasibility",
      "Anyone needing expert compliance guidance on their design",
    ],
    process: [
      "Submit your design documents and project details",
      "We review the design against relevant BCA/NCC provisions",
      "Compliance issues and recommended solutions are identified",
      "Written advice provided in clear, plain English",
      "Ongoing support through design refinement as needed",
    ],
    icon: "BookOpen",
  },
  {
    id: "da-support",
    slug: "da-support",
    title: "DA Support",
    shortTitle: "DA Support",
    tagline: "Early compliance review before you lodge with council — fewer delays, stronger application.",
    description:
      "Pre-lodgement compliance review for Development Applications. Identify issues before you submit to council and strengthen your DA with an independent expert review.",
    longDescription: `A Development Application (DA) is required for projects that do not qualify for Complying Development. Lodging a DA without a thorough pre-lodgement review is a common source of delays, requests for additional information, and objections that could have been avoided.

Certify Right provides pre-lodgement DA support — an independent expert review of your design and documentation before you submit to council. We identify compliance gaps, assess whether conditions are likely to be triggered, and help you put your best foot forward.

With experience across council compliance, building surveying, and building design, Fadi provides practical advice that translates directly into a stronger application and a smoother council process.`,
    features: [
      "Pre-lodgement review of DA documentation for compliance gaps",
      "Assessment against relevant planning controls and development standards",
      "Identification of issues likely to trigger council conditions or objections",
      "Practical recommendations to strengthen your application",
      "Advice on SEPPs, local environmental plans (LEPs) and DCPs",
      "Support for residential, dual occupancy, and mixed-use DAs",
    ],
    whoIsItFor: [
      "Property owners lodging residential DAs",
      "Architects and designers preparing council submissions",
      "Builders and developers assessing compliance before lodgement",
      "Anyone wanting expert eyes on their DA before it goes to council",
    ],
    process: [
      "Submit your design documents and relevant site information",
      "We review the proposal against planning controls and standards",
      "Compliance issues and recommended improvements are identified",
      "We provide a clear written review with practical recommendations",
      "You refine your application and lodge with greater confidence",
    ],
    icon: "FileText",
  },
  {
    id: "demolition-certificate",
    slug: "demolition-certificate",
    title: "Demolition Certificate",
    shortTitle: "Demolition",
    tagline: "Fast-track demolition certification where eligible — required before the new build begins.",
    description:
      "Demolition certificates for eligible projects under the Complying Development pathway. Required before demolition commences — we assess eligibility and issue your certificate efficiently.",
    longDescription: `Before demolishing a structure in NSW, you need the appropriate approval. For eligible demolition works, a Complying Development Certificate for demolition can be issued by a private certifier — offering a faster alternative to council approval.

Certify Right assesses whether your demolition project meets the eligibility criteria under the relevant SEPP, handles the required documentation, and issues your demolition certificate promptly.

We also coordinate with the relevant authorities and ensure any asbestos management requirements are identified and addressed. Getting this step right upfront avoids delays to your subsequent construction project.`,
    features: [
      "Assessment of eligibility for CDC demolition pathway",
      "Faster than council lodgement for eligible projects",
      "Identification of asbestos management requirements",
      "Coordination with relevant authorities",
      "Required documentation handled efficiently",
      "Supports timely commencement of subsequent construction",
    ],
    whoIsItFor: [
      "Homeowners demolishing structures before a new build",
      "Builders requiring demolition approval before commencing works",
      "Developers clearing existing structures on site",
      "Anyone seeking a faster alternative to council demolition approval",
    ],
    process: [
      "Submit site and structure details for eligibility assessment",
      "We review eligibility under the relevant SEPP",
      "Required documentation and asbestos assessment identified",
      "Certificate issued once documentation is complete",
      "Demolition can proceed; subsequent construction certification arranged",
    ],
    icon: "Building2",
  },
  {
    id: "swimming-pool-compliance",
    slug: "swimming-pool-compliance",
    title: "Swimming Pool Compliance",
    shortTitle: "Swimming Pool",
    tagline: "Pool barrier inspections and compliance certificates for NSW residential properties.",
    description:
      "Swimming pool barrier inspections and compliance certificates for NSW residential properties. Required under the Swimming Pools Act 1992 — we make the process straightforward.",
    longDescription: `Under the NSW Swimming Pools Act 1992, all residential swimming pools and spas must be surrounded by a compliant child-resistant barrier. Pool owners are required to obtain a compliance certificate when selling or leasing a property with a pool, and must register their pool on the NSW Swimming Pool Register.

Certify Right conducts swimming pool barrier inspections and issues compliance certificates for pools that meet the requirements. If your pool barrier doesn't comply, we identify the deficiencies clearly and tell you exactly what needs to be rectified.

The process is straightforward: we inspect the pool barrier, assess compliance with the relevant Australian Standards and legislation, and either issue your certificate or provide a clear deficiency report.`,
    features: [
      "Pool barrier inspection under the Swimming Pools Act 1992",
      "Compliance certificate issued for compliant barriers",
      "Clear deficiency report for non-compliant barriers",
      "Assessment against relevant Australian Standards",
      "Required for property sale and rental",
      "NSW Swimming Pool Register assistance",
    ],
    whoIsItFor: [
      "Homeowners selling or leasing a property with a pool",
      "Property owners ensuring ongoing pool barrier compliance",
      "Builders completing new pool installations",
      "Anyone requiring a pool compliance certificate in NSW",
    ],
    process: [
      "Book a pool barrier inspection at your property",
      "We inspect the barrier against the Swimming Pools Act and Australian Standards",
      "Compliant pools receive a compliance certificate",
      "Non-compliant pools receive a detailed deficiency report",
      "Re-inspection arranged once rectifications are complete",
    ],
    icon: "Waves",
  },
  {
    id: "building-inspections",
    slug: "building-inspections",
    title: "Building Inspections",
    shortTitle: "Building Inspections",
    tagline: "Critical-stage inspections at every required point — so nothing is missed and your OC is never held up.",
    description:
      "Critical stage building inspections throughout the construction process. Required at specified stages of construction — we conduct thorough, responsive inspections that keep your project on track.",
    longDescription: `Critical stage inspections are a mandatory part of the building certification process in NSW. They must be conducted at specific stages of construction — such as before footings are poured, at frame stage, and at practical completion — to ensure the work complies with the relevant approval and the Building Code.

At Certify Right, we conduct thorough inspections at every required stage and respond promptly to booking requests. We communicate clearly about what we find and work with builders and owners to resolve any issues quickly, so your project keeps moving.

Fadi's background as a civil engineer means he understands construction from the ground up — not just from a paperwork perspective. That practical knowledge makes a difference when assessing complex or unusual situations on site.`,
    features: [
      "All mandatory critical stage inspections conducted",
      "Prompt scheduling and responsive communication",
      "Detailed inspection reports issued after each stage",
      "Clear identification of any defects or compliance issues",
      "Experience across residential, commercial and mixed-use buildings",
      "Civil engineering background adds depth to technical assessments",
    ],
    whoIsItFor: [
      "Builders requiring inspections at mandatory construction stages",
      "Owners monitoring their building project",
      "Anyone appointed with Certify Right as Principal Certifier",
      "Projects requiring independent inspection under a CDC or CC",
    ],
    process: [
      "Inspections are booked at the required construction stages",
      "We attend site and carry out a thorough compliance assessment",
      "Inspection report is issued promptly after each visit",
      "Any defects or issues are clearly communicated",
      "Follow-up inspections arranged as needed",
    ],
    icon: "Search",
  },
  {
    id: "fire-safety",
    slug: "fire-safety",
    title: "Fire Safety",
    shortTitle: "Fire Safety",
    tagline: "Annual Fire Safety Statements and fire safety compliance for NSW buildings.",
    description:
      "Fire safety assessments, Annual Fire Safety Statements, and compliance advice for NSW buildings. Fadi's experience as a fire safety officer means you get practical, reliable fire safety support.",
    longDescription: `Fire safety compliance is a critical and often misunderstood area of building regulation in NSW. Building owners are required to maintain fire safety measures, ensure annual inspections by accredited practitioners, and lodge Annual Fire Safety Statements with council.

Certify Right provides fire safety compliance support drawing on Fadi's experience as a qualified fire safety officer. We assess fire safety measures, identify deficiencies, and provide clear advice on what needs to be done to achieve and maintain compliance.

Whether you need an Annual Fire Safety Statement, a fire safety upgrade assessment, or advice on fire safety requirements for a new project, we provide practical support grounded in hands-on building and compliance experience.`,
    features: [
      "Annual Fire Safety Statement support and coordination",
      "Assessment of essential fire safety measures",
      "Fire safety upgrade assessments for existing buildings",
      "Advice on fire safety requirements under BCA/NCC",
      "Experience as a qualified fire safety officer",
      "Support for residential, commercial and strata buildings",
    ],
    whoIsItFor: [
      "Building owners with annual fire safety obligations",
      "Strata managers and owners corporations",
      "Developers and builders assessing fire safety requirements",
      "Anyone needing practical fire safety compliance advice",
    ],
    process: [
      "Contact us with your fire safety requirements",
      "We assess your building's fire safety measures",
      "Deficiencies and required actions are clearly identified",
      "Support provided for Annual Fire Safety Statement lodgement",
      "Ongoing advice available as required",
    ],
    icon: "Flame",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedService(): Service {
  return services.find((s) => s.featured) || services[0];
}
