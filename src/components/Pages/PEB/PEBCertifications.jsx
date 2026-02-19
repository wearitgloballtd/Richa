import React from "react";
import CertificationsSection from "../../common/CertificationsSection";

const PEBCertifications = () => {
  return (
    <CertificationsSection
      imageSrc="https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg"
      isoText="ISO 9001:2015"
      subtitle="Quality & Standards"
      title="Quality Assurance <br /> & Certifications"
      description="Quality is embedded in every step. Our QA processes include:"
      listItems={[
        "Material testing for tensile strength and composition",
        "Weld inspections and dimensional accuracy checks",
        "Load and structural compliance per codes",
        "Full traceability and documentation",
      ]}
      footerText="We maintain ISO 9001:2015 certification and adhere to international norms for consistent, dependable output."
      accentColor="#BB2929"
      pinLineClass="-left-[140px] w-[120px]"
      buttonText="View Certification"
    />
  );
};

export default PEBCertifications;
