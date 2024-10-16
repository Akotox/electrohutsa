import React from 'react';

interface ServicesCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden">
      <img className="object-cover h-48 w-full" src={imageUrl} alt={title} />
      <div className="flex-1 flex flex-col p-6">
        <div className="flex-1">
          <header className="mb-2">
            <h2 className="text-xl font-extrabold leading-snug">
              <a className="text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" href="#0">
                {title}
              </a>
            </h2>
          </header>
          <div className="text-sm text-slate-600 mb-8">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
