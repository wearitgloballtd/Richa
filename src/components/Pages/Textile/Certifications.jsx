import React from "react";
import CertificationsSection from "../../common/CertificationsSection";

const Certifications = () => {
  return (
    <CertificationsSection
      imageSrc="https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg"
      isoText="ISO Certified"
      subtitle="Quality & Standards"
      title="Quality Assurance <br /> & Certifications"
      description="Quality is non negotiable at every stage. Our dedicated QA team conducts rigorous testing:"
      listItems={[
        "Colour fastness (washing, rubbing, light, perspiration) per ISO/AATCC standards",
        "Dimensional stability, pilling, and tensile strength checks",
        "Full traceability from raw yarn to finished roll",
      ]}
      footerText="We hold ISO 9001:2015 certification and comply with global environmental and safety norms, ensuring consistent, reliable output for demanding clients."
      accentColor="#BB2929"
      pinLineClass="-left-[180px] w-[180px]"
      buttonText="View Certification"
    />
  );
};

export default Certifications;
