export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-private-certifier",
    category: "General",
    question: "What is a private certifier?",
    answer:
      "A private certifier (also known as a registered certifier) is a person registered under the Building and Development Certifiers Act 2018 (NSW) to assess and certify building work. Private certifiers are an alternative to using your local council for certification services. They can issue Complying Development Certificates (CDCs), Construction Certificates (CCs), Occupation Certificates (OCs), and conduct mandatory building inspections. Private certifiers are regulated by NSW Fair Trading and must hold appropriate registration.",
  },
  {
    id: "council-vs-private",
    category: "General",
    question: "What is the difference between council certification and private certification?",
    answer:
      "Both council and private certifiers can assess and certify building work in NSW, but there are key differences. Private certifiers like Certify Right typically offer faster turnaround times, direct communication with a single experienced person, and greater responsiveness throughout your project. Council certification goes through a government department with multiple staff involved and can take longer. For complying development (CDC pathway), only a private certifier or council can issue the certificate — and private certification is often faster and more straightforward. The regulatory requirements and standards are the same regardless of whether you use council or a private certifier.",
  },
  {
    id: "what-is-cdc",
    category: "CDC",
    question: "What is a Complying Development Certificate (CDC)?",
    answer:
      "A Complying Development Certificate (CDC) is a fast-track building approval for development that meets specific pre-determined standards under NSW planning legislation, particularly the State Environmental Planning Policy (Housing) 2021. If your project meets the applicable standards, a CDC can be issued by a private certifier without the need for a council Development Application (DA). A CDC combines both the development consent and construction certificate into a single approval, allowing you to start construction faster. CDCs are commonly used for new homes, granny flats, additions and alterations, swimming pools, and other residential structures.",
  },
  {
    id: "cdc-timeline",
    category: "CDC",
    question: "How long does a CDC take?",
    answer:
      "A CDC issued under complying development provisions can typically be issued within 10 business days of receiving a complete application, including all required documents, plans and engineering reports. At Certify Right, we aim to provide a quote within 24 hours and work to process your application as quickly as possible once all required information is received. Delays generally occur when applications are incomplete, so providing all required documentation upfront helps avoid unnecessary hold-ups.",
  },
  {
    id: "critical-stage-inspections",
    category: "Inspections",
    question: "What are critical stage inspections?",
    answer:
      "Critical stage inspections are mandatory inspections that must be conducted at specific stages of construction before work can proceed to the next stage. Under NSW building legislation, the Principal Certifier must conduct (or arrange) inspections at prescribed critical stages. Common critical stages include: before any footings or slabs are poured, after the concrete slab is poured (where applicable), when the frame is complete, before any wall or ceiling linings are installed (internal works), waterproofing inspections, and the final inspection before an Occupation Certificate is issued. Your Principal Certifier — Certify Right — will advise you of the required inspection stages for your specific project.",
  },
  {
    id: "certification-cost",
    category: "General",
    question: "How much does building certification cost?",
    answer:
      "The cost of building certification depends on several factors including the type of certificate required (CDC, CC, OC), the size and complexity of your project, the number of inspections required, and whether any additional reports or documentation are needed. Certify Right provides obligation-free quotes within 24 hours. We believe in transparent, upfront pricing — you will know the full certification cost before committing. Contact us to discuss your project and receive a clear quote.",
  },
  {
    id: "what-is-pca",
    category: "General",
    question: "What is a Principal Certifier?",
    answer:
      "A Principal Certifier is a registered certifier appointed by the owner or principal contractor before construction commences. The Principal Certifier is responsible for conducting mandatory critical stage inspections throughout construction and issuing the final Occupation Certificate upon satisfactory completion. Under the NSW Building and Development Certifiers Act 2018 and the Environmental Planning and Assessment Act 1979, a Principal Certifier must be appointed for all new buildings and significant alterations. The appointment must be registered on the NSW Planning Portal. Certify Right acts as Principal Certifier for residential and commercial projects across NSW.",
  },
  {
    id: "quote-requirements",
    category: "General",
    question: "What do I need to provide to get a quote?",
    answer:
      "To provide an accurate quote, we generally need: the type of project (new home, granny flat, extension, commercial, etc.), the suburb/location of the property, an indication of the size of the project (floor area, number of storeys), the stage you are at (design stage, DA approved, ready to lodge, etc.), and the type of certification required (CDC, CC, OC, Principal Certifier, or not sure). You can contact us by phone, email or through our online enquiry form. We will get back to you within 24 hours with a clear, obligation-free quote.",
  },
  {
    id: "granny-flats",
    category: "CDC",
    question: "Can I get a CDC for a granny flat?",
    answer:
      "Yes — granny flats (secondary dwellings) are one of the most common types of CDC applications. Granny flats that meet the requirements of the State Environmental Planning Policy (Housing) 2021 can be approved as complying development, avoiding the need for a council Development Application. To be eligible for a CDC, your granny flat generally needs to meet minimum lot size requirements, maximum floor area requirements (typically up to 60m²), setback requirements, and other development standards. Certify Right has significant experience with granny flat CDCs and can advise quickly on whether your project is eligible. Contact us for a free initial discussion.",
  },
  {
    id: "da-approved-projects",
    category: "General",
    question: "My project has already been DA approved by council — do I still need a Construction Certificate?",
    answer:
      "Yes. A Development Application (DA) approval from council is development consent — it approves the concept and design of your project. Before construction can commence, you also need a Construction Certificate (CC). The CC confirms that your detailed construction plans and specifications comply with the Building Code of Australia (NCC) and any conditions of the development consent. You will also need to appoint a Principal Certifier before construction starts. Certify Right can issue the Construction Certificate and act as your Principal Certifier, managing the process from CC through to Occupation Certificate.",
  },
  {
    id: "changing-certifiers",
    category: "General",
    question: "Can I change my certifier during a project?",
    answer:
      "Yes, it is possible to change your Principal Certifier during a project, though it does require some administrative steps. A new Principal Certifier can be appointed, and the change must be registered on the NSW Planning Portal. There may also be a fee involved depending on the stage of the project and what inspections have already been conducted. If you are unhappy with your current certifier's responsiveness or communication, contact Certify Right to discuss whether a transfer is possible for your project.",
  },
  {
    id: "occupation-certificate",
    category: "General",
    question: "When do I need an Occupation Certificate?",
    answer:
      "An Occupation Certificate (OC) is required before any person can occupy or use a new building, or before a building is used for a different purpose than previously approved. You cannot legally move into a new home, or allow a tenant to occupy a new dwelling, without a valid OC. The OC is issued by the Principal Certifier following a satisfactory final inspection and confirmation that all conditions of consent or the CDC have been met. For staged developments, an Interim OC can be issued for parts of a building that are complete and ready for occupation.",
  },
  {
    id: "service-areas",
    category: "General",
    question: "What areas does Certify Right service?",
    answer:
      "Certify Right provides building certification services across NSW, with a focus on Greater Sydney and surrounding regions including Western Sydney, Central Coast, the Illawarra and beyond. We are based in Merrylands in Western Sydney and regularly work across Metropolitan Sydney, Regional NSW and anywhere we are needed. If you have a project outside Greater Sydney, contact us to discuss — in most cases we can assist.",
  },
  {
    id: "planning-portal",
    category: "General",
    question: "What is the NSW Planning Portal?",
    answer:
      "The NSW Planning Portal is the NSW Government's online system for managing planning, development and building applications in NSW. Most building applications, certificate lodgements, Principal Certifier appointments and inspection bookings are now managed through the Planning Portal. Certify Right is registered on the NSW Planning Portal and manages all required lodgements on your behalf as part of the certification process.",
  },
  {
    id: "failed-inspection",
    category: "Inspections",
    question: "What happens if my building fails an inspection?",
    answer:
      "If a critical stage inspection identifies defects or non-compliant work, we will clearly explain what needs to be rectified before a re-inspection can occur. A written inspection report will be provided outlining the issues found. Once the defects have been rectified by the builder, a re-inspection is booked. There may be a fee for re-inspections. Our goal is to identify issues clearly and practically so rectification can happen quickly without unnecessary delays to your project.",
  },
  {
    id: "unauthorised-granny-flat",
    category: "CDC",
    question: "I have an unauthorised granny flat — can you help?",
    answer:
      "Unauthorised building work (work carried out without the required approval) is a complex matter. In some cases, it may be possible to retrospectively certify or obtain approval for unauthorised granny flats through a Complying Development pathway or via a council Development Application with a building information certificate. The appropriate pathway depends on the specific works, when they were carried out, and whether they meet the current development standards. Contact Certify Right to discuss your specific situation — we can advise on the available options.",
  },
  {
    id: "check-registration",
    category: "General",
    question: "How do I check if my certifier is registered?",
    answer:
      "All private certifiers in NSW must be registered under the Building and Development Certifiers Act 2018 and their registration details are publicly available. You can check a certifier's registration on the NSW Fair Trading website by searching the public register of registered certifiers. Fadi Habbouche of Certify Right is a Registered Building Surveyor — Class A3, Accreditation Number BDC2868. You can verify this registration on the NSW Fair Trading public register.",
  },
];

export const homepageFAQs = faqs.slice(0, 6);
