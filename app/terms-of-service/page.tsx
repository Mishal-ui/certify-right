import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Certify Right Pty Ltd.",
};

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0C2D5A] mb-8">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: 2024</p>
        <div className="space-y-6 text-slate-600">
          <p>
            These terms govern your use of the Certify Right website and the services provided by Certify Right Pty Ltd (ABN 34 681 512 443).
          </p>
          <p>
            By engaging Certify Right for building certification services, you agree to the terms of our engagement letter and applicable NSW legislation including the Environmental Planning and Assessment Act 1979 and the Building and Development Certifiers Act 2018.
          </p>
          <p>
            For enquiries, contact us at{" "}
            <a href="mailto:info@certifyright.com.au" className="text-[#185FA5] hover:underline">
              info@certifyright.com.au
            </a>
            .
          </p>
          <p className="text-slate-400 text-sm italic">
            Complete terms will be published here. This page is a placeholder.
          </p>
        </div>
      </div>
    </section>
  );
}
