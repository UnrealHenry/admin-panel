import React from 'react';

// Base icon props interface
interface IconProps {
  className?: string;
  size?: number;
}

// Utility function to create consistent icon styling
const createIcon = (paths: string[], className = "w-5 h-5", size = 20) => {
  return ({ className: customClassName, size: customSize }: IconProps = {}) => (
    <svg 
      className={customClassName || className} 
      width={customSize || size} 
      height={customSize || size}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
};

// Navigation Icons
export const DashboardIcon = createIcon([
  "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
]);

export const UsersIcon = createIcon([
  "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
  "M9 11a4 4 0 100-8 4 4 0 000 8z",
  "M23 21v-2a4 4 0 00-3-3.87",
  "M16 3.13a4 4 0 010 7.75"
]);

export const ChartsIcon = createIcon([
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
]);

export const FormsIcon = createIcon([
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
]);

export const SettingsIcon = createIcon([
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
]);

export const UploadIcon = createIcon([
  "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
]);

// Header Icons
export const MenuIcon = createIcon([
  "M4 6h16M4 12h16M4 18h16"
], "w-6 h-6", 24);

export const NotificationIcon = createIcon([
  "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
], "w-6 h-6", 24);

export const ChevronDownIcon = createIcon([
  "M19 9l-7 7-7-7"
], "w-4 h-4", 16);

export const ChevronUpIcon = createIcon([
  "M5 15l7-7 7 7"
], "w-4 h-4", 16);

// Action Icons
export const AddIcon = createIcon([
  "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
]);

export const EditIcon = createIcon([
  "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
]);

export const DeleteIcon = createIcon([
  "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
]);

export const SearchIcon = createIcon([
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
]);

export const FilterIcon = createIcon([
  "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
]);

// Status Icons
export const CheckIcon = createIcon([
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
]);

export const XIcon = createIcon([
  "M6 18L18 6M6 6l12 12"
]);

export const ClockIcon = createIcon([
  "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
]);

export const AlertIcon = createIcon([
  "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
]);

// Dashboard Stats Icons
export const UsersStatsIcon = createIcon([
  "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
  "M9 11a4 4 0 100-8 4 4 0 000 8z",
  "M23 21v-2a4 4 0 00-3-3.87",
  "M16 3.13a4 4 0 010 7.75"
], "w-6 h-6", 24);

export const OrdersIcon = createIcon([
  "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
], "w-6 h-6", 24);

export const RevenueIcon = createIcon([
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
], "w-6 h-6", 24);

export const GrowthIcon = createIcon([
  "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
], "w-6 h-6", 24);

// Activity Feed Icons
export const LoginIcon = createIcon([
  "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
], "w-4 h-4", 16);

export const LogoutIcon = createIcon([
  "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
], "w-4 h-4", 16);

export const UserCreatedIcon = createIcon([
  "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
], "w-4 h-4", 16);

export const UserUpdatedIcon = createIcon([
  "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
], "w-4 h-4", 16);

export const UserDeletedIcon = createIcon([
  "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
], "w-4 h-4", 16);

export const ProductIcon = createIcon([
  "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
], "w-4 h-4", 16);

// Settings Icons
export const BellIcon = createIcon([
  "M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 00-6 6v3.75l-2.25 2.25V19.5h15V15.75L17.25 13.5V9.75a6 6 0 00-6-6z"
], "w-4 h-4", 16);

export const EmailIcon = createIcon([
  "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
], "w-4 h-4", 16);

export const PhoneIcon = createIcon([
  "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
], "w-4 h-4", 16);

// Language Toggle Icons
export const GlobeIcon = createIcon([
  "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
], "w-4 h-4", 16);

// Flag Icons
export const USFlagIcon: React.FC<IconProps> = ({ className = "w-5 h-3", size = 20 }) => (
  <svg 
    className={className} 
    width={size} 
    height={size * 0.6}
    viewBox="0 0 20 12"
    fill="none"
  >
    {/* US Flag stripes */}
    <rect width="20" height="12" fill="#B22234"/>
    <rect y="0.923" width="20" height="0.923" fill="white"/>
    <rect y="2.769" width="20" height="0.923" fill="white"/>
    <rect y="4.615" width="20" height="0.923" fill="white"/>
    <rect y="6.462" width="20" height="0.923" fill="white"/>
    <rect y="8.308" width="20" height="0.923" fill="white"/>
    <rect y="10.154" width="20" height="0.923" fill="white"/>
    {/* Blue canton */}
    <rect width="8" height="6.462" fill="#3C3B6E"/>
    {/* Stars (simplified) */}
    <circle cx="1.5" cy="1.5" r="0.3" fill="white"/>
    <circle cx="3" cy="1.5" r="0.3" fill="white"/>
    <circle cx="4.5" cy="1.5" r="0.3" fill="white"/>
    <circle cx="6" cy="1.5" r="0.3" fill="white"/>
    <circle cx="2.25" cy="2.5" r="0.3" fill="white"/>
    <circle cx="3.75" cy="2.5" r="0.3" fill="white"/>
    <circle cx="5.25" cy="2.5" r="0.3" fill="white"/>
    <circle cx="1.5" cy="3.5" r="0.3" fill="white"/>
    <circle cx="3" cy="3.5" r="0.3" fill="white"/>
    <circle cx="4.5" cy="3.5" r="0.3" fill="white"/>
    <circle cx="6" cy="3.5" r="0.3" fill="white"/>
    <circle cx="2.25" cy="4.5" r="0.3" fill="white"/>
    <circle cx="3.75" cy="4.5" r="0.3" fill="white"/>
    <circle cx="5.25" cy="4.5" r="0.3" fill="white"/>
  </svg>
);

export const JapanFlagIcon: React.FC<IconProps> = ({ className = "w-5 h-3", size = 20 }) => (
  <svg 
    className={className} 
    width={size} 
    height={size * 0.6}
    viewBox="0 0 20 12"
    fill="none"
  >
    {/* White background */}
    <rect width="20" height="12" fill="white"/>
    {/* Red circle (sun) */}
    <circle cx="10" cy="6" r="3.5" fill="#BC002D"/>
  </svg>
);

// Language Icons
export const LanguageIcon = createIcon([
  "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.64-6.9-.02-.04-.04-.08-.07-.12-.13-.25-.27-.49-.42-.72-.15-.23-.23-.45-.45-.67-.17-.22-.35-.43-.54-.63-.19-.2-.39-.39-.59-.57-.2-.18-.41-.35-.62-.54-.21-.16-.43-.31-.65-.45-.22-.14-.44-.27-.67-.39-.23-.12-.46-.23-.7-.33-.24-.1-.48-.19-.72-.27-.24-.08-.49-.15-.73-.21-.25-.06-.49-.11-.74-.15-.25-.04-.5-.07-.75-.09-.25-.02-.5-.03-.75-.03-.25 0-.5.01-.75.03-.25.02-.5.05-.75.09-.25-.04.49-.09.74-.15.25-.06.49-.13.73-.21.24-.08.48-.17.72-.27.24-.1.47-.21.7-.33.23-.12.45-.25.67-.39.22-.14.43-.29.65-.45.21-.16.42-.33.62-.51.2-.18.4-.37.59-.57.19-.2.37-.41.54-.63.17-.22.33-.44.48-.67.15-.23.29-.47.42-.72.03-.04.05-.08.07-.12 1.37-2.25 1.1-4.96-.64-6.9l-.03-.03 2.54-2.51c.19-.19.49-.19.68 0 .19.19.19.49 0 .68z"
], "w-4 h-4", 16);

// Logo Icon
export const LogoIcon = createIcon([
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
], "w-6 h-6", 24);

// Arrow Icons
export const ArrowLeftIcon = createIcon([
  "M15 19l-7-7 7-7"
], "w-4 h-4", 16);

export const ArrowRightIcon = createIcon([
  "M9 5l7 7-7 7"
], "w-4 h-4", 16);

// Close Icon
export const CloseIcon = createIcon([
  "M6 18L18 6M6 6l12 12"
], "w-6 h-6", 24);

// Loading Spinner
export const LoadingSpinner: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg 
    className={`animate-spin ${className}`}
    width={size} 
    height={size}
    fill="none" 
    viewBox="0 0 24 24"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
); 