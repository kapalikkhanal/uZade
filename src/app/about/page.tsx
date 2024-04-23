import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import { Button, Feature, } from "@/types";
import Link from "next/link";

const About = () => {
  // const { frontmatter, content } = data;
  const aboutpage = getListPage("about/_index.md");
  const { frontmatter } = aboutpage;

  const {
    banner,
    features,
  }: {
    banner: { title: string; heading: string; heading_content: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta
        title={banner.title}
        description={banner.content}
        image={banner.image}
      />

      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
              {banner.image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={banner.image}
                  width={300}
                  height={200}
                  alt={banner.title}
                />
              )}
            </div>
            <div className="lg:col-7 md:col-9 mb-8 text-center">
              <h1
                className="mb-4 text-h3 lg:text-h3"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              <h1
                className="mb-4 text-h5 lg:text-h5"
                dangerouslySetInnerHTML={markdownify(banner.heading)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.heading_content ?? "")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
