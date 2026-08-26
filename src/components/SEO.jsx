import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://alphaonefitnessclub.vercel.app';
const SITE_NAME = 'Alphaone Fitness Club';

/**
 * Reusable SEO component — drop it at the top of any page.
 * It dynamically sets the <title>, meta description, canonical URL,
 * and Open Graph / Twitter card tags for that page.
 */
export default function SEO({
  title,
  description,
  path = '/',
  keywords,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Premium Gym in Andheri West`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp previews) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
    </Helmet>
  );
}
