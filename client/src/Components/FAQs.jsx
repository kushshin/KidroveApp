import React, { useState } from "react";
import MyAccordion from "./MyAccordion";

const faqs = [
  {
    question: "Who can join this workshop?",
    answer: "Children aged 8–14 years.",
  },
  {
    question: "Do I need coding experience?",
    answer: "No. Everything will be taught from scratch.",
  },
  {
    question: "Will a certificate be provided?",
    answer: "Yes. Every student receives a certificate.",
  },
];

function FAQs() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div  className="bg-white rounded-xl shadow p-6 cursor-pointer" key={index}>
              <MyAccordion key={index} {...faq}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
