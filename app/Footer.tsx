import DeveloperFooter from "./DeveloperFooter";
import SocialMediaLinks from "./SocialMedia";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-4">
      <div className="container mx-auto">
        <SocialMediaLinks />
        <DeveloperFooter />
      </div>
    </footer>
  );
};

export default Footer;
