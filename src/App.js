import React, { useState, lazy, Suspense } from 'react';
import './App.css';

// Lazy load the HeavyComponent
// This splits the code and loads it only when needed
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  // Counter state
  const [counter, setCounter] = useState(0);
  
  // Track parent render count
  const [parentRenderCount, setParentRenderCount] = React.useState(0);
  
  // Increment parent render count on every render
  React.useEffect(() => {
    setParentRenderCount(prev => prev + 1);
  });
  
  return (
    <div className="app">
      <div className="container">
        <h1>React.memo & Lazy Loading Demo</h1>
        <p className="subtitle">Performance Optimization without Other Hooks</p>
        
        {/* Performance Metrics */}
        <div className="metrics-box">
          <h3>📊 Performance Metrics</h3>
          <p><strong>Parent Render Count:</strong> {parentRenderCount}</p>
          <p className="hint">Check console to see child component renders</p>
        </div>
        
        {/* Counter Section */}
        <div className="counter-section">
          <h2>Counter: {counter}</h2>
          <button 
            onClick={() => setCounter(counter + 1)} 
            className="btn-primary"
          >
            Increment Counter
          </button>
          <p className="success-message">
            ✅ Notice: Incrementing counter does NOT re-render HeavyComponent
          </p>
        </div>
        
        {/* Lazy Loaded Heavy Component */}
        <div className="heavy-section">
          <h2>Heavy Component (Lazy Loaded)</h2>
          <Suspense fallback={
            <div className="loading-box">
              <div className="spinner"></div>
              <p>Loading Heavy Component...</p>
            </div>
          }>
            <HeavyComponent />
          </Suspense>
        </div>
        
        {/* Explanation Section */}
        <div className="explanation-box">
          <h3>🎯 How This Works</h3>
          
          <div className="explanation-item">
            <h4>React.lazy:</h4>
            <p>
              The HeavyComponent is loaded only when needed (code splitting). 
              This reduces the initial bundle size and improves load time.
            </p>
          </div>
          
          <div className="explanation-item">
            <h4>Suspense:</h4>
            <p>
              Shows a fallback UI (loading spinner) while the lazy component is being loaded.
            </p>
          </div>
          
          <div className="explanation-item">
            <h4>React.memo:</h4>
            <p>
              Wraps HeavyComponent to prevent re-renders when parent state changes. 
              The component only re-renders if its own props change.
            </p>
          </div>
          
          <div className="explanation-item">
            <h4>Result:</h4>
            <p>
              Open the console and click "Increment Counter" - you'll see the parent re-renders, 
              but HeavyComponent does NOT re-render (no console log from child).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
