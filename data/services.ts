export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  acronym?: string;
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
    id: "cdc",
    slug: "complying-development-certificate",
    title: "Complying Development Certificate (CDC)",
    shortTitle: "CDC",
    acronym: "CDC",
    tagline: "Fast-track approval for eligible residential projects — no council required.",
    description:
      "A Complying Development Certificate (CDC) is a fast-track approval for residential, commercial and industrial development that meets specific pre-determined standards under NSW planning legislation. It bypasses the traditional council development application process.",
    longDescription: `A Complying Development Certificate (CDC) is one of the most efficient pathways to building approval in NSW. If your project meets the relevant development standards, a CDC can be issued by a private certifier — no council involvement required.

Certify Right specialises in CDC assessments for residential projects across NSW. We assess your plans against the applicable State Environmental Planning Policy (SEPP), provide clear guidance on what's required, and issue your certificate quickly once all conditions are met.

Common CDC projects include new homes, granny flats, additions and alterations, swimming pools, and other residential structures that meet the complying development criteria.`,
    features: [
      "No council involvement required",
      "Faster approval timeframes",
      "Clear, pre-determined assessment criteria",
      "Applies to residential, commercial and industrial development",
      "Issued under State Environmental Planning Policy (SEPP)",
      "Combined approval — development consent and construction certificate in one",
    ],
    whoIsItFor: [
      "Homeowners building new homes or extensions",
      "Developers with residential projects",
      "Granny flat builders and companies",
      "Builders seeking fast-track approval",
    ],
    process: [
      "Submit plans and documents for assessment",
      "Plans assessed against SEPP complying development codes",
      "Any outstanding requirements communicated clearly",
      "CDC issued once all criteria are met",
      "Critical stage inspections scheduled",
    ],
    icon: "FileCheck",
    featured: true,
  },
  {
    id: "cc",
    slug: "construction-certificate",
    title: "Construction Certificate (CC)",
    shortTitle: "Construction Certificate",
    acronym: "CC",
    tagline: "The approval you need to start construction after development consent.",
    description:
      "A Construction Certificate (CC) is required before any building work can commence on a DA-approved project. It confirms that your detailed construction plans comply with the Building Code of Australia (BCA/NCC) and any conditions of the development consent.",
    longDescription: `Once your Development Application (DA) has been approved by council, you will need a Construction Certificate before building work can begin. The CC confirms that your detailed construction plans and specifications comply with the Building Code of Australia (BCA/NCC) and any conditions set out in the development consent.

Certify Right works with builders, developers and homeowners to efficiently process Construction Certificates. We review your plans, identify any compliance issues early, and work to get your certificate issued so construction can proceed without unnecessary delays.`,
    features: [
      "Required before construction commences on DA-approved projects",
      "Confirms compliance with BCA/NCC",
      "Reviews detailed construction plans and specifications",
      "Ensures consistency with development consent conditions",
      "Issued by a registered certifier",
    ],
    whoIsItFor: [
      "Homeowners with DA approval",
      "Builders commencing DA-approved work",
      "Developers proceeding to construction",
    ],
    process: [
      "DA approval received from council",
      "Construction plans prepared by designer/draftsperson",
      "Plans lodged with Certify Right for CC assessment",
      "BCA/NCC compliance reviewed",
      "CC issued — construction can commence",
    ],
    icon: "HardHat",
  },
  {
    id: "oc",
    slug: "occupation-certificate",
    title: "Occupation Certificate (OC)",
    shortTitle: "Occupation Certificate",
    acronym: "OC",
    tagline: "Certifying your building is complete and fit for occupation.",
    description:
      "An Occupation Certificate (OC) is required before a new building or change of use can be occupied. It confirms that the completed building is suitable for occupation in accordance with its approved purpose.",
    longDescription: `An Occupation Certificate is one of the final steps in your building project. It confirms that the building has been completed in accordance with the approved plans and is suitable for occupation.

For new buildings, a Final OC is required before anyone can move in or occupy the premises. Interim OCs can also be issued for staged developments where parts of a building are completed and ready for occupation before the whole project is finished.

Certify Right manages the full OC process — from scheduling final inspections to issuing the certificate once all requirements are satisfied.`,
    features: [
      "Required before occupation of new buildings",
      "Confirms building is complete and fit for purpose",
      "Interim OCs available for staged developments",
      "Requires satisfactory final inspection",
      "Registered on NSW Planning Portal",
    ],
    whoIsItFor: [
      "Homeowners completing new homes",
      "Developers completing residential or commercial buildings",
      "Builders completing projects",
    ],
    process: [
      "All required critical stage inspections completed",
      "Final inspection conducted",
      "All outstanding documentation received",
      "OC issued and registered on NSW Planning Portal",
    ],
    icon: "CheckCircle2",
  },
  {
    id: "pca",
    slug: "principal-certifier",
    title: "Principal Certifier (PCA)",
    shortTitle: "Principal Certifier",
    acronym: "PCA",
    tagline: "Your independent certifier managing inspections from start to finish.",
    description:
      "As your Principal Certifier (formerly PCA), Certify Right takes responsibility for conducting critical stage inspections throughout your project and issuing the Occupation Certificate at completion.",
    longDescription: `Under NSW building legislation, a Principal Certifier must be appointed before construction commences. The Principal Certifier is responsible for conducting or overseeing critical stage inspections during construction and issuing the Occupation Certificate upon satisfactory completion.

Certify Right provides Principal Certifier services for residential and commercial projects across NSW. As your Principal Certifier, Fadi Habbouche brings real building expertise — not just paperwork processing — to every inspection. He understands construction from a civil engineering perspective and can identify issues early before they become costly problems.

Appointing Certify Right as your Principal Certifier means you have a responsive, experienced professional who keeps your project moving.`,
    features: [
      "Required appointment before construction commences",
      "Conducts all mandatory critical stage inspections",
      "Issues the final Occupation Certificate",
      "Registered and authorised under NSW legislation",
      "Responsive communication throughout your project",
      "Real engineering expertise — not just paperwork",
    ],
    whoIsItFor: [
      "Builders commencing construction",
      "Developers managing large projects",
      "Homeowners building or extending",
    ],
    process: [
      "Principal Certifier appointment form signed",
      "Appointment registered on NSW Planning Portal",
      "Construction commencement notice received",
      "Critical stage inspections conducted at each stage",
      "Final inspection and Occupation Certificate issued",
    ],
    icon: "ClipboardCheck",
  },
  {
    id: "bca-compliance",
    slug: "bca-ncc-compliance-reports",
    title: "BCA / NCC Compliance Reports",
    shortTitle: "BCA / NCC Compliance",
    acronym: "BCA",
    tagline: "Expert compliance advice based on the Building Code of Australia.",
    description:
      "BCA/NCC Compliance Reports assess your proposed development against the requirements of the National Construction Code (NCC), formerly known as the Building Code of Australia (BCA).",
    longDescription: `The National Construction Code (NCC) — previously known as the Building Code of Australia (BCA) — sets minimum standards for the design and construction of buildings across Australia. Compliance with the NCC is a mandatory requirement for all building work.

Certify Right prepares BCA/NCC Compliance Reports for residential and commercial projects. These reports are typically required as part of a DA, CDC or CC application to demonstrate that a proposed development complies with the relevant NCC provisions.

With Fadi's background in civil engineering and fire safety, Certify Right can assess complex compliance matters and provide clear, practical reports that satisfy the requirements of both private certifiers and councils.`,
    features: [
      "Required for DA, CDC and CC applications",
      "Assessment against current NCC provisions",
      "Covers structural, fire safety, access and energy efficiency",
      "Clear, concise reporting",
      "Practical advice on achieving compliance",
    ],
    whoIsItFor: [
      "Architects and designers",
      "Builders with complex compliance queries",
      "Developers at the design stage",
      "Homeowners planning significant works",
    ],
    process: [
      "Plans and specifications reviewed",
      "Assessment against applicable NCC provisions",
      "Areas of non-compliance identified",
      "Solutions and alternatives recommended",
      "Compliance report prepared and issued",
    ],
    icon: "BookOpen",
  },
  {
    id: "da-support",
    slug: "development-application-support",
    title: "Development Application Support",
    shortTitle: "DA Support",
    tagline: "Pre-application advice and DA documentation support.",
    description:
      "Development Application (DA) support services to help navigate the council approval process — from pre-DA advice to preparing supporting documentation.",
    longDescription: `Not all development qualifies for a CDC — some projects require a Development Application (DA) through your local council. Certify Right provides pre-application advice and supports clients through the DA preparation process.

Understanding what council requires before you lodge can save significant time and money. Certify Right can review your project concept, advise on what documentation will be required, and help identify any potential issues early in the process.

While the DA itself is lodged with and assessed by your local council, having an experienced building surveyor involved early helps ensure your application is properly prepared.`,
    features: [
      "Pre-DA consultation and advice",
      "Review of project against council requirements",
      "Support with BCA/NCC documentation",
      "Identification of potential issues early",
      "Guidance on the DA pathway",
    ],
    whoIsItFor: [
      "Property owners planning significant development",
      "Builders working on non-complying development",
      "Developers planning multi-dwelling or commercial projects",
    ],
    process: [
      "Project concept reviewed",
      "Council requirements identified",
      "Pre-DA advice provided",
      "Supporting documentation prepared",
      "Ongoing support through assessment",
    ],
    icon: "FileText",
  },
  {
    id: "demolition",
    slug: "demolition-approvals",
    title: "Demolition Approvals",
    shortTitle: "Demolition Approvals",
    tagline: "Demolition approvals for structures requiring certification under NSW legislation.",
    description:
      "Demolition of structures in NSW may require either a CDC or Development Consent depending on the site, zone and scope of works. Certify Right can advise on the appropriate pathway and issue demolition approvals where eligible.",
    longDescription: `Before demolishing a building or structure in NSW, an approval is generally required. For eligible structures, demolition can be approved as complying development under a CDC. For structures that do not meet the criteria, a Development Application to council may be required.

Certify Right assesses the demolition scope, advises on the appropriate approval pathway, and issues CDCs for eligible demolition works. We also coordinate with structural engineers and other consultants where required.`,
    features: [
      "CDC pathway for eligible demolition works",
      "Advice on approval requirements",
      "Coordination with structural engineers",
      "Heritage and environmental considerations identified",
      "Asbestos and hazardous materials guidance",
    ],
    whoIsItFor: [
      "Homeowners demolishing existing structures",
      "Developers clearing sites for new development",
      "Builders undertaking partial demolitions",
    ],
    process: [
      "Demolition scope assessed",
      "Approval pathway determined (CDC or DA)",
      "Required documentation identified",
      "Approval issued for eligible works",
      "Pre-demolition inspection conducted",
    ],
    icon: "Building2",
  },
  {
    id: "swimming-pool",
    slug: "swimming-pool-compliance",
    title: "Swimming Pool Compliance",
    shortTitle: "Swimming Pool Compliance",
    tagline: "Swimming pool barrier compliance inspections and certificates.",
    description:
      "Swimming pool barrier compliance inspections and certification under the Swimming Pools Act 1992 (NSW). Certify Right conducts pool barrier inspections and issues compliance certificates for residential swimming pools and spas.",
    longDescription: `Under the Swimming Pools Act 1992 (NSW), all residential swimming pools and spas must have a complying pool barrier (fence/gate) to prevent unsupervised access by young children. Pool owners are required to register their pool and obtain a valid compliance certificate.

Certify Right conducts swimming pool barrier inspections across NSW and issues compliance certificates where barriers meet the requirements. We provide clear, practical advice on what is required to achieve compliance.

Pool compliance certificates are required when selling or leasing a property with a pool, and are also required as part of the ongoing registration obligations under NSW law.`,
    features: [
      "Pool barrier inspections under the Swimming Pools Act 1992",
      "Compliance certificates for complying barriers",
      "Required for property sale and lease",
      "Clear advice on barrier requirements",
      "Re-inspection services available",
    ],
    whoIsItFor: [
      "Homeowners selling or leasing a property with a pool",
      "Property investors with pool properties",
      "Homeowners wanting to confirm compliance",
    ],
    process: [
      "Pool barrier inspection booked",
      "On-site inspection conducted",
      "Compliance determined against the Swimming Pools Act",
      "Compliance certificate issued (if complying)",
      "Non-compliance report provided with rectification advice",
    ],
    icon: "Waves",
  },
  {
    id: "inspections",
    slug: "building-inspections",
    title: "Building Inspections",
    shortTitle: "Building Inspections",
    tagline: "Critical stage and progress inspections to keep your project on track.",
    description:
      "Critical stage inspections are mandatory under NSW building legislation and must be conducted at key stages of construction. Certify Right provides prompt, reliable inspection services across NSW.",
    longDescription: `Building inspections are a mandatory part of the construction process in NSW. Critical stage inspections must be conducted at specific stages of construction — such as footings, slab, framing and final — before work can proceed to the next stage.

Certify Right provides responsive critical stage inspection services. We understand that delays at inspection stage can cost builders and clients significant money, so we prioritise prompt inspection booking and turnaround.

As your Principal Certifier, Certify Right conducts all required critical stage inspections. We also provide progress and pre-purchase inspections where required.`,
    features: [
      "All critical stage inspections conducted",
      "Prompt booking and attendance",
      "Footings, slab, frame, waterproofing and final inspections",
      "Clear inspection reports",
      "Defect identification and guidance",
    ],
    whoIsItFor: [
      "Builders at critical construction stages",
      "Owner-builders managing their own construction",
      "Property buyers seeking pre-purchase reports",
    ],
    process: [
      "Inspection booking received",
      "Inspection conducted at agreed time",
      "Inspection report prepared",
      "Results communicated clearly",
      "Re-inspection booked where required",
    ],
    icon: "Search",
  },
  {
    id: "fire-safety",
    slug: "fire-safety",
    title: "Fire Safety",
    shortTitle: "Fire Safety",
    tagline: "Fire safety compliance advice for residential and commercial buildings.",
    description:
      "Fire safety compliance advice and documentation for buildings where fire safety measures are required under the NCC/BCA or as conditions of consent.",
    longDescription: `Fire safety is a critical element of building compliance, particularly for commercial, mixed-use and multi-dwelling residential buildings. The NCC/BCA prescribes minimum fire safety requirements for different building classes and uses.

Certify Right provides fire safety advice and documentation services, including Annual Fire Safety Statements (AFSS), fire safety compliance reviews, and advice on fire safety upgrades required under the NCC or as conditions of development consent.

With Fadi's background in fire safety, Certify Right brings practical expertise to fire safety compliance matters.`,
    features: [
      "Fire safety compliance reviews",
      "Annual Fire Safety Statement (AFSS) support",
      "Advice on fire safety upgrade requirements",
      "NCC fire safety provisions assessment",
      "Coordination with fire safety practitioners",
    ],
    whoIsItFor: [
      "Commercial building owners",
      "Strata managers",
      "Developers with fire safety conditions",
      "Building managers seeking compliance advice",
    ],
    process: [
      "Building fire safety measures reviewed",
      "Compliance assessed against NCC requirements",
      "Outstanding fire safety measures identified",
      "Upgrade pathway recommended",
      "Documentation prepared as required",
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
