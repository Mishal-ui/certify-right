export interface PricingTier {
  id: string;
  title: string;
  hourlyRate: number;
  monthlyRate: number;
  hourlyDescription: string;
  monthlyDescription: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "bookkeeper",
    title: "Bookkeeper",
    hourlyRate: 10,
    monthlyRate: 1000,
    hourlyDescription:
      "Suitable for businesses requiring day-to-day bookkeeping and accounting support. Our Bookkeepers help maintain accurate, organized, and up-to-date financial records.",
    monthlyDescription:
      "Suitable for businesses requiring dedicated day-to-day bookkeeping and accounting support. Your dedicated Bookkeeper will focus on maintaining accurate, organized, and up-to-date financial records.",
  },
  {
    id: "supervisor",
    title: "Supervisor",
    hourlyRate: 15,
    monthlyRate: 1500,
    hourlyDescription:
      "Suitable for businesses requiring accounting supervision, review, and oversight. Our Supervisors provide an additional level of expertise to help ensure the quality and accuracy of bookkeeping and accounting activities.",
    monthlyDescription:
      "Suitable for businesses requiring dedicated accounting supervision, review, and oversight. Your dedicated Supervisor provides experienced support to help ensure the quality and accuracy of your accounting activities.",
  },
  {
    id: "manager",
    title: "Manager",
    hourlyRate: 20,
    monthlyRate: 2000,
    hourlyDescription:
      "Suitable for businesses requiring financial analysis, business insights, and financial advisory support. Our Managers provide management-level expertise to help businesses understand their financial position and support informed decision-making.",
    monthlyDescription:
      "Suitable for businesses requiring dedicated financial analysis, business insights, and financial advisory support. Your dedicated Manager provides management-level expertise to support financial planning and business decision-making.",
  },
];
