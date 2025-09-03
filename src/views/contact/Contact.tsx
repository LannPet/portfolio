import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [state, handleSubmit] = useForm("myzddnjj"); // ← your Formspree ID

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center mb-40 ${
        mounted ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <section className="max-w-[700px] w-full px-4">
        <div className="font-poppins xl:text-5xl xl:mt-32 mt-20 xl:mb-20 mb-10 text-2xl px-4 text-center">
          Contact
        </div>

        {state.succeeded ? (
          <p
            className="font-poppins text-center text-green-700"
            role="status"
            aria-live="polite"
          >
            Thanks! Your message has been sent.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 font-poppins font-light"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border-2 rounded-md py-3 px-4 text-lg focus:outline-none focus:border-black"
            />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-2 rounded-md py-3 px-4 text-lg focus:outline-none focus:border-black"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-700 text-sm"
            />

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="border-2 rounded-md py-3 px-4 text-lg focus:outline-none focus:border-black"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-700 text-sm"
            />

            {/* Optional extras you can keep or remove */}
            <input type="hidden" name="_subject" value="New message from your portfolio" />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 transition disabled:opacity-60"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
