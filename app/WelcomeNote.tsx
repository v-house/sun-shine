import React from "react";

const WelcomeNote = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-300">
      <div className="container mx-auto">
        <div className="max-w-2xl p-4 bg-sky-300 mx-auto text-left rounded-l-large rounded-br-large border border-blue-600">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Hello,</h1>
          <p className="text-gray-700 text-lg mb-8">
            College life can be a rollercoaster ride with inevitable grueling
            nights. Tough situations can be of any sort, from academic pressure
            to homesickness, addiction to unexplainable predicament. To face a
            life of toil, having a judgment-free and confidential zone to hear
            out your plight helps a great deal. As the counseling cell of IITH,
            Sunshine aims to establish a vibrant atmosphere on campus by aiding
            you in making the right choices. We strive to be a point of contact
            for your mental and social help by offering you mentorship, an
            interface to interact with the diverse community of IITH, and the
            support required to heal yourself.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            If you ever feel overwhelmed or stressed, come over, and have a chat
            with us without reluctance as we at Sunshine believe, for times
            unsparing, you will need some caring too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeNote;
