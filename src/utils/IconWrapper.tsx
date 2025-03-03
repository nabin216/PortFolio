import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ 
  icon, 
  className = '' 
}) => {
  // Cast the icon to any to bypass TypeScript's type checking
  // This is safe because IconType from react-icons is meant to be used as a component
  const IconComponent = icon as React.ComponentType<any>;
  
  return (
    <span className={className}>
      <IconComponent />
    </span>
  );
}; 