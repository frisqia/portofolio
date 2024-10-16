import React, { useState } from "react";

export default function MyExperience() {
  // State untuk menyimpan pengalaman yang dipilih
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  // Data pengalaman kerja
  const experiences = [
    {
      company: "PT. Metiska Farma",
      period: "August 2021 - June 2024",
      position: "Operator Packing - Farmasi",
      description: [
        "Processed up to 250 boxes of medicine daily, meeting company SOP standards.",
        "Created and checked daily reports on man hours and job sheets, and input daily reports (Portal, Mebrow, Excel).",
        "Operated machinery (Delifolfold, Hitachi Inkjet, Ux Inkjet) to support the production process.",
        "Regularly contributed to process improvement through the suggestion system every six months.",
        "Managed product returns, waste disposal, and expired product updates in the production area.",
        "Adaptability: Proactively served as backup production admin when needed, including inputting work orders (WO), managing employee leave and permissions, and updating and revising document validations according to company standards (CPOB/CPOTB/K3/SJH and others). Updated ATK stock and monitored the expiration temperature in each production room.",
        "Flexibility: Performed various production administrative tasks, ensuring smooth team operations during staff shortages or when needed.",
      ],
    },
    {
      company: "PT. Palugada Informatika",
      period: "March 2020 - August 2021",
      position: "Sales Admin Online Shop - E-Commerce",
      description: [
        "Processed up to 600 orders and created invoices daily.",
        "Handled 900 chats daily on WhatsApp and marketplaces like Tokopedia, Shopee, Bukalapak, and the company website.",
        "Customer Service: Negotiated prices with customers and suppliers, provided customer service both online and offline, ensuring customer satisfaction and smooth transactions.",
        "Time Management: Managed product stock, updated daily reports to the director via WhatsApp group, and ensured orders were processed quickly, meeting deadlines.",
        "Updated and checked online product markets, uploaded, and edited photos with descriptions on marketplaces.",
        "Attention to Detail: Ensured the product information uploaded to marketplaces was accurate and complete, including product descriptions and images.",
      ],
    },
    {
      company: "PT. Haengsung Raya Indonesia",
      period: "April 2018 - October 2018",
      position: "Operator Insert Alpha - Electronic",
      description: [
        "Inserted cables into housing/material, meeting the target of 8,000 cables per day according to company operational standards.",
        "Efficiency: Consistently met high daily production targets while maintaining product quality.",
        "Inventory Management: Checked and counted product and material stocks monthly to ensure material availability and smooth production.",
      ],
    },
    {
      company: "PT. Tempo Scan Pacific, tbk",
      period: "October 2017 - March 2018",
      position: "Operator Packing - Farmasi",
      description: [
        "Packed 700 boxes per day, meeting company SOP standards.",
        "Leadership: As team leader, I was responsible for organizing team work, providing instructions, and ensuring that all team members met their targets.",
        "Problem-Solving: Managed the return of damaged goods, taking necessary actions to prevent the same mistakes from recurring.",
        "Created daily reports and ensured the workspace was clean before and after work.",
      ],
    },
  ];

  // Handler untuk mengatur pengalaman yang dipilih
  const handleExperienceClick = (index: number) => {
    const selected = experiences[index].position;
    // Jika pengalaman yang sama diklik, set ke null (untuk menyembunyikan)
    setSelectedExperience(selectedExperience === selected ? null : selected);
  };

  return (
    <div className="p-2 md:p-4 lg:p-6">
      <p className="text-2xl font-bold font-poppins mb-5">Experience</p>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-xl text-left font-semibold text-white">Company</th>
            <th className="py-2 px-4 text-xl text-left font-semibold text-white">Period</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((exp, index) => (
            <React.Fragment key={exp.position}>
              <tr onClick={() => handleExperienceClick(index)} style={{ cursor: "pointer" }}>
                <td className="py-3 px-4 text-lg">{exp.company}</td>
                <td className="py-3 px-4 text-lg">{exp.period}</td>
              </tr>
              <tr>
                <td colSpan={2} className="px-4 text-lg">
                  <i>
                    <u onClick={() => handleExperienceClick(index)} style={{ cursor: "pointer" }}>{exp.position}</u>
                  </i>
                </td>
              </tr>
              {selectedExperience === exp.position && (
                <tr>
                  <td colSpan={2} className="py-1 px-4">
                    <ul
                      className={`list-disc pl-5 text-gray-600 text-xs md:text-sm lg:text-base
                      ${index % 2 === 0 ? "animate-slideLeft" : "animate-slideRight"}`}
                    >
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
