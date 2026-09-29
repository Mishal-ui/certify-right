import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Certify Right Pty Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0C2D5A] mb-8">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: 2024</p>
        <div className="space-y-6 text-slate-600">
          <p>
            Certify Right Pty Ltd (ABN 34 681 512 443) is committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
          </p>
          <p>
            We collect personal information only for the purpose of providing building certification services and responding to enquiries. We will not share your personal information with third parties without your consent, except where required by law.
          </p>
          <p>
            For enquiries regarding our privacy practices, please contact us at{" "}
            <a href="mailto:info@certifyright.com.au" className="text-[#185FA5] hover:underline">
              info@certifyright.com.au
            </a>
            .
          </p>
          <p className="text-slate-400 text-sm italic">
            A complete privacy policy will be published here. This page is a placeholder.
          </p>
        </div>
      </div>
    </section>
  );
}
