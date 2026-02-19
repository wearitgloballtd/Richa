import { useEffect } from "react";
import $ from "jquery";
import "./CustomSection.css";
import QualityAssurence from "../../../assets/images/qualityAssurence.png";

const CustomSection = () => {
  useEffect(() => {
    // Expose jQuery globally as required by some plugins or legacy scripts
    window.$ = $;
    window.jQuery = $;

    const fsContainer = $('#fs-container');
    const itemProject = $('.media-project-hover');

    if (fsContainer.length) {
      itemProject.each(function () {
        const that = $(this);

        that.on('mouseenter', function () {
          const bg = $(this).attr('src');

          fsContainer.delay(300).queue(function (next) {
            $(this).css('background-image', 'url("' + bg + '")');
            next();
          });
        });
      });
    }

    return () => {
      // Cleanup event listeners
      if (itemProject && itemProject.length) {
        itemProject.off('mouseenter');
      }
    };
  }, []);

  const projectItems = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2767689/pexels-photo-2767689.jpeg",
      subtitle: "Interior",
      title: "Knitting",
      number: "01",
      detailsTitle: "Knitting: Building Strong, Flexible Foundations",
      description: "Knitting is the core process where we create high-quality fabrics by interlacing yarns into interconnected loops, resulting in materials known for their stretch, breathability, and comfort.",
      points: [
        "We utilise state-of-the-art circular knitting machines equipped with electronic jacquard systems and high-speed needles to produce tubular fabrics seamlessly.",
        "Automated yarn feeding and dynamic tension control minimise defects and ensure uniform stitch density.",
        "Our machines support a wide range of fibres, including cotton, polyester, blends, and eco-friendly recycled options.",
        "Advanced sensors provide real-time monitoring, achieving fabrics with exceptional dimensional stability (less than 3% variation post-processing).",
      ],
      footer: "These technologies enable us to produce fabrics ideal for apparel, activewear, home textiles, and technical applications."
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/6850858/pexels-photo-6850858.jpeg",
      subtitle: "Architecture",
      title: "Dyeing",
      number: "02",
      detailsTitle: "Dyeing: Vibrant & Lasting Colors",
      description: "Our dyeing process ensures vibrant, long-lasting colors while maintaining fabric integrity using eco-friendly dyes.",
      points: [
        "High-pressure high-temperature (HPHT) jet dyeing machines.",
        "Sustainable water management and recycling systems.",
        "Computer-controlled color matching for precision.",
      ],
      footer: "Perfect for fashion and industrial textiles requiring colorfastness."
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/6461091/pexels-photo-6461091.jpeg",
      subtitle: "Architecture",
      title: "Processing",
      number: "03",
      detailsTitle: "Processing: Enhancing Performance",
      description: "Textile processing involves treatments that improve the feel, appearance, and durability of the fabric.",
      points: [
        "Compacting and calendering for smooth textural finish.",
        "Hydro-extraction for efficient moisture removal.",
        "Heat setting for dimensional stability.",
      ],
      footer: "Ensuring fabrics meet global quality standards."
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2767689/pexels-photo-2767689.jpeg",
      subtitle: "Landscape",
      title: "Finishing",
      number: "04",
      detailsTitle: "Finishing: The Final Touch",
      description: "Our finishing touches add value through softeners, enzymes, and functional treatments.",
      points: [
        "Anti-microbial and moisture-wicking finishes.",
        "Stenter frames for precise width control.",
        "Quality inspection at every stage.",
      ],
      footer: "Delivering ready-to-cut fabrics for garment production."
    },
    {
      id: 5,
      src: QualityAssurence,
      subtitle: "Architecture",
      title: "Quality Assurance",
      number: "05",
      detailsTitle: "Quality Assurance: Zero Compromise",
      description: "We maintain rigorous quality control protocols to ensure every meter of fabric meets our high standards.",
      points: [
        "4-point inspection system.",
        "In-house physical and chemical testing labs.",
        "Continuous improvement through data analytics.",
      ],
      footer: "Committed to excellence in every thread."
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
                Engineering Quality from Yarn to Fabric
              </h1>
            </div>
          </div>
          <section id="fs-container">
            {projectItems.map((item) => (
              <div key={item.id} className="media-project-hover" src={item.src}>
                <div className="bg-overlay"></div>

                {/* Default Content (Visible when not hovered) */}
                <div className="media__body default-content">
                  <h5 className="media__sub-title title-sub font-EireneSansRegular">
                    {item.subtitle}
                  </h5>
                  <h3 className="media__title font-KuraleRegular">
                    <a href="project-grid-full.html">{item.title}</a>
                  </h3>
                </div>
                <span className="media__number default-content">{item.number}</span>

                {/* Hover Content (Hidden by default, visible on hover) */}
                <div className="hover-content">
                  <h3 className="hover-title text-3xl font-bold">{item.detailsTitle || item.title}</h3>
                  <div className="hover-separator"></div>

                  <p className="hover-description mb-6">{item.description}</p>

                  {item.points && (
                    <ul className="hover-points mb-4 text-sm font-light">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>
                  )}
                  {item.footer && <p className="hover-footer text-xs italic">{item.footer}</p>}
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
