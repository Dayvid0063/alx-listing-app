import Image from "next/image";
import localFont from "next/font/local";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { PLACEHOLDER_IMAGES } from "../constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Sample listing data
const sampleListings = [
  {
    title: "Modern Beachfront Villa",
    description: "Luxurious 3-bedroom villa with stunning ocean views and private pool",
    price: 299,
    image: PLACEHOLDER_IMAGES.VILLA,
    location: "Malibu, California",
    rating: 4.9,
  },
  {
    title: "Cozy Mountain Cabin",
    description: "Rustic 2-bedroom cabin surrounded by pine trees with hiking trails nearby",
    price: 149,
    image: PLACEHOLDER_IMAGES.CABIN,
    location: "Aspen, Colorado",
    rating: 4.7,
  },
  {
    title: "Downtown Loft",
    description: "Contemporary loft in the heart of the city with modern amenities",
    price: 199,
    image: PLACEHOLDER_IMAGES.LOFT,
    location: "New York City, NY",
    rating: 4.8,
  },
];

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            className=""
            src="/assets/airbnb.jpg"
            alt="airbnb"
            width={200}
            height={40}
            priority
          />
          <Button
            label="search"
            variant="primary"
            size="medium"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-gray-600 font-bold mb-4">Find Your Next Stay!</h1>
          <p className="text-gray-600 mb-6">
            Discover the perfect space for your next adventure
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              label="Explore homes"
              variant="primary"
              size="large"
            />
            <Button
              label="Learn more"
              variant="secondary"
              size="large"
            />
          </div>
        </section>

        {/* Listings Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleListings.map((listing, index) => (
            <Card
              key={index}
              {...listing}
              onClick={() => console.log(`Clicked listing: ${listing.title}`)}
            />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-500 border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Support</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
          <p className="text-sm">© 2024 ALX Listing App.</p>
        </div>
      </footer>
    </div>
  );
}
