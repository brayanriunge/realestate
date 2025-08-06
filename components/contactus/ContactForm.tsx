"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const form = useForm();
  return (
    <div className="mx-auto bg-white rounded-2xl p-6 md:p-12 shadow-lg  max-w-4xl ">
      <h1 className="uppercase font-bold text-green-400 md:text-[36px] sm:text-[28px] text-center">
        book a site visit
      </h1>
      <Form {...form}>
        <form
          action="https://formsubmit.co/yojusoji@mailgolem.com"
          method="POST"
          className=" space-y-4"
        >
          {/* fullName */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4 space-x-12">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full names"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone Nember */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4 space-x-3  ">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your phone number"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4 space-x-19">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Email Address"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4 space-x-14">
                <FormLabel> Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Interested Location"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* datepicker */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-row space-x-20">
                <FormLabel className="ml-2">Date </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-1/2 pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="flex items-center bg-[#00a650] hover:bg-green-400 hover:shadow-xl hover:shadow-gray-300"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
