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
    id: "bookkeeping",
    slug: "bookkeeping",
    title: "Bookkeeping",
    shortTitle: "Bookkeeping",
    tagline: "Professional day-to-day bookkeeping support to keep your financial records accurate, organized, and up to date.",
    description:
      "Our core service — professional day-to-day bookkeeping support to keep your financial records accurate, organized, and up to date. Whether you need occasional assistance or ongoing bookkeeping support, we provide flexible solutions based on your business requirements.",
    longDescription: `Accurate bookkeeping is the foundation of sound financial management. Without reliable records, it is difficult to understand business performance, prepare timely reports, or make informed decisions.

Our bookkeeping service provides professional, day-to-day support to keep your financial records organized and up to date. We handle the routine accounting tasks that take time away from running your business — data entry, reconciliations, transaction coding, and maintaining accurate ledgers.

Whether you need occasional assistance to catch up on outstanding bookkeeping, or ongoing support to manage your financial records on a regular basis, we provide flexible arrangements based on your business requirements. We work with leading accounting systems including QuickBooks, Xero, Sage, Oracle, SAP, and others, and can adapt to the systems and processes your business already uses.`,
    features: [
      "Accurate and organized financial records",
      "Bank and account reconciliations",
      "Transaction coding and data entry",
      "Accounts payable and receivable support",
      "Flexible ongoing or occasional support",
      "Compatible with major accounting systems",
    ],
    whoIsItFor: [
      "Small and medium-sized businesses",
      "Businesses with growing transaction volumes",
      "Companies needing to catch up on backlog bookkeeping",
      "Businesses seeking cost-effective financial record management",
    ],
    process: [
      "Discuss your bookkeeping requirements and current systems",
      "Agree on scope, frequency, and level of support needed",
      "Assign appropriate professional (Bookkeeper, Supervisor, or Manager)",
      "Begin maintaining your financial records",
      "Provide regular updates and address queries as they arise",
    ],
    icon: "BookOpen",
    featured: true,
  },
  {
    id: "financial-reporting",
    slug: "financial-reporting",
    title: "Financial Reporting",
    shortTitle: "Financial Reporting",
    tagline: "Clear and timely financial reporting that provides management with reliable information about business performance.",
    description:
      "Clear and timely financial reporting that provides management with reliable information about business performance and financial position.",
    longDescription: `Understanding your business's financial position requires more than just accurate records — it requires clear, timely reports that translate numbers into actionable information.

We prepare financial reports tailored to management's needs, including profit and loss statements, balance sheets, cash flow summaries, and management accounts. Our reports are presented in a clear format that helps business owners and managers understand performance at a glance.

Regular financial reporting enables better decision-making, supports strategic planning, and provides the visibility needed to identify issues early and respond effectively. We work to ensure reports are delivered on time and explained clearly.`,
    features: [
      "Profit and loss statements",
      "Balance sheet preparation",
      "Cash flow reports and summaries",
      "Management accounts and commentary",
      "Customized report formats for management needs",
      "Timely delivery on agreed reporting schedules",
    ],
    whoIsItFor: [
      "Business owners requiring regular performance reports",
      "Management teams needing financial visibility",
      "Businesses reporting to investors or boards",
      "Companies needing consolidated reporting across entities",
    ],
    process: [
      "Understand management reporting requirements and frequency",
      "Agree on report format, content, and schedule",
      "Maintain up-to-date financial records throughout the period",
      "Prepare and review financial reports",
      "Deliver reports and discuss findings with management",
    ],
    icon: "BarChart2",
  },
  {
    id: "management-consultancy",
    slug: "management-consultancy",
    title: "Management Consultancy",
    shortTitle: "Management Consultancy",
    tagline: "Practical financial and management support to help businesses analyze financial information and make informed decisions.",
    description:
      "Practical financial and management support to help businesses analyze financial information, understand performance, and make informed decisions.",
    longDescription: `Beyond bookkeeping and reporting, businesses sometimes need practical support to interpret financial data and use it to drive better decisions. Our management consultancy service provides that additional layer of expertise.

We work alongside management to analyze financial information, identify trends and variances, and provide practical insights that support decision-making. This may include analyzing profitability by product or division, reviewing cost structures, assessing working capital, or providing support during periods of business change.

Our approach is practical and business-focused. We communicate clearly and help management understand what the numbers mean for their business — without unnecessary jargon or complexity.`,
    features: [
      "Financial performance analysis and commentary",
      "Variance analysis and trend identification",
      "Profitability review by segment or product",
      "Working capital analysis and cash flow support",
      "Support during business change or restructuring",
      "Clear, practical insights without financial jargon",
    ],
    whoIsItFor: [
      "Business owners seeking deeper financial insights",
      "Management teams navigating growth or change",
      "Companies requiring financial analysis beyond standard reports",
      "Businesses preparing for investment, acquisition, or restructure",
    ],
    process: [
      "Understand business context and management information needs",
      "Review financial data and identify key areas for analysis",
      "Prepare analysis, commentary, and insights",
      "Present findings and recommendations to management",
      "Provide ongoing support as required",
    ],
    icon: "TrendingUp",
  },
  {
    id: "budgeting-forecasting",
    slug: "budgeting-forecasting",
    title: "Budgeting & Forecasting",
    shortTitle: "Budgeting & Forecasting",
    tagline: "Support with financial planning, budgeting, forecasting, and monitoring actual performance against expectations.",
    description:
      "Support with financial planning, budgeting, forecasting, and monitoring actual performance against expectations.",
    longDescription: `Effective financial planning requires reliable budgets and forecasts that reflect business reality. We support businesses in preparing and maintaining budgets and forecasts that are useful tools for managing performance.

Our budgeting and forecasting service helps businesses set realistic financial targets, project future performance based on known assumptions, and track actual results against those expectations. Regular comparison of actual versus budgeted performance provides early visibility into issues and helps management take corrective action.

Whether you are preparing an annual budget, a rolling forecast, or a project-specific financial plan, we provide practical support to ensure the numbers are credible and the process is manageable.`,
    features: [
      "Annual budget preparation and review",
      "Rolling forecasts updated regularly",
      "Actual versus budget variance analysis",
      "Cash flow forecasting and liquidity planning",
      "Scenario modelling and sensitivity analysis",
      "Reporting on budget performance to management",
    ],
    whoIsItFor: [
      "Businesses implementing formal financial planning processes",
      "Management requiring budget vs actual reporting",
      "Companies preparing forecasts for lenders or investors",
      "Businesses managing significant projects or capital expenditure",
    ],
    process: [
      "Understand business objectives and planning requirements",
      "Gather historical data and key business assumptions",
      "Prepare budget or forecast model",
      "Review with management and refine as required",
      "Monitor actuals vs budget and report on variances",
    ],
    icon: "Target",
  },
  {
    id: "cost-control",
    slug: "cost-control",
    title: "Cost Control",
    shortTitle: "Cost Control",
    tagline: "Analysis and monitoring of business costs to improve visibility over expenditure and support effective cost management.",
    description:
      "Analysis and monitoring of business costs to improve visibility over expenditure and support effective cost management.",
    longDescription: `Managing costs effectively is critical to business profitability and sustainability. Our cost control service provides businesses with the analysis and visibility needed to understand where money is being spent and how costs can be managed more effectively.

We review cost structures, identify areas of significant or growing expenditure, and provide analysis that helps management understand cost behavior and its impact on profitability. We also support businesses in establishing cost monitoring processes and reviewing expenditure against approved budgets.

Cost control is most valuable when it is an ongoing process rather than a one-off exercise. We help businesses build the habits and processes needed to keep costs under regular review.`,
    features: [
      "Cost structure analysis and review",
      "Expenditure monitoring against budget",
      "Identification of cost reduction opportunities",
      "Cost allocation and departmental reporting",
      "Supplier and contract cost reviews",
      "Reporting on cost trends and variances",
    ],
    whoIsItFor: [
      "Businesses with high or growing operating costs",
      "Companies seeking to improve profitability through cost management",
      "Management requiring visibility over departmental expenditure",
      "Businesses implementing cost reduction programs",
    ],
    process: [
      "Review existing cost structures and expenditure patterns",
      "Identify key cost categories and drivers",
      "Analyze trends and variances against expectations",
      "Provide recommendations for cost improvement",
      "Establish ongoing monitoring and reporting processes",
    ],
    icon: "PiggyBank",
  },
  {
    id: "actuarial-valuation",
    slug: "actuarial-valuation",
    title: "Actuarial Valuation",
    shortTitle: "Actuarial Valuation",
    tagline: "Professional actuarial valuation support for applicable financial, accounting, and business requirements.",
    description:
      "Professional actuarial valuation support for applicable financial, accounting, and business requirements.",
    longDescription: `Actuarial valuations are required in specific financial, accounting, and business contexts — such as valuing employee benefit obligations, assessing insurance liabilities, or supporting financial reporting requirements under applicable accounting standards.

Our actuarial valuation support service provides businesses with professional assistance in obtaining and understanding actuarial valuations applicable to their circumstances. We work with qualified actuaries to ensure valuations are conducted appropriately and that the results are properly reflected in financial records and reports.

We provide support through the full process — from identifying when an actuarial valuation is required, to coordinating with actuaries, reviewing outputs, and ensuring results are appropriately recorded and disclosed in financial statements.`,
    features: [
      "Employee benefit obligation valuations",
      "Insurance and financial liability assessments",
      "Support with financial reporting requirements",
      "Coordination with qualified actuaries",
      "Review and interpretation of valuation outputs",
      "Assistance with financial statement disclosure",
    ],
    whoIsItFor: [
      "Companies with defined benefit pension obligations",
      "Businesses with significant employee entitlement liabilities",
      "Organizations subject to actuarial reporting requirements",
      "Businesses preparing for audit or financial statement review",
    ],
    process: [
      "Identify applicable actuarial valuation requirements",
      "Gather relevant data and information",
      "Coordinate with qualified actuaries",
      "Review valuation results and outputs",
      "Record and disclose results appropriately in financial statements",
    ],
    icon: "Calculator",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedService(): Service {
  return services.find((s) => s.featured) || services[0];
}
