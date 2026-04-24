export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        © {new Date().getFullYear()} Atlantic Painting. All rights reserved.
      </div>
    </footer>
  );
}
