import React from "react";

export default function Profile() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-lg-5">
          <img
            src={`${process.env.PUBLIC_URL}/profileImg.jpg`}
            alt="Profile Image"
            className="img-fluid mb-4" // Ensures the image is responsive and adds bottom margin
          />
        </div>
        <div className="col-12 col-lg-7">
          <h1 className="text-primary">ABOUT US</h1>
          <p>Jeanna Williams is a native to the Cayman Islands being a second-generation Caymanian. Jeanna first came to the Island in 1988 where she graduated the following year from Triple C School. Following graduation, she returned to the US where she was partially raised and then made Cayman her permanent home in 1996.</p>
          <p>Originally being in banking as a new accounts manager, she decided to make a career as a certified personal trainer opening the first private in-home personal training company in Cayman. She represented Cayman locally and abroad as a natural bodybuilding and figure competitor during this time.</p>
          <p>Turning her interests to the education side of health and wellness, she launched the talk radio show host “Health and Fitness with Jeanna” on a local radio station for 5 years. Due to the popularity of the show, she launched another equally if not more popular talk radio show called, “Girl Talk” which focused on the top 3 areas of interest for women, health, relationships, and finance.</p>
          <p>Jeanna also did full-time sales at the radio station at the same time and was the top salesperson for 2 consecutive years.</p>
          <p>Being an entrepreneur at heart, Jeanna left the radio station and opened another company promoting the “Girl Talk” show online and doing live on-location video marketing for local businesses for 2 years.</p>
          <p>Jeanna has always had an interest in real estate and politics and in 2021 got the opportunity to represent the district of Savannah in the Cayman Islands general elections and also sit the CIREBA real estate exam at the same time. Following the elections in April 2021 Jeanna entered as a full-time real estate agent. Jeanna joined REMAX in March 2022.</p>
        </div>
      </div>
    </div>
  );
}
