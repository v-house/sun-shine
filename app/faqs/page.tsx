import FAQ from "./FAQ";

const faqItems = [
  {
    question:
      "Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Consectetur adipisicing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Neque eos, dignissimos provident reiciendis debitis?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Repudiandae commodi perferendis et itaque?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Similique fugiat cumque?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Impedit iusto vitae dolorum, nostrum fugit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Impedit iusto vitae dolorum, nostrum fugit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.rem ipsum dolor sit amet consectetur adipisicing elit.rem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
];

function FAQPage() {
  return (
  <div className="bg-white">
  <FAQ faqItems={faqItems} />
  </div>);
}

export default FAQPage;
