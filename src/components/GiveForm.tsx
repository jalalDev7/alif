"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useForm } from "react-hook-form";
import { IoIosAddCircle } from "react-icons/io";
import Image from "next/image";
import { TiDocumentDelete } from "react-icons/ti";

const GiveForm = () => {
  const formSchema = z.object({
    petTitle: z.string().min(5, "").max(30, ""),
    petDesc: z.string().optional(),
    petCat: z.string(),
    petLocation: z.string(),
    petImages: z.array(z.string()),
    petVideo: z.string().optional(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      petTitle: "",
      petDesc: "",
      petCat: "",
      petLocation: "",
      petImages: [],
      petVideo: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col w-full border border-white rounded-lg p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onChange={() => {
            form.reset;
          }}
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col w-full gap-2">
              <FormField
                control={form.control}
                name="petTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title :</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="w-full bg-transparent text-white placeholder:text-white"
                        placeholder="Playfull dog"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petDesc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description :</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="w-full h-36 bg-transparent text-white placeholder:text-white"
                        placeholder="Meet [Pet's Name], a lovable [Breed/Species] with a playful personality and a heart full of love. This [age] companion enjoys [favorite activity, like 'playing fetch' or 'cuddling'] and is looking for a caring home. Perfect for [ideal owner, like 'families' or 'active individuals'], [Pet's Name] is ready to fill your days with joy and loyalty."
                      ></Textarea>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petCat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category :</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-full bg-transparent">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Dogs</SelectLabel>
                            <SelectItem value="dog-male">Male</SelectItem>
                            <SelectItem value="dog-female">Female</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location :</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-full bg-transparent">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Morocco</SelectLabel>
                            <SelectItem value="agadir">Agadir</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col w-full gap-2 mt-2">
              <FormLabel>Pictures :</FormLabel>
              <div className="flex flex-row w-full rounded-lg border border-white items-center justify-between p-2">
                <h3 className="text-sm flex w-full">Upload pictures :</h3>
                <button className="flex p-1 rounded-full text-nowrap border border-white font-semibold  text-lg ">
                  <IoIosAddCircle className="size-6 " />
                </button>
              </div>
              <div className="flex flex-col w-full h-[270px] border border-white rounded-lg p-2 overflow-auto gap-2">
                <FormLabel>Pictures :</FormLabel>
                <div className="flex flex-row w-full rounded-lg border border-white items-center justify-between p-2">
                  <div className="flex flex-row items-center w-full gap-4">
                    <Image
                      src="/pets/hamster.jpg"
                      alt=""
                      width={"60"}
                      height={"60"}
                      className=" object-cover aspect-square rounded-lg"
                    />
                    <FormLabel>Hamster picture.jpg</FormLabel>
                  </div>
                  <button className="flex p-1 rounded-full text-nowrap border border-white font-semibold  text-lg ">
                    <TiDocumentDelete className="size-6 " />
                  </button>
                </div>
                <div className="flex flex-row w-full rounded-lg border border-white items-center justify-between p-2">
                  <div className="flex flex-row items-center w-full gap-4">
                    <Image
                      src="/pets/hamster.jpg"
                      alt=""
                      width={"60"}
                      height={"60"}
                      className=" object-cover aspect-square rounded-lg"
                    />
                    <FormLabel>Hamster picture.jpg</FormLabel>
                  </div>
                  <button className="flex p-1 rounded-full text-nowrap border border-white font-semibold  text-lg ">
                    <TiDocumentDelete className="size-6 " />
                  </button>
                </div>
                <div className="flex flex-row w-full rounded-lg border border-white items-center justify-between p-2">
                  <div className="flex flex-row items-center w-full gap-4">
                    <Image
                      src="/pets/hamster.jpg"
                      alt=""
                      width={"60"}
                      height={"60"}
                      className=" object-cover aspect-square rounded-lg"
                    />
                    <FormLabel>Hamster picture.jpg</FormLabel>
                  </div>
                  <button className="flex p-1 rounded-full text-nowrap border border-white font-semibold  text-lg ">
                    <TiDocumentDelete className="size-6 " />
                  </button>
                </div>
                <div className="flex flex-row w-full rounded-lg border border-white items-center justify-between p-2">
                  <div className="flex flex-row items-center w-full gap-4">
                    <Image
                      src="/pets/hamster.jpg"
                      alt=""
                      width={"60"}
                      height={"60"}
                      className=" object-cover aspect-square rounded-lg"
                    />
                    <FormLabel>Hamster picture.jpg</FormLabel>
                  </div>
                  <button className="flex p-1 rounded-full text-nowrap border border-white font-semibold  text-lg ">
                    <TiDocumentDelete className="size-6 " />
                  </button>
                </div>
                <div className="flex flex-row w-full rounded-lg border border-white items-center justify-between p-2">
                  <div className="flex flex-row items-center w-full gap-4">
                    <Image
                      src="/pets/hamster.jpg"
                      alt=""
                      width={"60"}
                      height={"60"}
                      className=" object-cover aspect-square rounded-lg"
                    />
                    <FormLabel>Hamster picture.jpg</FormLabel>
                  </div>
                  <button className="flex p-1 rounded-full text-nowrap border border-white font-semibold  text-lg ">
                    <TiDocumentDelete className="size-6 " />
                  </button>
                </div>
              </div>
              <FormField
                control={form.control}
                name="petVideo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video link :</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="w-full bg-transparent text-white placeholder:text-white"
                        placeholder="Video link"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full items-end justify-end">
                <button className="flex px-4 py-1 rounded-lg text-nowrap border border-white font-semibold backdrop-blur-sm bg-white/25 text-lg ">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GiveForm;
