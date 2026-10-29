import React from 'react';

interface SectionTitleProps {
    label: string;
    title: string;
    description?: string;
    centered?: boolean;
}

const SectionTitle = ({label, title, description, centered = false }: SectionTitleProps) => {
    
    return (
        <div className={`mb-12 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{label}</span>
      <h2 className="section-heading mt-5">{title}</h2>
      {description && <p className="section-copy mt-4 text-base">{description}</p>
      }
    </div>
    );
};

export default SectionTitle;