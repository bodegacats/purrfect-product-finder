
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/litter", label: "Litter" },
    { href: "/food", label: "Nutrition" },
    { href: "/toys", label: "Play" },
    { href: "/scratching", label: "Health" },
    { href: "/nine-lives-certified", label: "9-Lives Certified" }
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
              "text-charcoal-600 hover:text-charcoal-800 hover:bg-gray-50",
              location.pathname === item.href && "bg-gray-100 text-charcoal-800"
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
        <Link to="/chat">Chat AI</Link>
      </Button>
    </div>
  );
};

export default Navigation;
