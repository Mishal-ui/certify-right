export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-services",
    category: "General",
    question: "What bookkeeping and accounting services do you provide?",
    answer:
      "We provide professional bookkeeping, financial reporting, management consultancy, budgeting and forecasting, cost control, and actuarial valuation support. Our core service is day-to-day bookkeeping, but we can also support more complex financial management requirements depending on your business needs.",
  },
  {
    id: "experience",
    category: "General",
    question: "How much experience does your team have?",
    answer:
      "Our team brings over 20 years of professional experience in bookkeeping, accounting, and financial management. We have worked across a wide range of business types and industries, providing practical, reliable support tailored to each client's requirements.",
  },
  {
    id: "systems",
    category: "General",
    question: "Which accounting systems do you work with?",
    answer:
      "We work with a broad range of leading accounting and ERP systems, including Oracle, SAP, QuickBooks, Odoo, Xero, Sage, Zoho Books, and Microsoft Dynamics. Where your business uses a customized or bespoke system, we can also support that, as we adapt to the tools and processes already in place.",
  },
  {
    id: "hourly-vs-monthly",
    category: "Plans",
    question: "What is the difference between the hourly plan and the monthly plan?",
    answer:
      "The hourly-based plan is designed for businesses that need accounting support on a flexible or as-needed basis. You are billed for the actual hours worked, making it suitable for businesses with occasional or fluctuating accounting workloads. The monthly fixed plan provides a dedicated professional working 5 days a week, 8 hours a day, giving you ongoing and structured support at a predictable monthly cost. This plan is best suited to businesses with regular, ongoing accounting and financial management requirements.",
  },
  {
    id: "pricing",
    category: "Plans",
    question: "What are your prices?",
    answer:
      "Our hourly plan is available at three levels: Bookkeeper at $10 per hour, Accounting Supervisor at $15 per hour, and Accounting Manager at $20 per hour. Our monthly fixed plan provides a dedicated professional at: Bookkeeper $1,000 per month, Accounting Supervisor $1,500 per month, and Accounting Manager $2,000 per month. All monthly plans include full-time dedicated support (5 days a week, 8 hours a day).",
  },
  {
    id: "expertise-levels",
    category: "Plans",
    question: "What is the difference between a Bookkeeper, Supervisor, and Manager?",
    answer:
      "A Bookkeeper handles day-to-day bookkeeping and accounting tasks — maintaining accurate records, reconciliations, and data entry. An Accounting Supervisor provides an additional level of expertise and oversight, reviewing bookkeeping work and ensuring quality and accuracy. An Accounting Manager provides management-level support including financial analysis, business insights, and advisory services to help management understand their financial position and make informed decisions. We recommend selecting the level that best matches the complexity and requirements of your business.",
  },
  {
    id: "get-started",
    category: "General",
    question: "How do I get started?",
    answer:
      "Getting started is simple. Contact us to discuss your bookkeeping and accounting requirements. We will understand your business, agree on the scope and level of support you need, assign the appropriate professional, and begin supporting your business. You can reach us by email at info@certifyright.com.au or via WhatsApp.",
  },
  {
    id: "ongoing-support",
    category: "General",
    question: "Can I change my plan or level of support over time?",
    answer:
      "Yes. We understand that business requirements change over time. Whether you need to increase your level of support during a busy period or scale back when things are quieter, we can adapt to your changing needs. We discuss any changes with you and agree on the revised scope and arrangement.",
  },
  {
    id: "industry",
    category: "General",
    question: "What types of businesses do you work with?",
    answer:
      "We work with small and medium-sized businesses across a range of industries. Whether you are a startup needing initial bookkeeping support, a growing business requiring ongoing financial management, or an established company looking to reduce accounting costs while maintaining quality, we can provide appropriate support tailored to your situation.",
  },
  {
    id: "reporting",
    category: "Plans",
    question: "Can you provide regular financial reports for my business?",
    answer:
      "Yes. Our financial reporting service provides management with clear, timely information about business performance and financial position. We can prepare profit and loss statements, balance sheets, cash flow reports, and management accounts according to your preferred reporting schedule. Regular reporting helps you stay informed and make better business decisions.",
  },
];

export const homepageFAQs = faqs.slice(0, 6);
