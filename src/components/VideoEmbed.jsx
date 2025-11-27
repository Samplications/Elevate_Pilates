import React from 'react';
import styled from 'styled-components';

const ResponsiveIframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius:clamp(25px, 5vw, 35px);
`;

const VideoEmbed = ({ src }) => {
  return (
    <ResponsiveIframeContainer>
      <ResponsiveIframe
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ResponsiveIframeContainer>
  );
};

export default VideoEmbed;
