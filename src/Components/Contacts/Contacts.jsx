import doyou from "../../assets/photos/do.png";
import chatLive from "../../assets/photos/Chat live with our support team.png";
import browseFaq from "../../assets/photos/Browse our FAQ.png";
import emailInput from"../../assets/photos/Enter your email address....png";
import submit from "../../assets/photos/Group 20.png";

import logo from "../../assets/photos/logo-1.png";
import tagline from "../../assets/photos/Bringing you closer to your dream home, one click at a time..png";

import about from "../../assets/photos/Group 24.png";
import support from "../../assets/photos/Group 23.png";
import findUs from  "../../assets/photos/Group 22.png";
import ourSocial from "../../assets/photos/Group 21.png";


export default function HelpFooter() {
  return (
    <div>
      {/* Help section */}
      <div className="flex flex-col items-center bg-white px-6 py-16">
        <img src={doyou} alt="Do you have any questions? Get help from us" className="w-72 md:w-96" />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
          <img src={chatLive} alt="Chat live with our support team" className="h-5 w-auto" />
          <img src={browseFaq} alt="Browse our FAQ" className="h-4 w-auto" />
        </div>

        <div className="mt-10 flex w-full max-w-md flex-col items-center gap-3 ">
          <img src={emailInput} alt="Enter your email address" className="h-4 w-auto" />
          <img src={submit} alt="Submit" className="h-10 w-auto rounded-md" />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#dec8bb] px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <img src={logo} alt="Dwello" className="h-4 w-auto" />
            <img src={tagline} alt="Bringing you closer to your dream home, one click at a time." className="mt-6 w-40" />
          </div>

          <div className="mt-5 flex flex-col gap-5">
            <img src={about} alt="About" className="h-4 w-auto" />
            <img src={support} alt="Support" className="h-4 w-auto" />
           <img src={findUs} alt="Find Us" className="h-4 w-auto" />
             <img src={ourSocial} alt="Our Social" className="h-4 w-auto" />
            
          </div>
        </div>
      </div>
    </div>
  );
}