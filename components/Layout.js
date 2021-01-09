import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="relative w-full h-screen from-light-yellow to-light-orange bg-gradient-to-br font-raleway overflow-x-hidden">
      <Navigation />
      {children}
    </div>
  );
}
