import React from "react";

const tabspractice = () => {
  return (
    <div className="ds_tabs" data-module="ds-tabs">
      <nav className="ds_tabs__navigation" aria-labelledby="ds_tabs__title">
        <h2 id="ds_tabs__title" className="ds_tabs__title">
          Contents
        </h2>
        <ul className="ds_tabs__list" id="tablist">
          <li className="ds_tabs__tab">
            <a className="ds_tabs__tab-link" href="#tab1">
              Courses and funding
            </a>
          </li>
          <li className="ds_tabs__tab">
            <a className="ds_tabs__tab-link" href="#tab2">
              Choosing apprenticeships
            </a>
          </li>
          <li className="ds_tabs__tab">
            <a className="ds_tabs__tab-link" href="#tab3">
              Extra skills support
            </a>
          </li>
        </ul>
      </nav>
      <div className="ds_tabs__content  ds_tabs__content--bordered" id="tab1">
        <h2>Search for training courses and funding</h2>
        <p>
          A wide range of training courses for your employees are available.
        </p>
        <p>
          Opportunities include distance learning, short courses and vocational
          training.
        </p>
        <p>
          <a href="#">Visit My World of Work to search for training courses</a>.
        </p>
        <p>
          You can also{" "}
          <a href="#">
            search for training courses, and funding towards training
          </a>
          .
        </p>
      </div>
      <div className="ds_tabs__content  ds_tabs__content--bordered" id="tab2">
        <h2>Choosing an apprenticeship for your business</h2>
        <p>
          Apprenticeships can help you address skills gaps in your business. The
          government provides help with the cost of training an apprentice.
        </p>
        <p>There are 3 different types of apprenticeship:</p>
        <ul>
          <li>
            Foundation Apprenticeships let school or college students do
            short-term work experience at your business as part of a
            qualification
          </li>
          <li>
            Modern Apprenticeships let your new or current employees gain a
            qualification while working in a paid role at your business
          </li>
          <li>
            Graduate Apprenticeships let your new or current employees gain a
            degree while working in a paid role at your business
          </li>
        </ul>
        <p>
          You can find more information on the{" "}
          <a href="#">apprenticeships.scot</a> website.
        </p>
      </div>
      <div className="ds_tabs__content  ds_tabs__content--bordered" id="tab3">
        <h2>Extra skills support</h2>
        <p>
          The <a href="#">Skills for Growth</a> service can offer skills advice
          to businesses with fewer than 250 employees.
        </p>
        <p>
          Businesses of any size can get skills advice by completing a{" "}
          <a href="#">skills support request form</a>.
        </p>
        <p>
          Businesses of any size can also get skills advice by calling Skills
          Development Scotland on 0800 783 6000.
        </p>
      </div>
    </div>
  );
};

export default tabspractice;
