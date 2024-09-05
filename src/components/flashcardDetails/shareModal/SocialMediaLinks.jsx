import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const SocialMediaLinks = () => {
  // Get the current page URL
  const url = window.location.href;

  return (
    <div className="mt-4 flex flex-row justify-around flex-wrap gap-4">
      {/* Whatsapp Share Button */}
      <WhatsappShareButton url={url} className="hvr-grow">
        <WhatsappIcon size={60} round={true} />
      </WhatsappShareButton>

      {/* Facebook Share Button */}
      <FacebookShareButton url={url} className="hvr-grow">
        <FacebookIcon size={60} round={true} />
      </FacebookShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={url} className="hvr-grow">
        <TwitterIcon size={60} round={true} />
      </TwitterShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton url={url} className="hvr-grow">
        <LinkedinIcon size={60} round={true} />
      </LinkedinShareButton>

      {/* Email Share Button */}
      <EmailShareButton url={url} className="hvr-grow">
        <EmailIcon size={60} round={true} />
      </EmailShareButton>
    </div>
  );
};

export default SocialMediaLinks;
