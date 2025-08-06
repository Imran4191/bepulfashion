import Footer from 'components/layout/footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-8 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go back home
        </Link>
      </div>
      <Footer />
    </>
  );
}