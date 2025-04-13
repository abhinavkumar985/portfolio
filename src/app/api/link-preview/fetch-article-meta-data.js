const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const categories = [
  {
    category_name: "JavaScript",
    links: [
      "https://medium.com/gitconnected/no-more-external-js-for-custom-dropdowns-native-select-is-now-fully-customizable-b43050f5cb2b",
      "https://medium.com/javascript-in-plain-english/typescript-5-8-smarter-faster-and-more-efficient-30b5ea678ede",
      "https://medium.com/gitconnected/most-unused-javascript-array-functions-1b11550c881b",
      "https://medium.com/gitconnected/the-cookie-crumbles-topics-api-googles-new-privacy-centric-ad-targeting-in-2024-172c1f383409",
      "https://medium.com/gitconnected/breaking-loops-in-style-have-you-used-labeled-statements-in-javascript-0957e20af80b",
      "https://medium.com/javascript-in-plain-english/boost-your-web-page-rendering-performance-by-using-content-visibility-5fe4e2fc4fa6",
      "https://medium.com/javascript-in-plain-english/creating-scroll-animations-with-new-scroll-driven-animations-api-74ac61c34b21",
      "https://medium.com/javascript-in-plain-english/did-you-use-hidden-until-found-html-attribute-9b2eeca81393",
      "https://medium.com/javascript-in-plain-english/did-you-use-is-a-css-pseudo-class-function-ed2f366cfd2d",
      "https://medium.com/javascript-in-plain-english/the-web-is-always-under-construction-google-chrome-in-2023-1c0e6897579e",
      "https://medium.com/javascript-in-plain-english/nodejs-webhook-for-dialogflow-fulfillment-a8e392b257b8"
    ]
  },
  {
    category_name: "Personal Journey",
    links: [
      "https://medium.com/@abhinavkumar985/exploring-node-js-18-feature-3428f4b72b9f",
      "https://medium.com/@abhinavkumar985/moving-to-germany-as-a-software-engineer-part-1-935fb21a6b52",
      "https://medium.com/@abhinavkumar985/moving-to-germany-as-a-software-engineer-part-2-3a36f8cffdf4",
      "https://medium.com/@abhinavkumar985/moving-to-germany-as-a-software-engineer-part-3-e8def6053abd",
      "https://medium.com/@abhinavkumar985/my-journey-to-zalando-se-berlin-part-4-91b8ab6ed234",
      "https://levelup.gitconnected.com/zalando-interview-experience-9635dc7d0b56",
      "https://abhinavkumar985.medium.com/moving-to-germany-is-now-easier-than-ever-with-the-new-opportunity-card-25e5e988ee4e",
      "https://levelup.gitconnected.com/a-bit-about-germanys-economy-social-life-5ee8761437f8"
    ]
  },
  {
    category_name: "Interview Experiences",
    links: [
      "https://medium.com/gitconnected/zalando-interview-experience-9635dc7d0b56",
      "https://medium.com/gitconnected/amazon-frontend-engineer-interview-experience-2024-berlin-ee61eb79601e",
      "https://medium.com/javascript-in-plain-english/amazon-final-interview-interview-loop-experience-9a9b08cf6525"
    ]
  }
];

async function fetchMetaData() {
  const results = [];

  for (const category of categories) {
    for (const url of category.links) {
      try {
        const response = await fetch(url);
        const html = await response.text();
        const dom = new JSDOM(html);
        const doc = dom.window.document;

        const getMeta = (name) =>
          doc.querySelector(`meta[property="${name}"]`)?.getAttribute("content") ||
          doc.querySelector(`meta[name="${name}"]`)?.getAttribute("content");

        results.push({
          category_name: category.category_name,
          url,
          title: getMeta("og:title") || doc.title,
          description: getMeta("og:description") || "",
          image: getMeta("og:image") || "",
          hostname: new URL(url).hostname,
        });
      } catch (err) {
        console.error(`Failed to fetch metadata for ${url}:`, err);
      }
    }
  }

  const outputPath = path.join(__dirname, "article-metadata.json");
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Metadata written to ${outputPath}`);
}

fetchMetaData();