# Aventisia - Knowledge Base Management System

A modern, responsive web application for managing knowledge bases with an intuitive UI built with React and Vite.

## Features

- **Knowledge Base Management**: Create, view, and organize knowledge cards in a responsive grid
- **Dynamic Pagination**: Navigate through knowledge cards with adjustable rows per page
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile devices
- **Workspace Navigation**: Multi-section sidebar with project organization
- **User-Friendly Interface**: Clean, modern design with intuitive controls
- **Real-time Updates**: Dynamic card creation and instant UI updates

## Tech Stack

- **React 19.2.4** - UI library
- **Vite 8.0.1** - Build tool with HMR
- **Tailwind CSS 4.2.2** - Utility-first CSS framework (with component-specific CSS files)
- **Node.js** - Runtime environment
- **ESLint** - Code quality assurance

## Project Structure

```
src/
├── components/
│   ├── Header.jsx (Header.css) - Top navigation bar with search and notifications
│   ├── Sidebar.jsx (Sidebar.css) - Left navigation with multi-section menu
│   ├── KnowledgeBase.jsx (KnowledgeBase.css) - Main content area for knowledge cards
│   ├── KnowledgeCard.jsx (KnowledgeCard.css) - Individual card component
│   ├── Modal.jsx (Modal.css) - Form modal for creating new cards
│   ├── Button.jsx (Button.css) - Reusable button component
│   ├── Pagination.jsx (Pagination.css) - Page navigation and row count control
│   ├── Agents.jsx (Agents.css) - Agents page view
│   └── MainLayout.jsx (MainLayout.css) - Main layout with routing
├── assets/
│   └── logo-worcspace.png - Application logo
├── App.jsx - Application entry point
├── main.jsx - Vite entry point
├── index.css - Global styles
└── App.css - Application styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd "c:\Users\eliza\OneDrive\Desktop\Aventisia Project"
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port if 5173 is in use).

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features in Detail

### Header
- Application logo and workspace title
- Workspace selector dropdown
- Search bar with keyboard shortcut hint (⊞ K)
- Notification bell with badge counter
- User avatar

### Sidebar
Three main sections:
1. **My Projects** - Agents, AI Models, Library
2. **Description** - Published, Machines, Queues, Triggers, Jobs, Executions, Vault, Knowledge Base, Key Store
3. **Admin** - Tenant, Integration

Active state indicated by blue left border with hover effects.

### Knowledge Base
- Grid display of knowledge cards
- Create new card button with modal form
- Search input for future filtering functionality
- Pagination with dynamic row count control
- Each card shows title, description, and creation date

### Pagination
- Adjustable rows per page (default: 10)
- Dynamic page calculation based on total cards
- Previous/Next navigation buttons
- Page information display (e.g., "6 rows, page 1 of 1")

## Responsive Design

The application is fully responsive across all screen sizes:

- **Desktop (1024px+)**: Full layout with all elements visible
- **Tablet (768px and below)**: Optimized spacing and font sizes
- **Mobile (480px and below)**: Stacked layout with touch-friendly controls

## Component Architecture

The application uses React hooks for state management with a component-based architecture:

- **MainLayout** - Central routing hub manages app-wide state
- **Sidebar** - Navigation tracking with onClick handlers
- **KnowledgeBase** - Manages card data and modal state
- **Modal** - Form component with callback pattern for data submission
- **Pagination** - Dynamic row/page calculation with state management

## Future Enhancements

- [ ] Search functionality integration (filter cards by title)
- [ ] Pagination page navigation (Previous/Next button functionality)
- [ ] Additional sidebar page implementations
- [ ] Edit/Delete card functionality
- [ ] User authentication
- [ ] Backend API integration
- [ ] Database persistence

## Development Notes

- Each component has a dedicated CSS file for maintainability
- Icons use a mix of SVG and image sources
- State management utilizes React hooks (useState)
- Parent-child communication uses callback props for data submission

## License

This project is part of the Aventisia suite of applications.
