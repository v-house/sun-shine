import React from "react";
import { FiMail, FiInfo } from "react-icons/fi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

interface TeamMemberProps {
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  about: string;
  department: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  photoUrl,
  email,
  phone,
  about,
  department,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  const content = (
    <PopoverContent className="w-[340px]">
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={photoUrl} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {department}
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400 h-32">
          <p>{about}</p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">{email}</p>
            <span className="" aria-label="email" role="img">
              📧
            </span>
          </div>
        </CardFooter>
      </Card>
    </PopoverContent>
  );

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 relative">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={photoUrl}
            alt={name}
            className="w-full h-80 object-cover rounded-t-lg lg:hover:scale-105 overflow-y-auto transition-transform duration-500"
          />
        </div>
        <div className="p-4 relative">
          <div className="flex flex-col justify-between items-center">
            <h3 className="text-md font-semibold text-gray-950">{name}</h3>
            <span className="text-blue-500 bg-blue-100 py-1 px-2 rounded-full text-sm line-clamp-1">
              {department}
            </span>
            <div className="flex space-x-2 mt-2">
              <button
                className="bg-green-500 text-white p-2 rounded-full"
                onClick={() => {
                  window.open(`mailto:${email}`, "_blank");
                }}
              >
                <FiMail />
              </button>
              <Popover
                key="blur"
                showArrow
                offset={10}
                placement="bottom"
                backdrop="blur"
              >
                <PopoverTrigger>
                  <button className="text-white bg-gray-600 p-2 rounded-full hidden lg:block">
                    <FiInfo />
                  </button>
                </PopoverTrigger>
                {content}
              </Popover>
              <button
                onClick={onOpen}
                className="text-white bg-gray-600 p-2 rounded-full lg:hidden"
              >
                <FiInfo />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} placement="bottom" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                About Me
              </ModalHeader>
              <ModalBody>
                <Card className="">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src={photoUrl}
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                          {name}
                        </h4>
                        <h5 className="text-small tracking-tight text-default-400">
                          {department}
                        </h5>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-3 py-0 text-small text-default-400 h-32">
                    <p>{about}</p>
                  </CardBody>
                  <CardFooter className="">
                    <div className="flex gap-1">
                      <p className="font-semibold text-default-400 text-small">
                        {email}
                      </p>
                      <span className="" aria-label="email" role="img">
                        📧
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TeamMember;
