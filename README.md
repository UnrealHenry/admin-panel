# Admin Panel

A full-featured admin dashboard I built to learn React and practice building complex UIs. It's got user management, charts, forms, and multi-language support - basically everything you'd expect from a real production admin panel.

## What's Inside

### Core Features
- **User Management** - Full CRUD operations with role-based access (admin, manager, viewer)
- **Analytics Dashboard** - Interactive charts showing sales and user activity
- **Form System** - Built with React Hook Form, includes image uploads and validation
- **Authentication** - JWT-based login system with protected routes
- **Bilingual Support** - Toggle between English and Japanese

### Tech I Used
- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for fast dev builds
- Recharts for the data visualizations
- Vitest for testing

## Getting Started

You'll need Node.js 18 or higher installed.

```bash
# Install dependencies
cd client
npm install

# Start the dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

### Try It Out

I set up some demo accounts you can use:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@example.com | admin123 |
| Manager | manager@example.com | manager123 |
| Viewer | viewer@example.com | viewer123 |

## Running Tests

```bash
# Watch mode
npm test

# Single run
npm run test:run

# With coverage
npm run test:coverage
```

## What I Learned

This was a great learning project for me. I got hands-on experience with:
- Building complex state management with Context API
- Implementing role-based access control from scratch
- Working with Recharts and making data look good
- Setting up a proper testing environment with Vitest
- Creating a bilingual interface using i18n patterns

The mobile responsiveness was particularly fun to figure out - the sidebar collapses on mobile and the tables adjust to smaller screens.

## Deployment

```bash
npm run build
```

This creates a production build in the `dist` folder. I've tested it on Vercel and it deploys without any issues.

## License

MIT - feel free to use this however you want!
