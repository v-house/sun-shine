import { FC } from "react";

interface FAQItem {
  question: string;
  answer: string[];
}

interface FAQProps {
  faqItems: FAQItem[];
}

const FAQ: FC<FAQProps> = ({ faqItems }) => {
  return (
    <div>
      <div className="bg-white p-4 shadow-xl py-8">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
          FAQ
        </h4>
        <p className="text-center text-gray-600 text-sm mt-2">
          Here are some of the frequently asked questions
        </p>
        <div className="space-y-12 px-1 xl:px-16 mt-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {faqItems.map((item, index) => (
              <div key={index} className="mt-4">
                <div className="flex">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-l-lg">
                    <span className="text-4xl text-white ml-1">Q.</span>
                  </div>
                  <div className="border-l-4 border-blue-600 p-4">
                    <div className="flex items-center">
                      <span className="text-lg text-blue-600 font-bold">
                        {item.question}
                      </span>
                    </div>
                    <div className="mt-2">
                      {item.answer.map((answer,i)=>(
                      <p  key={i}>
                      <span className="text-gray-500">{answer}</span>
                      </p>))}                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;