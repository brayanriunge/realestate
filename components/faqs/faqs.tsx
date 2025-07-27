import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-dividerGray">
      <button
        className={`flex justify-between items-center w-full py-3 px-2 text-left transition-all duration-300 ${
          isOpen ? "font-bold text-textBlue" : "text-textVeryDarkBlue"
        }`}
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`w-4 h-4 bg-icon-arrow-down bg-no-repeat bg-center transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-height duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="px-2 pb-4 text-textDarkBlue">{content}</div>
      </div>
    </div>
  );
};

const AccordionCard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-kumbh-sans">
      <main className="bg-white rounded-2xl p-6 md:p-24 shadow-lg mx-4 max-w-5xl mt-14">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/6 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-textBlue mb-6">
              FAQ
            </h1>
            <div className="space-y-4">
              <AccordionItem
                title="Can I pay via MPESA?"
                content="Yes through our Paybill Number. Alternatively, we have an account number for bank transfers for all our payments."
              />
              <AccordionItem
                title="Can I pay in Instalments?"
                content="We have made it possible for our clients to have flexible payment plans based on their financial capacities therefore this has allowed instalment payments specially designed per client."
              />
              <AccordionItem
                title=" Do you have Title deeds and are they freehold or Leasehold?"
                content="Yes we have title deeds for all our projects. All of our titles are freehold Title Deeds."
              />

              <AccordionItem
                title="Do you sell to Kenyans in Diaspora?"
                content="Yes we do. We have made it easy for our clients from abroad to buy plots from us through our seamless online system which allows them to walk through the entire purchase process. In addition, we have been able to send Title deeds to their respective countries."
              />
              <AccordionItem
                title="How long does it take to acquire a Title Deed?"
                content="Once the client has paid for the parcel of land in full, the title processing begins immediately and it takes approximately 45 days or less to complete the transfer. All our projects have title deeds under our name which simplifies the title transfer process."
              />
              <AccordionItem
                title="Are site visits free and when do you take clients?"
                content="Yes. We have free site visits to all our projects. Each client is served on an individual basis where you are designated a specific driver and vehicle to take you to our sites
All our site visits are coordinated from our offices in Ruiru and Ruai and Our site visits are Monday to Saturday with an exception where a client requests for a Sunday site visit."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccordionCard;
