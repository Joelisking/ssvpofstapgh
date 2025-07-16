import { LucideIconProps } from '../../ui/icon';

// Define the sub-item structure for nested menu items.
interface SubItem {
  title: string;
  url?: string;
  children?: SubItem[];
}

// Define the main menu item structure.
export interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIconProps;
  isActive?: boolean;
  items?: SubItem[];
  allowedRoles?: string[];
}
// Define the structure for each main route section.
export interface Route {
  title: string;
  menu: MenuItem[];
}

export const ROUTES: Route[] = [
  {
    title: 'Overview',
    menu: [
      {
        title: 'Dashboard',
        icon: 'LayoutDashboard',
        url: '/dashboard',
        //    isActive: false,
        // items: [
        //   {
        //     title: 'Dashboard',
        //     url: '/accounts/dashboard',
        //   },
        //   {
        //     title: 'Fund Management',
        //     url: '/accounts/fund-management',
        //   },
        //   {
        //     title: 'Deep Learning Signals',
        //     url: '/accounts/signals',
        //   },
        // ],
      },
      {
        title: 'System Status',
        icon: 'Server',
        url: '/system-status',
        //    isActive: false,
        items: [
          {
            title: 'Data Server',
            url: '/data-server',
          },
          {
            title: 'AI Server',
            url: '/ai-server',
          },
          {
            title: 'Trading API',
            url: '/trading-api',
          },
        ],
      },
    ],
  },
  {
    title: 'AI, Data & Trading',
    menu: [
      {
        title: 'AI Management',
        icon: 'Bot',
        items: [
          {
            title: 'Main AI Control',
            url: '/main-ai-control',
          },
          {
            title: 'Trigger AI Control',
            url: '/trigger-ai-control',
          },
          {
            title: 'AI Results',
            url: '/ai-results',
          },
        ],
      },
      {
        title: 'Data Management',
        icon: 'Database',
        items: [
          {
            title: 'Market Data',
            url: '/market-data',
          },
          {
            title: 'News Management',
            url: '/news-management',
          },
          {
            title: 'Data Sources',
            url: '/data-sources',
          },
        ],
      },
      {
        title: 'Trading Operations',
        icon: 'ChartLine',
        items: [
          {
            title: 'Live Trades',
            url: '/live-trades',
          },
          {
            title: 'Trade History',
            url: '/trade-history',
          },
          {
            title: 'P&L Analytics',
            url: '/pnl-analytics',
          },
        ],
      },
    ],
  },
  {
    title: 'User Settings & Reports',
    menu: [
      {
        title: 'User Management',
        icon: 'User',
        items: [
          {
            title: 'User Accounts',
            url: '/user-accounts',
          },
          {
            title: 'MT5 Configurations',
            url: '/mt5-configurations',
          },
          {
            title: 'Risk Settings',
            url: '/risk-settings',
          },
        ],
      },
      {
        title: 'Reports & Analytics',
        icon: 'Paperclip',
        url: '/reports',
      },
    ],
  },
  {
    title: 'Alerts, Settings & Configurations',
    menu: [
      {
        title: 'System Tools',
        icon: 'Wrench',
        items: [
          {
            title: 'Configuration',
            url: '/configuration',
          },
          {
            title: 'Maintenance',
            url: '/maintenance',
          },
          {
            title: 'Logs',
            url: '/logs',
          },
        ],
      },
      {
        title: 'Alerts & Notifications',
        icon: 'Bell',
        url: '/alerts',
      },
      {
        title: 'Settings',
        icon: 'Settings',
        url: '/settings',
      },
    ],
  },
];
