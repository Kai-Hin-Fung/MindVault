import React, { useState } from 'react';

const LinkSubmitForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(url);
    // Fetch call to the Express server
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error('Error:', error));
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter URL"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LinkSubmitForm;
