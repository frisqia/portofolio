import React, { useState } from "react";

export default function MyExperience() {
  // State untuk menyimpan pengalaman yang dipilih
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  // experience data
  const experiences = [
    {
      company: "PT. Ikapharmindo Putramas, Tbk",
      period: "December 2024 - currently",
      position: "Administration - Farmasi",
      description:[
        "Data Entry & Accuracy: Accurately inputting data into the SAP system to ensure completeness and correctness of information, reducing input errors and streamlining administrative processes.",
        "Document Review & Validation: Reviewing and verifying Purchase Order (PO) and Blanket Purchase Order (BPO) documents related to packaging and processing to ensure completeness and compliance with company standards. Improved document processing efficiency by 96% through stricter validation.",
        "Process Improvement: Contributing to document revision and workflow optimization, resulting in a more structured and efficient approval and processing system.",
        "Analytical Thinking & Problem-Solving: Analyzing administrative data to enhance operational efficiency. More accurate data analysis has enabled better packaging and processing planning."
      ]
    },
    {
      company: "PT. Metiska Farma",
      period: "August 2021 - June 2024",
      position: "Operator Packing - Farmasi",
      description: [
        "Process Improvement: Implemented a significant efficiency improvement in the packaging process for the Xeradin product, resulting in a 25,67% cost-saving and reducing packaging time per box from 3 hours to just 2.23 hours. . This initiative was part of the company’s suggestion system, where I regularly contributed process improvement ideas every six months.",
        "Adaptability: Took on additional responsibilities by serving as a backup production admin when needed. My tasks included inputting work orders (WO), managing employee leave and permissions, and updating document validations in compliance with company standards (CPOB/CPOTB/K3/SJH). This flexibility helped ensure continuity and adherence to regulatory requirements.",
        "Operational Efficiency: Managed product returns, waste disposal, and expired product tracking, which minimized waste and ensured a more organized production area."
      ],
    },
    {
      company: "PT. Palugada Informatika",
      period: "March 2020 - August 2021",
      position: "Sales Admin Online Shop - E-Commerce",
      description: [
        "Sales Growth: Successfully boosted flash sale performance on Shopee, increasing order volume from 600 to 1,000 orders by improving response rates. Achieved a response rate of 99% (up from 75%), which helped capture more customer interest and maximize order conversions during peak sales events",
        "High-Volume Order Processing: Efficiently managed up to 600 regular orders daily, while handling 900 customer chats across platforms like Tokopedia, Shopee, Bukalapak, and the company website. This ensured quick, accurate order processing and improved overall customer satisfaction.",
        "Customer Relationship Management: Negotiated with customers and suppliers, provided excellent customer service online and offline, and built rapport that led to high customer retention and positive reviews.",
        "Time Management & Reporting: Maintained accurate stock updates and sent daily reports to the director. By prioritizing tasks effectively, I ensured that orders were processed on time, even during high-traffic periods."
      ],
    },
    {
      company: "PT. Haengsung Raya Indonesia",
      period: "April 2018 - October 2018",
      position: "Operator Insert Alpha - Electronic",
      description: [
       "Consistent Productivity: Consistently met the target of inserting 8,000 cables per day while maintaining product quality, demonstrating strong efficiency and attention to detail in a high-paced production environment.",
       "Inventory Accuracy: Conducted monthly checks on product and material stocks to ensure sufficient supply for continuous production, minimizing downtime and enhancing production flow."
      ],
    },
    {
      company: "PT. Tempo Scan Pacific, tbk",
      period: "October 2017 - March 2018",
      position: "Operator Packing - Farmasi",
      description: [
        "Leadership & Team Coordination: As a team leader, I organized work assignments and motivated team members to achieve daily production goals of 700 boxes, which contributed to maintaining production efficiency.",
        "Quality Control & Problem Solving: Managed the return of defective goods, analyzed root causes, and implemented measures to prevent future issues. This proactive approach helped reduce the rate of errors and improved product quality.",
        "Daily Reporting & Maintenance: Ensured workspace cleanliness and safety by establishing a routine of daily reporting and end-of-day clean-up, which contributed to a safer and more organized working environment."
      ],
    },
  ];

 
  const handleExperienceClick = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  return (
    <div className="p-2 md:p-4 lg:p-6">

      <table className="min-w-full">
        <tbody>
          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
              {/* Baris untuk Nama Company dan Period */}
              <tr onClick={() => handleExperienceClick(index)} style={{ cursor: "pointer" }}>
                <td className="py-3 px-4 text-xs md:text-base lg:text-lg font-semibold text-left">{exp.company}<br /><span className="italic">{exp.position}</span></td>
                <td className="py-3 px-4 text-xs md:text-base lg:text-lg font-semibold text-right">{exp.period}</td>
              </tr>
              
              {/* Deskripsi pengalaman */}
              {selectedExperience === index && (
                <tr>
                  <td colSpan={2} className="py-3 px-4 text-xs md:text-lg lg:text-xlanimate-fadeIn">
                    <ul className="list-disc pl-5">
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
