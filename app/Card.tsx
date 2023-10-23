import React from "react";

interface Person {
  id: number;
  name: string;
  email: string;
  phone: string;
  designation: string;
  address: string;
  imageUrl: string;
}

const peopleData: Person[] = [
  {
    id: 1,
    name: "Maria Morris",
    email: "maria.morris@admin.iith.ac.in",
    phone: "+91-8331036081",
    designation: "Sr. Psychological Counsellor",
    address: "A4 - Aryabhatta Block",
    imageUrl:
      "https://sunshine.iith.ac.in/images/faculty/20210803_113018%20-%20Maria%20Morris.jpg",
  },
  {
    id: 2,
    name: "Maria Morris",
    email: "maria.morris@admin.iith.ac.in",
    phone: "+91-8331036081",
    designation: "Sr. Psychological Counsellor",
    address: "A4 - Aryabhatta Block",
    imageUrl:
      "https://sunshine.iith.ac.in/images/faculty/20210803_113018%20-%20Maria%20Morris.jpg",
  },
  {
    id: 3,
    name: "Maria Morris",
    email: "maria.morris@admin.iith.ac.in",
    phone: "+91-8331036081",
    designation: "Sr. Psychological Counsellor",
    address: "A4 - Aryabhatta Block",
    imageUrl:
      "https://sunshine.iith.ac.in/images/faculty/20210803_113018%20-%20Maria%20Morris.jpg",
  },
];

const PeopleCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {peopleData.map((person) => (
        <div key={person.id} className="relative">
          <img
            src={person.imageUrl}
            alt={person.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              {person.designation}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {person.name}
            </h1>
            <p className="leading-relaxed text-black">Email: {person.email}</p>
            <p className="leading-relaxed text-black">Phone: {person.phone}</p>
            <p className="leading-relaxed text-black">Address: {person.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleCards;
