import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <div style={{ textAlign: 'right', marginBottom: '10px' }}>
      <label style={{ fontSize: '14px' }}>
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
          style={{ marginRight: '8px' }}
        />
        Dark Mode
      </label>
    </div>
  );
}

export default ThemeToggle;
