import React from 'react';

const iframeStyle = {
    width: '100%',
    height: '2000px',
    border: 'none',
    background: 'transparent',
  };

function Blog() {
  return (
    <div>
      <iframe
        title="Tumblr Blog"
        src="https://infinitesimallife.tumblr.com/"
        style={iframeStyle}
        frameBorder="0"
        scrolling="auto" // You can use "auto" or "no" depending on your preference
      />
    </div>
  );
}

export default Blog;
