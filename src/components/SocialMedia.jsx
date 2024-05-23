import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";

export default function SocialMedia() {
    return (
        <div className="container-fluid">
            <div className="row">
                           
        <div className="text-center my-5 bg-body-tertiary">
            <h1 className="mt-5">OUR SOCIAL MEDIA</h1>
            <div className="d-flex justify-content-center flex-wrap gap-5 mt-4">
                <div className="d-flex flex-column align-items-center">
                    <FaFacebookF size={64} />
                    <p className="fs-4 mt-2">Facebook</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <FaSquareInstagram size={64} />
                    <p className="fs-4 mt-2">Instagram</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <FaLinkedinIn size={64} />
                    <p className="fs-4 mt-2">LinkedIn</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <FaTiktok size={64} />
                    <p className="fs-4 mt-2">TikTok</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <FaSquarePinterest size={64} />
                    <p className="fs-4 mt-2">Pinterest</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
