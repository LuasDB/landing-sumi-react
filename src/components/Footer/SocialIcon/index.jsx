import { Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';

const SocialIcon = ({ social, index }) => {
  const getIcon = (iconName) => {
    const icons = {
      linkedin: Linkedin,
      youtube: Youtube,
      facebook: Facebook,
      twitter: Twitter
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-3 bg-gray-700 rounded-lg transition-all duration-300 ${social.color} hover:bg-gray-600 hover:scale-110 hover:-translate-y-1`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
      aria-label={social.nombre}
    >
      {getIcon(social.icono)}
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {social.nombre}
      </div>
    </a>
  );
};

export default SocialIcon;