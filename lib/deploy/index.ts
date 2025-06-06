const REPOSITORY_URL = "https://github.com/raphaelsalaja/minisite";
const PROJECT_NAME = "portfolio";
const REPOSITORY_NAME = "portfolio";
const REDIRECT_URL = "https://twitter.com/raphaelsalaja";
const DEMO_TITLE = "next-minisite-portfolio";
const DEMO_DESCRIPTION = "A minimal blog built with Next.js.";
const DEMO_URL = "https://next-minisite-portfolio.vercel.app";
const DEMO_IMAGE = "next-minisite-portfolio.vercel.app/preview.png";

const DeployLink = `https://vercel.com/new/clone?repository-url=${encodeURIComponent(REPOSITORY_URL)}&env=NEXT_PUBLIC_SITE_URL&project-name=${PROJECT_NAME}&repository-name=${REPOSITORY_NAME}&redirect-url=${encodeURIComponent(REDIRECT_URL)}&demo-title=${DEMO_TITLE}&demo-description=${encodeURIComponent(DEMO_DESCRIPTION)}&demo-url=${encodeURIComponent(DEMO_URL)}&demo-image=${encodeURIComponent(DEMO_IMAGE)}`;

export { DeployLink };
