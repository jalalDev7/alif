import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaLocationDot,
} from "react-icons/fa6";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const pets = [
  {
    id: 1,
    image: "/pets/Chihuahua-dog.webp",
    title: "Cute Chihuahua Dog",
    gender: "Male",
    age: "3 Months",
    location: "Rabat",
  },
  {
    id: 3,
    image: "/pets/persian-cat.jpg",
    title: "Adorable Persian Cat",
    gender: "Female",
    age: "1 Year",
    location: "Casablanca",
  },
  {
    id: 4,
    image: "/pets/parrot.jpg",
    title: "Friendly Parrot",
    gender: "Male",
    age: "6 Months",
    location: "Tangier",
  },
  {
    id: 5,
    image: "/pets/golden-dog.jpg",
    title: "Playful Golden Retriever",
    gender: "Female",
    age: "8 Months",
    location: "Marrakech",
  },
  {
    id: 6,
    image: "/pets/rabbit.jpg",
    title: "Lovely Rabbit",
    gender: "Female",
    age: "4 Months",
    location: "Agadir",
  },
  {
    id: 2,
    image: "/pets/hamster.jpg",
    title: "Calm Hamster",
    gender: "Male",
    age: "2 Months",
    location: "Fes",
  },
];

const FindSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center p-4 md:p-8 gap-4 md:gap-8 text-white">
      <div className="flex w-full items-center justify-center ">
        <h1 className="text-2xl md:text-5xl text-center  font-bold drop-shadow-lg leading-normal ">
          Find Your New{" "}
          <span className="bg-green-700 rounded-lg p-2 drop-shadow-lg">
            Best Friend: Pets
          </span>{" "}
          Waiting for a Loving Home
        </h1>
      </div>
      <div className="flex flex-row items-center w-full md:w-fit justify-center mt-4 md:mt-0 rounded-full bg-white/35  border border-white px-4 py-2 gap-2">
        <div className="relative pl-8">
          <IoSearchSharp className="absolute size-8 top-1/2 left-1 -translate-y-1/2" />
          <Input
            type="text"
            className="bg-transparent border-none focus-visible:ring-offset-0 text-xl focus-visible:ring-0 w-full md:w-[500px]"
            placeholder="Search"
          />
        </div>
        <Select>
          <SelectTrigger className="w-[250px]  bg-transparent border-none text-xl focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Morocco</SelectLabel>
              <SelectItem value="agadir">Agadir</SelectItem>
              <SelectItem value="al-hoceima">Al Hoceima</SelectItem>
              <SelectItem value="azrou">Azrou</SelectItem>
              <SelectItem value="ben-guérir">Ben Guerir</SelectItem>
              <SelectItem value="beni-mellal">Beni Mellal</SelectItem>
              <SelectItem value="berrechid">Berrechid</SelectItem>
              <SelectItem value="boujdour">Boujdour</SelectItem>
              <SelectItem value="casablanca">Casablanca</SelectItem>
              <SelectItem value="chefchaouen">Chefchaouen</SelectItem>
              <SelectItem value="dakhla">Dakhla</SelectItem>
              <SelectItem value="el-jadida">El Jadida</SelectItem>
              <SelectItem value="errachidia">Errachidia</SelectItem>
              <SelectItem value="essaouira">Essaouira</SelectItem>
              <SelectItem value="fes">Fes</SelectItem>
              <SelectItem value="guelmim">Guelmim</SelectItem>
              <SelectItem value="iffren">Ifrane</SelectItem>
              <SelectItem value="kenitra">Kenitra</SelectItem>
              <SelectItem value="khenifra">Khenifra</SelectItem>
              <SelectItem value="khouribga">Khouribga</SelectItem>
              <SelectItem value="ksar-el-kebir">Ksar El Kebir</SelectItem>
              <SelectItem value="laayoune">Laayoune</SelectItem>
              <SelectItem value="larache">Larache</SelectItem>
              <SelectItem value="marrakech">Marrakech</SelectItem>
              <SelectItem value="martil">Martil</SelectItem>
              <SelectItem value="mediouna">Mediouna</SelectItem>
              <SelectItem value="meknes">Meknes</SelectItem>
              <SelectItem value="midelt">Midelt</SelectItem>
              <SelectItem value="mohammedia">Mohammedia</SelectItem>
              <SelectItem value="nador">Nador</SelectItem>
              <SelectItem value="ouarzazate">Ouarzazate</SelectItem>
              <SelectItem value="oujda">Oujda</SelectItem>
              <SelectItem value="rabat">Rabat</SelectItem>
              <SelectItem value="safi">Safi</SelectItem>
              <SelectItem value="salé">Salé</SelectItem>
              <SelectItem value="sefrou">Sefrou</SelectItem>
              <SelectItem value="settat">Settat</SelectItem>
              <SelectItem value="sidi-ifni">Sidi Ifni</SelectItem>
              <SelectItem value="sidi-kacem">Sidi Kacem</SelectItem>
              <SelectItem value="sidi-slimane">Sidi Slimane</SelectItem>
              <SelectItem value="tangier">Tangier</SelectItem>
              <SelectItem value="tan-tan">Tan-Tan</SelectItem>
              <SelectItem value="taourirt">Taourirt</SelectItem>
              <SelectItem value="taroudant">Taroudant</SelectItem>
              <SelectItem value="taza">Taza</SelectItem>
              <SelectItem value="tetouan">Tetouan</SelectItem>
              <SelectItem value="tiznit">Tiznit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[250px]  bg-transparent border-none text-xl focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Dogs</SelectLabel>
              <SelectItem value="dog-male">Male</SelectItem>
              <SelectItem value="dog-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Cats</SelectLabel>
              <SelectItem value="cat-male">Male</SelectItem>
              <SelectItem value="cat-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Birds</SelectLabel>
              <SelectItem value="bird-male">Male</SelectItem>
              <SelectItem value="bird-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Rabbits</SelectLabel>
              <SelectItem value="rabbit-male">Male</SelectItem>
              <SelectItem value="rabbit-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Fish</SelectLabel>
              <SelectItem value="fish-male">Male</SelectItem>
              <SelectItem value="fish-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Hamsters</SelectLabel>
              <SelectItem value="hamster-male">Male</SelectItem>
              <SelectItem value="hamster-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Guinea Pigs</SelectLabel>
              <SelectItem value="guinea-pig-male">Male</SelectItem>
              <SelectItem value="guinea-pig-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Ferrets</SelectLabel>
              <SelectItem value="ferret-male">Male</SelectItem>
              <SelectItem value="ferret-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Turtles</SelectLabel>
              <SelectItem value="turtle-male">Male</SelectItem>
              <SelectItem value="turtle-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Snakes</SelectLabel>
              <SelectItem value="snake-male">Male</SelectItem>
              <SelectItem value="snake-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Lizards</SelectLabel>
              <SelectItem value="lizard-male">Male</SelectItem>
              <SelectItem value="lizard-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Hedgehogs</SelectLabel>
              <SelectItem value="hedgehog-male">Male</SelectItem>
              <SelectItem value="hedgehog-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Parrots</SelectLabel>
              <SelectItem value="parrot-male">Male</SelectItem>
              <SelectItem value="parrot-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Chinchillas</SelectLabel>
              <SelectItem value="chinchilla-male">Male</SelectItem>
              <SelectItem value="chinchilla-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Frogs</SelectLabel>
              <SelectItem value="frog-male">Male</SelectItem>
              <SelectItem value="frog-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Insects</SelectLabel>
              <SelectItem value="insect-male">Male</SelectItem>
              <SelectItem value="insect-female">Female</SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Spiders</SelectLabel>
              <SelectItem value="spider-male">Male</SelectItem>
              <SelectItem value="spider-female">Female</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <button className="flex flex-row items-center justify-center px-4 text-xl gap-2">
          Find
          <IoMdArrowRoundForward className="size-6" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex items-center justify-center">
          <FaCircleArrowLeft className="size-8 cursor-pointer opacity-20" />
        </div>
        <div className="flex w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="flex flex-row w-full rounded-lg border border-white p-2 gap-4 relative h-[250px] items-end"
              >
                <Image
                  src={pet.image}
                  fill
                  alt={pet.title}
                  className="absolute top-0 left-0 object-cover aspect-square rounded-lg z-0"
                />
                <div className="flex flex-col w-full z-10 bg-white rounded-lg text-black">
                  <div className="flex flex-row w-full px-4 items-center ">
                    <div className="flex flex-col w-full">
                      <h2 className="flex w-full text-xl font-semibold">
                        {pet.title}
                      </h2>
                      <div className="flex flex-row items-center text-muted-foreground text-sm gap-1 mt-1">
                        <div className="flex flex-row gap-1 items-center">
                          <LiaBirthdayCakeSolid className="size-4" />
                          <h3>{pet.age}</h3>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                          <FaLocationDot className="size-4" />
                          <h3>{pet.location}</h3>
                        </div>
                      </div>
                    </div>
                    {pet.gender === "Male" ? (
                      <div className="bg-blue-600 rounded-full p-2 my-4">
                        <TbGenderMale className="size-8 text-white" />
                      </div>
                    ) : (
                      <div className="bg-pink-600 rounded-full p-2 my-4">
                        <TbGenderFemale className="size-8 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <FaCircleArrowRight className="size-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FindSection;
