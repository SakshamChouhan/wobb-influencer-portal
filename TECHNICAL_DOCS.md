# Wobb Influencer Portal - Technical Documentation

This document provides an overview of the technical implementation of the Wobb Influencer Portal homepage, explaining the component structure, hooks usage, and state management.

## Table of Contents

1. [Project Architecture](#project-architecture)
2. [Component Structure](#component-structure)
3. [State Management](#state-management)
4. [Custom Hooks](#custom-hooks)
5. [Data Flow](#data-flow)
6. [UI Component Library](#ui-component-library)
7. [Filtering System Implementation](#filtering-system-implementation)

## Project Architecture

The application follows a modern React.js architecture with these key characteristics:

- **TypeScript** for type safety throughout the codebase
- **Component-based** structure for reusability and maintainability
- **Responsive design** using TailwindCSS for styling
- **Client-side filtering** for campaign discovery
- **Express Backend** for API services (minimal in current implementation)

The project is organized into several key directories:

```
/client
  /src
    /components   # Reusable UI components
    /data         # Static data and types
    /hooks        # Custom React hooks
    /lib          # Utility functions
    /pages        # Page components
/server           # Express backend
/shared           # Shared types and schemas
```

## Component Structure

### Core Components

1. **App.tsx**
   - The root component that sets up routing using Wouter
   - Wraps the application with necessary providers

2. **pages/Home.tsx**
   - The main campaign listing page
   - Manages filtering state and UI
   - Orchestrates child components

3. **components/Header.tsx**
   - Global navigation header
   - Brand identity and navigation links

4. **components/CampaignCard.tsx**
   - Displays individual campaign information
   - Self-contained with its own styling and layout logic

5. **components/FilterChip.tsx**
   - Reusable component for filter selection UI
   - Toggle-based interaction pattern

6. **components/Pagination.tsx**
   - Handles page navigation for campaign results
   - Receives state from parent component

### Component Hierarchy

```
App
└── Home
    ├── Header
    ├── Search & Filter Controls
    │   └── FilterChip (multiple)
    ├── CampaignCard (multiple)
    └── Pagination
```

## State Management

State management is handled using React's built-in hooks without external libraries like Redux. The main state management happens in the Home component:

### Home Component State

```typescript
// Main state variables in Home.tsx
const [searchTerm, setSearchTerm] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [filters, setFilters] = useState<Filters>({
  payout: null,
  category: null,
  tag: null,
});
```

### State Categories

1. **Filter State**
   - Tracks active filters across multiple dimensions (payout, category, tag)
   - Implemented as a record object for flexibility

2. **Pagination State**
   - Tracks current page and calculates total pages
   - Controls which subset of campaigns to display

3. **Search State**
   - Tracks user search input
   - Applied across campaign title, description, and brand name

### Derived State (using useMemo)

Performance optimization is achieved through memoization:

```typescript
// Count of active filters for UI badge
const activeFilterCount = useMemo(() => 
  Object.values(filters).filter(Boolean).length,
  [filters]
);

// Filtered campaigns based on search and filter criteria
const filteredCampaigns = useMemo(() => {
  return campaignData.filter(campaign => {
    // filtering logic...
  });
}, [searchTerm, filters]);

// Current page subset of campaigns
const currentCampaigns = useMemo(() => {
  // pagination logic...
}, [filteredCampaigns, currentPage, campaignsPerPage]);
```

## Custom Hooks

The application leverages several custom hooks:

1. **useIsMobile**
   - Detects mobile viewport for responsive design decisions
   - Uses window resize event listener with debounce

2. **useToast**
   - Manages toast notifications (currently not actively used)
   - Provides queue management for multiple notifications

## Data Flow

The data flow in the application follows a unidirectional pattern:

1. User interactions (search, filter selection, pagination) trigger state changes
2. State changes cause re-rendering of components with updated data
3. Memoized derived values prevent unnecessary recalculations
4. Child components receive only the props they need, minimizing re-renders

### Example Data Flow for Filtering

```
User clicks category filter
→ handleFilterChange is called
→ filters state is updated
→ filteredCampaigns is recalculated (memoized)
→ currentPage is reset to 1 (via useEffect)
→ currentCampaigns is recalculated (memoized)
→ CampaignCard components re-render with new data
→ Active filter badges update to show selected filters
```

## UI Component Library

The project uses Shadcn UI, a collection of reusable components built on top of TailwindCSS and Radix UI:

- **Popover** - Used for the filter selection interface
- **Tabs** - Used within the filter interface to organize filter categories
- **Badge** - Used to display active filters
- **Button** - Used throughout the interface for actions
- **Input** - Used for search functionality

These components are imported from `@/components/ui/` and provide consistent styling and behavior.

## Filtering System Implementation

The filtering system is one of the most complex parts of the application:

### Filter Types

```typescript
// Types defining the filter structure
type FilterType = "payout" | "category" | "tag";
type FilterValue = string;
type Filters = Record<FilterType, FilterValue | null>;
```

### Filter Sources

Filter options are dynamically derived from the campaign data:

```typescript
// Example: extracting unique categories
const categories = useMemo(() => {
  const categorySet = new Set<string>();
  campaignData.forEach((campaign) => {
    categorySet.add(campaign.brand.category);
  });
  return ["All Categories", ...Array.from(categorySet)];
}, []);
```

### Filter Application

Filters are applied through a combination of functions:

1. **handleFilterChange** - Updates the filter state
2. **clearAllFilters** - Resets all filters to null
3. **filteredCampaigns** - Applies filter logic to the data

The filtering logic is applied in this sequence:
1. Search term matching
2. Payout type filtering
3. Category filtering
4. Tag filtering

Only campaigns that match ALL criteria are displayed, implementing an "AND" logic between different filter types.

### Filter UI

The filter UI consists of several connected parts:

1. Filter button with count badge
2. Popover containing filter options
3. Tabs to organize filter categories
4. FilterChip components for selection
5. Active filter badges showing current selections

This creates an intuitive and responsive filtering experience.

## Conclusion

This technical implementation provides a solid foundation for the Wobb Influencer Portal. The architecture balances simplicity with performance, using React's built-in capabilities effectively without over-engineering the solution.

The component structure and state management approach allow for future expansion, such as adding authentication, campaign detail pages, or connecting to a real backend API.