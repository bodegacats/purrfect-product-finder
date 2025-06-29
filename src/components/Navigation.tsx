
import { Link, useLocation } from "react-router-dom";
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
    { href: "/how-we-rate", label: "How We Rate" },
    { href: "/chat", label: "Chat AI 🤖" }
  ];

  return (
    <nav className="hidden md:flex space-x-1">
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
  );
};

export default Navigation;
