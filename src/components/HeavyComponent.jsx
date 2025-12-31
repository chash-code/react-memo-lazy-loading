import React from 'react';

// HeavyComponent wrapped with React.memo
// This prevents re-renders when parent state changes
const HeavyComponent = React.memo(() => {
  // Track component render count
  const renderCountRef = React.useRef(0);
  renderCountRef.current += 1;
  
  // Console log to verify component renders only once
  console.log('🔴 HeavyComponent rendered! Render count:', renderCountRef.current);
  
  // Simulate heavy computation or UI rendering
  const heavyData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is a heavy UI element number ${i + 1}`
  }));
  
  return (
    <div className="heavy-component">
      <div className="heavy-header">
        <h3>Heavy Component Content</h3>
        <span className="render-badge">
          Component Renders: {renderCountRef.current}
        </span>
      </div>
      
      <p className="heavy-description">
        This component is wrapped with <code>React.memo</code> and loaded lazily. 
        It will NOT re-render when the parent's counter changes.
      </p>
      
      <div className="info-box">
        <p><strong>🎯 Optimization Applied:</strong></p>
        <ul>
          <li>✅ Loaded lazily with React.lazy()</li>
          <li>✅ Wrapped with React.memo()</li>
          <li>✅ Does not re-render on parent state changes</li>
          <li>✅ Check console to verify render behavior</li>
        </ul>
      </div>
      
      {/* Display some "heavy" content */}
      <div className="heavy-content">
        <h4>Heavy Content Grid (100 items)</h4>
        <div className="grid">
          {heavyData.slice(0, 12).map(item => (
            <div key={item.id} className="grid-item">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className="note">
          Showing 12 of {heavyData.length} items...
        </p>
      </div>
    </div>
  );
});

// Display name for debugging
HeavyComponent.displayName = 'HeavyComponent';

export default HeavyComponent;
