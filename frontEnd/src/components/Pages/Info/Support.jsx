import React from "react";

const SupportPage = () => {
  return (
    <main className="container bg-indigo-950 pt-20 p-7">
      <section className="search mb-8">
        <h1 className="search-title text-4xl font-bold text-white mb-4">
          How can we help?
        </h1>
        <form className="search-form relative">
          <span className="search-icon absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 478.208 478.208"
              className="w-6 h-6 fill-current text-gray-400"
            >
              <path d="M473.418 449.285L303.28 279.148c59.759-73.087 48.954-180.779-24.132-240.538S98.369-10.344 38.61 62.742-10.344 243.521 62.742 303.28c62.953 51.473 153.453 51.473 216.406 0l170.138 170.138c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.713zm-302.2-141.534c-75.37-.085-136.449-61.163-136.533-136.533 0-75.405 61.128-136.533 136.533-136.533s136.533 61.128 136.533 136.533-61.128 136.533-136.533 136.533z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search help articles"
            className="search-input w-full pl-16 py-3 border border-gray-600 bg-indigo-950 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md"
          />
        </form>
      </section>

      <section className="main flex justify-between">
        <div className="menu w-1/4 p-6 bg-indigo-950 rounded-md">
          <h1 className="menu-title text-xl font-semibold text-white mb-4">
            Popular topics
          </h1>
          <nav className="menu-links">
            <a
              href="#"
              className="menu-link text-blue-400 hover:text-white block mb-2"
            >
              Account
            </a>
            <a
              href="#"
              className="menu-link text-blue-400 hover:text-white block mb-2"
            >
              Billing
            </a>
            <a
              href="#"
              className="menu-link text-blue-400 hover:text-white block mb-2"
            >
              Privacy
            </a>
            <a
              href="#"
              className="menu-link text-blue-400 hover:text-white block mb-2"
            >
              Refunds
            </a>
            <a
              href="#"
              className="menu-link text-blue-400 hover:text-white block mb-2"
            >
              Verification
            </a>
            <a
              href="#"
              className="menu-link text-blue-400 hover:text-white block mb-2"
            >
              Integrations
            </a>
          </nav>

          <div className="support mt-6">
            <h2 className="support-title text-xl font-semibold text-white">
              Contact support
            </h2>
            <p className="support-text text-gray-400 mt-2">
              24/7 help from our support staff
            </p>
            <a
              href="#"
              className="support-button mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="content w-3/4">
          <div className="content-item bg-indigo-950 p-6 rounded-md mb-4">
            <h3 className="content-title text-xl font-semibold text-white">
              Waiting period for first payout{" "}
              <span className="badge badge-primary ml-2 bg-pink-500 text-white px-2 py-1 rounded-md">
                Payment
              </span>
            </h3>
            <p className="content-description text-gray-400 mt-2">
              With so many different ways today to find information online, it
              can sometimes be hard to know where to go to first.
            </p>
          </div>

          <div className="content-item bg-indigo-950 p-6 rounded-md mb-4">
            <h3 className="content-title text-xl font-semibold text-white">
              E Banks That Accept Us Casino Players{" "}
              <span className="badge badge-secondary ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">
                Privacy
              </span>
            </h3>
            <p className="content-description text-gray-400 mt-2">
              With so many different ways today to find information online, it
              can sometimes be hard to know where to go to first.
            </p>
          </div>

          <div className="content-item bg-indigo-950 p-6 rounded-md">
            <h3 className="content-title text-xl font-semibold text-white">
              How To Protect Your Computer Very Useful Tips{" "}
              <span className="badge badge-primary ml-2 bg-pink-500 text-white px-2 py-1 rounded-md">
                API
              </span>
            </h3>
            <p className="content-description text-gray-400 mt-2">
              With so many different ways today to find information online, it
              can sometimes be hard to know where to go to first.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
