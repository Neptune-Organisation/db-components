import React from "react";
import {Icons} from "../mediaComponents/Icons";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";

export const ShareBar = (props) => {
  const data = props.data
  const url = data.shareUrl
  const title = data.shareTitle;

  return (
    <div className="share-bar">
      <FacebookShareButton
        quote="Share this content!"
        hashtag="#greatContent"
        url={url}
        className="smallIcon"
      >
        <Icons.BsFacebook />
      </FacebookShareButton>
      <EmailShareButton url={url} subject={title} className="smallIcon">
        <Icons.ImMail4 />
      </EmailShareButton>
      <TwitterShareButton url={url} title={title} className="smallIcon">
        <Icons.AiFillTwitterCircle />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title} className="smallIcon">
        <Icons.AiOutlineWhatsApp />
      </WhatsappShareButton>
      {/*  <LinkedinShareButton>
                <icons.TiSocialLinkedinCircular/>
            </LinkedinShareButton>  */}
    </div>
  );
};