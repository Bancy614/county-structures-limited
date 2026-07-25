import { useEffect } from 'react';

const DEFAULT_TITLE = 'County Structures Limited | Development Consultancy & Construction Services Kenya';
const DEFAULT_DESC = 'County Structures Limited — a premier Kenyan development consultancy and construction services firm. Building premium commercial & residential spaces across Kenya since 2011.';

export default function SEO({ title, description, keywords, image, type = 'website' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | County Structures Limited` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESC;

    document.title = fullTitle;

    const setMeta = (selector, content, attr = 'name') => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${selector}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, selector);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', desc);
    if (keywords) setMeta('keywords', keywords);

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:site_name', 'County Structures Limited', 'property');
    if (image) setMeta('og:image', image, 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    if (image) setMeta('twitter:image', image);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, keywords, image, type]);

  return null;
}