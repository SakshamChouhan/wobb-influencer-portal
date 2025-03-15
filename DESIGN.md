# Design Documentation

## Design System

### Color Scheme

The color scheme was carefully selected to create a professional, modern, and inviting interface for influencers:

- **Primary Color**: #5271FF (Blue)
  - Used for primary actions, buttons, and highlighting important information
  - Creates a sense of trust and professionalism

- **Secondary Colors**:
  - #FF4757 (Coral Red): Used for urgency indicators and important notifications
  - #2ED573 (Light Green): Used for success states and progress indicators
  - #F5F7FA (Light Gray): Used for backgrounds and card surfaces
  - #2C3E50 (Dark Blue-Gray): Used for primary text and headings

- **Accent Colors**:
  - #FFD166 (Amber Yellow): Used for highlighting and secondary accents
  - #8A94A7 (Medium Gray): Used for secondary text and disabled states

The color palette was inspired by modern digital product design, balancing professionalism with a touch of vibrancy to appeal to the creative influencer audience.

### Typography

- **Primary Font**: Inter
  - A clean, modern sans-serif typeface that offers excellent readability across devices
  - Used in various weights: 400 (Regular), 500 (Medium), 600 (SemiBold), and 700 (Bold)

- **Text Hierarchy**:
  - Headings: 24px-32px (Bold)
  - Subheadings: 18px-20px (SemiBold)
  - Body Text: 14px-16px (Regular)
  - Small Text/Labels: 12px (Medium)

- **Line Height**:
  - Headings: 1.2
  - Body Text: 1.5
  - This ensures good readability and text flow

### Spacing System

A consistent 4px-based spacing system is used throughout the interface:

- **Base Unit**: 4px
- **Common Spacing Values**:
  - 4px (xs): Very tight spacing, used for icons and very compact elements
  - 8px (sm): Tight spacing, used for related elements
  - 16px (md): Standard spacing, used for separating distinct elements
  - 24px (lg): Large spacing, used for major section divisions
  - 32px (xl): Extra large spacing, used for major component separation
  - 48px (2xl): Used sparingly for dramatic separations or page sections

This consistent spacing system creates rhythm and harmony throughout the interface.

### Design Principles

#### 1. Clarity and Hierarchy

Information is organized with clear visual hierarchy to help users quickly scan and find relevant information:
- Brand names and campaign titles are prominently displayed
- Payout information and hiring status are clearly highlighted
- Secondary information is styled with lower visual emphasis

#### 2. Card-Based Design

Campaign information is presented in cards that:
- Create clear boundaries around related information
- Allow for consistent positioning of similar elements across campaigns
- Provide a familiar pattern that users can quickly understand
- Scale well across different screen sizes

#### 3. Responsive Design

The interface dynamically adapts to different screen sizes:
- **Desktop**: 3-4 cards per row in a grid layout
- **Tablet**: 2 cards per row with adjusted spacing
- **Mobile**: Single column with full-width cards

#### 4. Visual Feedback

Interactive elements provide clear visual feedback:
- Buttons change state on hover and click
- Cards subtly elevate on hover to indicate interactivity
- Progress bars visually communicate hiring status
- Filter chips clearly indicate selection state

## UI Components

### Header Component

- Fixed position for easy access to navigation
- Contains branding, search functionality, and user profile
- Collapses to a simplified version on mobile

### Campaign Card Component

- Consistent layout with a clear visual hierarchy
- Image section for campaign visual identity
- Brand logo and information prominently displayed
- Clear indication of payout type and amount
- Progress indicator for hiring status
- Responsive design that adapts to screen size

### Filter Component

- Interactive filter chips for category filtering
- Clear visual indication of selected filters
- Horizontally scrollable on mobile for space efficiency

### Pagination Component

- Simple and intuitive page navigation
- Responsive design that adapts to screen size
- Clear indication of current page

## Inspirations

The design takes inspiration from modern influencer platforms like CreatorIQ and AspireIQ, while incorporating unique elements tailored to Wobb's brand identity and user needs. Key design principles were borrowed from:

- Material Design guidelines for elevation and interaction patterns
- Apple's Human Interface Guidelines for clarity and information hierarchy
- Airbnb's design system for card layouts and responsive behavior

## Accessibility Considerations

- Color contrast ratios meet WCAG AA standards
- Interactive elements have sufficient tap/click targets (minimum 44x44px)
- Visual hierarchy is maintained through multiple cues, not just color
- Appropriate alt text for images
- Semantic HTML structure for screen reader compatibility