import { useEffect } from "react";
import $ from "jquery";
import "./CustomSection.css";
import QualityAssurence from "../../../assets/images/qualityAssurence.png";

const CustomSection = () => {
  useEffect(() => {
    // Expose jQuery globally as required by some plugins or legacy scripts
    window.$ = $;
    window.jQuery = $;

    const fsContainer = $("#fs-container");
    const itemProject = $(".media-project-hover");

    if (fsContainer.length) {
      itemProject.each(function () {
        const that = $(this);

        that.on("mouseenter", function () {
          const bg = $(this).attr("src");

          fsContainer.delay(300).queue(function (next) {
            $(this).css("background-image", 'url("' + bg + '")');
            next();
          });
        });
      });
    }

    return () => {
      // Cleanup event listeners
      if (itemProject && itemProject.length) {
        itemProject.off("mouseenter");
      }
    };
  }, []);

  const projectItems = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2767689/pexels-photo-2767689.jpeg",
      title: "Knitting",
      number: "01",
      detailsTitle: "Building Strong, Flexible Foundations",
      description:
        "We create high-quality greige knitted fabrics using state-of-the-art circular knitting machines with electronic jacquard and high-speed needles.",
      points: [
        "Tubular fabrics with uniform stitch density and controlled GSM.",
        "Specialties: single jersey, interlock, Lycra blends, rib, piqué, structured knits.",
        "Wide fibre range: cotton, polyester, bamboo blends, recycled yarns.",
        "Real-time monitoring ensures exceptional dimensional stability (variation <3% post-processing).",
        "",
      ],
      footer:
        "Fabrics ready for dyeing — ideal for apparel, activewear, and performance wear.",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/6850858/pexels-photo-6850858.jpeg",
      title: "Dyeing",
      number: "02",
      detailsTitle: "Dyeing: Vibrant & Lasting Colors",
      description:
        "We dye knitted fabrics with vibrant, long-lasting colours while keeping the fabric soft and strong — using eco-friendly dyes and low-impact processes.",
      points: [
        "High-pressure high-temperature (HPHT) jet dyeing machines for even penetration and excellent fastness.",
        "Brazzoli technology for gentle handling and low water use (1:6–1:8 liquor ratio)",
        "Computer-controlled colour matching with spectrophotometer for exact shade reproduction.",
        "Water recycling and sustainable effluent treatment to minimize environmental impact",
        "Consistent results on cotton, polyester blends, Lycra, and bamboo — ready for apparel and activewear.",
      ],
      footer: "Perfect colour that stays true wash after wash.",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/6461091/pexels-photo-6461091.jpeg",
      subtitle: "Architecture",
      title: "Processing",
      number: "03",
      detailsTitle: "Processing: Enhancing Performance & Feel",
      description:
        "We process knitted fabrics to achieve the perfect hand-feel, dimensional stability, and performance — turning greige rolls into ready-to-cut material.",
      points: [
        "Compacting and calendaring for smooth, even texture and controlled shrinkage.",
        "Hydro-extraction to remove excess moisture efficiently before drying.",
        "Heat-setting for excellent dimensional stability (shrinkage <3–5% after wash).",
        "Brushing and sueding options for soft, premium touch on fleece or structured knits.",
        "Precision machines ensure low elongation and consistent width/weight (GSM control)",
      ],
      footer:
        "Fabrics emerge soft, stable, and ready for garment making — with the durability activewear and apparel brands demand.",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2767689/pexels-photo-2767689.jpeg",
      subtitle: "Landscape",
      title: "Finishing",
      number: "04",
      detailsTitle: "Finishing: The Final Touch",
      description:
        "We give knitted fabrics their final premium feel, look, and performance — adding softness, stability, and functionality that brands love.",
      points: [
        "Enzyme washes and softeners for silky hand-feel and natural drape.",
        "Heat-setting and calendaring for dimensional stability and smooth surface.",
        "Anti-pilling and anti-microbial treatments for long-lasting wear.",
        "Stenter frames for precise width control and even shrinkage (target <5%).",
        "Functional finishes like moisture-wicking or wrinkle-resistant for activewear.",
      ],
      footer:
        "Every roll is inspected for defects before packing — delivering ready-to-cut fabrics that perform perfectly in garments.",
    },
    {
      id: 5,
      src: QualityAssurence,
      title: "Quality Assurance",
      number: "05",
      detailsTitle: "Quality Assurance: Zero Compromise",
      description:
        "We maintain rigorous checks at every stage to ensure every meter of fabric meets our high standards — no exceptions.",
      points: [
        "4-point inspection system for defects (holes, barré, stains, uneven dyeing).",
        "In-house physical & chemical labs test GSM, shrinkage, colour fastness, pilling, stretch recovery, and tear strength.",
        "Continuous monitoring with data analytics for real-time corrections.",
        "Final roll audits before packing — guaranteeing consistency and zero returns.",
        "Compliance with global standards (e.g., ISO 9001, colour fastness ratings 4–5).",
      ],
      footer:
        "Committed to excellence in every thread — fabrics that perform reliably from factory to customer.",
    },
  ];

  return (
    <div className="animsition js-preloader">
      <div className="page-wrapper">
        <main id="main">
          {/* Header Section */}
          <div className="w-full bg-white px-8 lg:px-20 pt-20 pb-10">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-xl tracking-tight mb-2 text-[#BB2929] font-['EireneSansRegular']">
                Quality Engineering
              </h3>
              <h1 className="text-5xl lg:text-6xl leading-[0.95] tracking-tight font-KuraleRegular mb-6 text-black">
                Engineered Precision from Yarn to Finished Fabric
              </h1>
            </div>
          </div>
          <section id="fs-container">
            {projectItems.map((item) => (
              <div key={item.id} className="media-project-hover" src={item.src}>
                <div className="bg-overlay"></div>

                {/* Default Content (Visible when not hovered) */}
                <div className="media__body default-content">
                  <h3 className="media__title !font-KuraleRegular">
                    <a href="project-grid-full.html">{item.title}</a>
                  </h3>
                </div>
                <span className="media__number default-content">
                  {item.number}
                </span>

                {/* Hover Content (Hidden by default, visible on hover) */}
                <div className="hover-content">
                  <h3 className="hover-title text-4xl">
                    {item.detailsTitle || item.title}
                  </h3>
                  <div className="hover-separator"></div>

                  <p className="hover-description mb-6">{item.description}</p>

                  {item.points && (
                    <ul className="hover-points mb-4 text-lg font-light">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.footer && (
                    <p className="hover-footer text-base italic">
                      {item.footer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default CustomSection;
