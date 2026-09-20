import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="robots" content="noindex" />
    </Helmet>
  );
}
