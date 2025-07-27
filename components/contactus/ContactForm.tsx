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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const form = useForm();
  return (
    <div className="mx-auto bg-white rounded-2xl p-6 md:p-24 shadow-lg  max-w-5xl mt-14">
      <h2 className="uppercase font-bold text-green-400 text-2xl">
        book a site visit
      </h2>
      <Form {...form}>
        <form
          action="https://formsubmit.co/yojusoji@mailgolem.com"
          method="POST"
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full names"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your phone number"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Email Address"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4">
                <FormLabel> Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Interested Location"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>
                {/* <FormDescription>
                  When public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex p-2 flex-row mt-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Email Address"
                    {...field}
                    className="w-1/2"
                    required
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-row">
                <FormLabel>Date </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
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
                {/* <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="flex flex-end" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
