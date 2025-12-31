# React.memo & Lazy Loading

A React application demonstrating performance optimization using `React.memo` to prevent unnecessary re-renders and lazy loading for code splitting.

## Project Structure
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── components/
│       └── HeavyComponent.jsx
└── package.json
## Problem Statement

Build a simple React application that demonstrates:
- A parent component with a counter
- A child component that represents a heavy UI action

## Requirements

### 1. Parent Component
- Maintain a counter state
- Update counter on button click

### 2. Heavy Child Component (HeavyComponent)
- Be lazy loaded
- Be wrapped with `React.memo`
- Not re-render when counter value changes

### 3. Verification
- Add console log in child component to verify it renders only once
- Parent state updates should NOT trigger child re-render

## Expected Outcome

✅ The counter updates smoothly  
✅ The heavy component loads lazily  
✅ The heavy component does NOT re-render on counter updates  
✅ Performance improvement is observable through console logs

## Focus

⚠️ The focus is **only** on using `React.memo` and lazy loading, without using any other optimization hooks.

## How to Run

```bash
npm install
npm start
