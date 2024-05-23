import { ImLocation2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
export default function ContactInfo () {
    return (
        <>
        <div className="p-5">
            <h1 className="fs-5 mb-5">CONTACT INFORMATION</h1>

          <div className="d-flex flex-row "> 
        <ImLocation2 size={64} className="card mb-5" />
        <div className="d-flex flex-column">
        <h2 className="fs-4 ms-4">Address</h2>
        <p className="fs-6 ms-4">52 Harbour Walk, Grand Cayman, Cayman Islands</p>
        </div>
        </div>

        <div className="d-flex flex-row" >
        <IoCall size={64} className="card mb-5" />
        <div className="d-flex flex-column">
        <h2 className="fs-4 ms-4">Phone Number</h2>
        <p className="fs-6 ms-4">345-926-0901</p>
        </div>
        </div>

        <div className="d-flex flex-row" >
        <MdOutlineEmail size={64} className="card mb-5" />
        <div className="d-flex flex-column">
        <h2 className="fs-4 ms-4">Email Address</h2>
        <p className="fs-6 ms-4">connect@jeannawilliams.com</p>
        </div>
        </div>
        </div>
        </>
    )
}