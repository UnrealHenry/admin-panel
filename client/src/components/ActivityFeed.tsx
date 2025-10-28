import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  LoginIcon, 
  LogoutIcon, 
  UserCreatedIcon, 
  UserUpdatedIcon, 
  UserDeletedIcon, 
  ProductIcon,
  AlertIcon
} from './icons';

interface ActivityItem {
  id: number;
  type: 'login' | 'logout' | 'user_created' | 'user_updated' | 'user_deleted' | 'product_created' | 'product_updated' | 'product_deleted';
  user: string;
  description: string;
  timestamp: string;
}

const ActivityFeed: React.FC = () => {
  const { t } = useLanguage();

  // Mock activity data
  const activities: ActivityItem[] = [
    {
      id: 1,
      type: 'login',
      user: 'John Doe',
      description: 'Logged into the system',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: 2,
      type: 'user_created',
      user: 'Admin',
      description: 'Created new user account for Sarah Wilson',
      timestamp: '2024-01-15T09:15:00Z'
    },
    {
      id: 3,
      type: 'user_updated',
      user: 'Jane Smith',
      description: 'Updated profile information',
      timestamp: '2024-01-15T08:45:00Z'
    },
    {
      id: 4,
      type: 'product_created',
      user: 'Mike Johnson',
      description: 'Added new product "Premium Widget"',
      timestamp: '2024-01-15T08:20:00Z'
    },
    {
      id: 5,
      type: 'logout',
      user: 'Tom Brown',
      description: 'Logged out of the system',
      timestamp: '2024-01-15T07:55:00Z'
    },
    {
      id: 6,
      type: 'user_deleted',
      user: 'Admin',
      description: 'Deleted inactive user account',
      timestamp: '2024-01-15T07:30:00Z'
    }
  ];

  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'login':
        return (
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <LoginIcon />
          </div>
        );
      case 'logout':
        return (
          <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <LogoutIcon />
          </div>
        );
      case 'user_created':
        return (
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <UserCreatedIcon />
          </div>
        );
      case 'user_updated':
        return (
          <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
            <UserUpdatedIcon />
          </div>
        );
      case 'user_deleted':
        return (
          <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <UserDeletedIcon />
          </div>
        );
      case 'product_created':
      case 'product_updated':
      case 'product_deleted':
        return (
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            <ProductIcon />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
            <AlertIcon />
          </div>
        );
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - activityTime.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) {
      return t('common.justNow', { fallback: 'Just now' });
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} ${t('common.minutesAgo', { fallback: 'minutes ago' })}`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} ${t('common.hoursAgo', { fallback: 'hours ago' })}`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} ${t('common.daysAgo', { fallback: 'days ago' })}`;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t('dashboard.recentActivity')}
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              {getActivityIcon(activity.type)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.user}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formatTimeAgo(activity.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
            {t('common.viewAll', { fallback: 'View all activity' })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed; 