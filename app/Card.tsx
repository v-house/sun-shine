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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {peopleData.map((person) => (
        <div
          key={person.id}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={person.imageUrl}
            alt={person.name}
            className="mx-auto h-60 object-cover rounded-lg my-2"
          />
          <div className="p-4">
            <h2 className="text-xl text-blue-600 font-semibold mb-2">
              {person.name}
            </h2>
            <p className="text-gray-600">{person.designation}</p>
            <p className="text-gray-600">{person.email}</p>
            <p className="text-gray-600">{person.phone}</p>
            <p className="text-gray-600">Address: {person.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleCards;
