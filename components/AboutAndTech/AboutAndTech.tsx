import React from "react";

interface AboutAndTechProps {
  children: React.ReactNode;
}

const AboutAndTech = ({ children }: AboutAndTechProps) => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
      {children}
    </div>
  );
};

export default AboutAndTech;
