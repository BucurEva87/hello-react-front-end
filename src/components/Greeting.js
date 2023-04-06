import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);

  return (
    <div>
      { greeting.isLoading ? <h3>Message is still loading. Please wait.</h3> : null }
      { greeting.successful ? (
        <h2>
          Random greeting:
          {' '}
          {greeting.content}
        </h2>
      ) : null }
      { greeting.error ? (
        <h2>
          An error occurred:
          {' '}
          <span style={{ color: 'red' }}>{greeting.error}</span>
        </h2>
      ) : null }
    </div>
  );
}

export default Greeting;
