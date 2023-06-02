import Link from 'next/link';
import Image from 'next/image';


const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-black-500 mb-6">This is not the page you are looking for</p>
      <div className="w-96 h-64 mb-6">
        <Image
          src="/obi-wan.jpg"
          alt="Description of the image"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
      <Link href="/">
        <p className="text-blue-500">Go back to the homepage</p>
      </Link>
    </div>
  );
};

export default Custom404;
