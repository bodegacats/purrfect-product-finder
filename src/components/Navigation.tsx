
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/litter", label: "Litter & Systems" },
    { href: "/food", label: "Food & Nutrition" },
    { href: "/scratching", label: "Scratching & Furniture" },
    { href: "/toys", label: "Toys & Entertainment" },
    { href: "/nine-lives-certified", label: "9 Lives Certified" },
    { href: "/research", label: "Research" },
    { href: "/how-we-rate", label: "How We Rate" }
  ];

  return (
    <div className="hidden md:flex items-center space-x-1">
      <nav className="flex space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              navigationMenuTriggerStyle(),
              "text-navy-600 hover:text-navy-800 hover:bg-navy-50",
              location.pathname === item.href && "bg-navy-100 text-navy-800"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Button 
        asChild
        className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2"
      >
        <Link to="/chat">Chat AI 🤖</Link>
      </Button>
    </div>
  );
};

export default Navigation;
