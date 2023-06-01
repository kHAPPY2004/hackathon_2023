import React from "react";

const Contact = React.forwardRef((props, ref) => {
  return (
    <section
      id="contact"
      className="relative overflow-auto bg-gray-50 dark:bg-slate-700 pt-7"
    >
      <div className="font-bold text-lg md:text-2xl flex justify-center text-center mt-10 underline-offset-4 underline">
        Contact Us
      </div>
      <form
        className="container mx-auto border border-black dark:border-white rounded my-4 text-light dark:text-dark font-weight-bolder p-4"
        action="https://formsubmit.co/asassociates0412@gmail.com"
        method="post"
        ref={ref}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="validationDefault01"
              className="text-black dark:text-white"
            >
              First name
            </label>
            <input
              name="First Name"
              type="text"
              className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
              id="validationDefault01"
              required
            />
          </div>
          <div>
            <label
              htmlFor="validationDefault02"
              className="text-black dark:text-white"
            >
              Last name
            </label>
            <input
              name="Last Name"
              type="text"
              className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
              id="validationDefault02"
              required
            />
          </div>
          <div>
            <label htmlFor="emailInfo" className="text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
              id="emailInfo"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="text-black dark:text-white">
              Phone
            </label>
            <input
              name="phoneNumber"
              type="tel"
              id="phoneNumber"
              className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
              pattern="^[1-9]{1}[0-9]{9}$"
              placeholder="Enter Mobile Number"
              autoComplete="off"
              autoCorrect="off"
              minLength="10"
              maxLength="10"
              onKeyDown={(event) => isNumberFooter(event)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="validationDefault03"
              className="text-black dark:text-white"
            >
              City
            </label>
            <input
              name="City"
              type="text"
              className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
              id="validationDefault03"
              required
            />
          </div>
          <div>
            <label
              htmlFor="validationDefault04"
              className="text-black dark:text-white"
            >
              State
            </label>
            <select
              name="State"
              className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
              id="validationDefault04"
              required
            >
              <option value="">Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="validationDefault05"
              className="text-black dark:text-white"
            >
              Zip
            </label>
            <input
              name="Zip"
              type="text"
              className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
              id="validationDefault05"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="text-black dark:text-white"
          >
            Message..
          </label>
          <textarea
            name="Message"
            className="rounded-lg px-4 py-2 dark:bg-gray-800 bg-gray-300 w-full"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          className="bg-green-500 hover:bg-green-800 hover:text-white rounded-lg px-4 py-2 mt-4"
          type="submit"
        >
          Submit form
        </button>
      </form>
    </section>
  );
});

export default Contact;
