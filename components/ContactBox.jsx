import React from "react";
import Form from "./Form";
import ContactSubContent from "./ContactSubContent";

function ContactBox() {
  return (
    <section className="md:px-10 my-24">
      <div className="max-w-7xl mx-auto bg-lime-100 p-10 border border-lime-300 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Form />
          <ContactSubContent />
        </div>
      </div>
    </section>
  );
}

export default ContactBox;
