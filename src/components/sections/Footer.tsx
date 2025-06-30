
const Footer = () => {
  return (
    <footer className="bg-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">🐱 CatData AI</h3>
            <p className="text-navy-300">
              The most trusted source for cat product research, made by cat lovers for cat lovers! 💙
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Research 🔍</h4>
            <ul className="space-y-2 text-navy-300">
              <li><a href="#" className="hover:text-white transition-colors">Food & Treats 🍽️</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toys & Enrichment 🧸</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health & Wellness 💊</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources 📚</h4>
            <ul className="space-y-2 text-navy-300">
              <li><a href="#" className="hover:text-white transition-colors">Testing Process 🧪</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Expert Reviews ⭐</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cat Care Tips 💡</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company 🏢</h4>
            <ul className="space-y-2 text-navy-300">
              <li><a href="#" className="hover:text-white transition-colors">About Our Team 👥</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us 📧</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy 🔒</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-navy-400">
          <p>&copy; 2024 CatData AI. Made with 💙 by cat parents, for cat parents.</p>
          {/* FTC affiliate disclosure in site-wide footer */}
          <p className="mt-2 text-sm">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
