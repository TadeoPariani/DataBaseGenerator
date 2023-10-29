import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white p-4 mt-auto">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <img src="LogoDB.png" alt="Logo" className="h-12 w-12 mr-4" />
          <span className="text-lg font-bold text-orange-300">DatabaseGenerator</span>
        </div>
        <div className="flex space-x-4">
          <img src="github.png" alt="Logo" className="h-8 w-9 mr-4" />
          <a href="https://github.com/TadeoPariani" className="hover:text-indigo-500">Contacto</a>
          <img src="contact.png" alt="Logo" className="h-8 w-9" />
          <a href="/https://github.com/TadeoPariani/DataBaseGenerator" className="hover:text-indigo-500">Info</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
