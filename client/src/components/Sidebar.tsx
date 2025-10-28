import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useRole } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  DashboardIcon, 
  UsersIcon, 
  ChartsIcon, 
  FormsIcon, 
  SettingsIcon, 
  UploadIcon,
  LogoIcon,
  CloseIcon
} from './icons'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const { isManager, isViewer } = useRole()
  const { t } = useLanguage()

  // Navigation items array with role-based visibility
  const navItems = [
    { path: '/', name: t('navigation.dashboard'), icon: DashboardIcon, roles: ['admin', 'manager', 'viewer'] },
    { path: '/users', name: t('navigation.users'), icon: UsersIcon, roles: ['admin', 'manager'] },
    { path: '/analytics', name: t('navigation.analytics'), icon: ChartsIcon, roles: ['admin', 'manager', 'viewer'] },
    { path: '/forms', name: t('navigation.forms'), icon: FormsIcon, roles: ['admin', 'manager'] },
    { path: '/upload', name: t('navigation.upload'), icon: UploadIcon, roles: ['admin', 'manager'] },
    { path: '/settings', name: t('navigation.settings'), icon: SettingsIcon, roles: ['admin', 'manager', 'viewer'] },
  ]

  // Filter navigation items based on user role
  const filteredNavItems = navItems.filter(item => {
    if (item.roles.includes('admin')) return true
    if (item.roles.includes('manager') && isManager()) return true
    if (item.roles.includes('viewer') && isViewer()) return true
    return false
  })

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
        lg:fixed lg:inset-y-0 lg:left-0
        ${isOpen ? 'lg:translate-x-0 lg:w-64' : 'lg:-translate-x-full lg:w-0 lg:overflow-hidden'}
      `}>
        {/* Logo */}
        <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${!isOpen ? 'lg:p-0 lg:border-0' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <LogoIcon className="h-6 w-6 text-white" />
              </div>
              <div className={`transition-all duration-300 ${!isOpen ? 'lg:opacity-0 lg:w-0 lg:overflow-hidden' : ''}`}>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  Admin Panel
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  v2.0.0
                </p>
              </div>
            </div>
            
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`p-4 space-y-2 ${!isOpen ? 'lg:p-0' : ''}`}>
          <div className="space-y-1">
            {filteredNavItems.map((item) => {
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    // Only close sidebar on mobile, not on desktop
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  className={`group flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-lg border border-blue-200 dark:border-blue-800'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  } ${!isOpen ? 'lg:px-2 lg:py-2 lg:justify-center' : ''}`}
                >
                  <div className={`p-2 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                    isActive 
                      ? 'bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
                  }`}>
                    <item.icon />
                  </div>
                  <span className={`ml-3 font-semibold transition-all duration-300 ${!isOpen ? 'lg:opacity-0 lg:w-0 lg:overflow-hidden' : ''}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <div className={`ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse ${!isOpen ? 'lg:hidden' : ''}`}></div>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Sidebar footer */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 ${!isOpen ? 'lg:p-2 lg:border-0' : ''}`}>
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <div className={`flex-1 min-w-0 transition-all duration-300 ${!isOpen ? 'lg:opacity-0 lg:w-0 lg:overflow-hidden' : ''}`}>
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate whitespace-nowrap">
                Admin User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar 