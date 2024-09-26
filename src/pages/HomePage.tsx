import LayoutComponent from "../components/LayoutComponent";

const HomePage = () => {
  return (
    <LayoutComponent>
      <div className="ds_layout__header">
        <header className="ds_page-header">
          <h1 className="ds_page-header__title">
            About the Scottish Government Design System
          </h1>

          <dl className="ds_page-header__metadata  ds_metadata">
            <div className="ds_metadata__item">
              <dt className="ds_metadata__key">Last updated</dt>
              <dd className="ds_metadata__value">
                19 June 2024 -{" "}
                <a href="#full-history" data-navigation="last-updated-1">
                  see all updates
                </a>
              </dd>
            </div>
          </dl>
        </header>
      </div>
      <div className="ds_layout__content">
        <div className="ds_leader">
          What the Design System is, who should use it and the benefits of using
          it.
        </div>

        <p>
          The Design System is a catalogue of reusable styles, components and
          patterns from the Scottish Government. &nbsp;
        </p>

        <p>
          The Design System is open source and free to use to build consistent
          and accessible online services.&nbsp;
        </p>

        <p>
          It’s designed and maintained by a multi-disciplinary team in the
          Scottish Government’s Digital Directorate.&nbsp;
        </p>

        <h2>Benefits of using the Design System&nbsp;</h2>

        <p>
          Using the Design System to build online services means you can:&nbsp;
        </p>

        <ul>
          <li>
            save time and money – compared to building new components and
            patterns&nbsp;
          </li>
          <li>
            create prototypes quickly and easily for early user testing&nbsp;
          </li>
          <li>
            use the components to build patterns that are unique to your service
            &nbsp;
          </li>
          <li>
            create consistent user experiences across government services &nbsp;
          </li>
          <li>
            track user behaviour – using built-in tracking HTML attributes with
            analytics tools&nbsp;
          </li>
          <li>
            build accessible, inclusive services – the patterns and components
            are accessible&nbsp;
          </li>
        </ul>

        <p>
          Websites built with the Scottish Government Design System have
          approximately 55 times fewer accessibility issues than websites that
          do not (Accessibility Cloud testing, April 2024).&nbsp;
        </p>

        <h2>Who should use the Design System&nbsp;</h2>

        <p>
          We expect the Design System to be used to build online services
          commissioned and delivered by:&nbsp;
        </p>

        <ul>
          <li>Scottish Government directorates or policy areas&nbsp;</li>
          <li>
            Scottish Government campaigns with an approved sub brand&nbsp;
          </li>
          <li>
            organisations in the Technology Assurance Framework - check the{" "}
            <a
              href="https://www.gov.scot/publications/technology-assurance-framework-central-government-organisations/"
              data-navigation="link-external"
              data-section="Who should use the Design System&nbsp;"
            >
              Technology Assurance Framework on gov.scot
            </a>
            &nbsp;
          </li>
        </ul>

        <p>
          Use of the Design System is part of the Digital Scotland Service
          Standard assessment of new government services. Read about the{" "}
          <a
            href="https://www.gov.scot/publications/digital-scotland-service-standard/"
            data-navigation="link-external"
            data-section="Who should use the Design System&nbsp;"
          >
            Digital Scotland Service Standard on gov.scot
          </a>
          .&nbsp;
        </p>

        <p>This includes services such as:&nbsp;</p>

        <ul>
          <li>websites &nbsp;</li>
          <li>micro-services – for example, online application forms&nbsp;</li>
          <li>web applications&nbsp;</li>
        </ul>

        <h3>Other Scottish public sector bodies &nbsp;&nbsp;</h3>

        <p>
          We recommend that other public sector organisations use the Design
          System to build online services as there are benefits to doing this.
          Check the{" "}
          <a
            href="https://www.gov.scot/publications/national-public-bodies-directory/pages/introduction/"
            data-navigation="link-external"
            data-section="Other Scottish public sector bodies &nbsp;&nbsp;"
          >
            National Public Bodies directory on gov.scot
          </a>
          .
        </p>

        <h3>Adapting the Design System to your brand&nbsp;</h3>

        <p>
          Testing has shown that colour contrast is a common accessibility fail
          on public sector websites (Accessibility Cloud testing, April
          2024).&nbsp;The Design System colours are designed to be accessible
          and meet colour contrast standards.
        </p>

        <p>
          Some organisations can adapt the colours of components and patterns
          and add their own logo to express their brand identity.&nbsp;
        </p>

        <p>
          Find out more about{" "}
          <a
            href="/styles/branding"
            data-section="Adapting the Design System to your brand&nbsp;"
          >
            adapting the Design System to your brand
          </a>
          .&nbsp;
        </p>

        <h2>Services using the Design System&nbsp;</h2>

        <p>The Design System is currently used by services such as:&nbsp;</p>

        <ul>
          <li>
            <a
              href="https://aib.gov.uk/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              Accountant in Bankruptcy
            </a>
            &nbsp;
          </li>
          <li>
            <a
              href="https://cloud.campaign.gov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              Cloud Platform
            </a>
          </li>
          <li>
            <a
              href="https://digital.jobs.gov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              digital.jobs.gov.scot
            </a>
          </li>
          <li>
            <a
              href="https://servicemanual.gov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              Digital Scotland Service Manual
            </a>
          </li>
          <li>
            <a
              href="https://www.disclosure.gov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              Disclosure Scotland
            </a>
          </li>
          <li>
            <a
              href="http://gov.scot"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              gov.scot
            </a>
            &nbsp;
          </li>
          <li>
            <a
              href="https://www.mygov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              mygov.scot
            </a>{" "}
            &nbsp;
          </li>
          <li>Revenue Scotland’s tax portal&nbsp;</li>
          <li>
            <a
              href="https://scotaccount.campaign.gov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              ScotAccount
            </a>
            &nbsp;
          </li>
          <li>
            <a
              href="https://scotpayments.campaign.gov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              ScotPayments
            </a>
          </li>
          <li>
            <a
              href="https://digitalacademy.gov.scot/"
              data-navigation="link-external"
              data-section="Services using the Design System&nbsp;"
            >
              Scottish Digital Academy
            </a>
          </li>
        </ul>

        <p>Organisations in the process of adopting the Design System are:</p>

        <ul>
          <li>National Records of Scotland</li>
          <li>Scottish Courts and Tribunals Service</li>
          <li>Scottish Forestry</li>
          <li>Scottish Public Pension Agency</li>
        </ul>

        <h2>Contact the Design System team &nbsp;</h2>

        <p>We’d like to hear from you if: &nbsp;</p>

        <ul>
          <li>you’re building or commissioning an online service&nbsp;</li>
          <li>
            you need a pattern or component that’s not on the Design System
            &nbsp;
          </li>
          <li>you've got feedback about using the Design System &nbsp;</li>
        </ul>

        <p>
          Email{" "}
          <a
            href="mailto:designsystem@gov.scot"
            data-section="Contact the Design System team &nbsp;"
          >
            designsystem@gov.scot
          </a>
          . &nbsp;
        </p>

        <h2>Blogs about the design system&nbsp;</h2>

        <ul>
          <li>
            <a
              href="https://blogs.gov.scot/digital/2020/08/25/digital-scotland-design-system/"
              data-navigation="link-external"
              data-section="Blogs about the design system&nbsp;"
            >
              Digital Scotland Design System on blogs.gov.scot
            </a>
          </li>
          <li>
            <a
              href="https://blogs.gov.scot/digital/2022/06/29/design-systems-save-organisations-money-and-time/"
              data-navigation="link-external"
              data-section="Blogs about the design system&nbsp;"
            >
              Design systems save organisations money and time on blogs.gov.scot
            </a>
          </li>
          <li>
            <a
              href="https://blogs.gov.scot/digital/2023/02/24/the-digital-scotland-design-system-kit-for-figma/"
              data-navigation="link-external"
              data-section="Blogs about the design system&nbsp;"
            >
              The Digital Scotland Design System kit for Figma on blogs.gov.scot
            </a>
          </li>
        </ul>

        <div className="update-history">
          <div id="history" className="ds_!_margin-top--4">
            <dl className="ds_metadata">
              <div className="ds_metadata__item">
                <dt className="ds_metadata__key">First published</dt>
                <dd className="ds_metadata__value">
                  <strong>16 May 2024</strong>
                </dd>
              </div>

              <div className="ds_metadata__item">
                <dt className="ds_metadata__key">Last updated</dt>
                <dd className="ds_metadata__value">
                  <strong>19 June 2024</strong>
                  <span className="dss_toggle-link">
                    -{" "}
                    <a
                      href="#full-history"
                      data-module="ds-toggle-link"
                      aria-controls="full-history"
                      data-toggled-text="hide all updates"
                      aria-expanded="false"
                      data-navigation="last-updated-1"
                    >
                      show all updates
                    </a>
                  </span>
                </dd>
              </div>

              <div
                id="full-history"
                data-module="ds-update-history"
                className="ds_metadata__item  dss_toggle-link__target"
              >
                <dt className="ds_metadata__key  visually-hidden">
                  All updates
                </dt>
                <dd className="ds_metadata__value  dss_history-list">
                  <ol className="ds_no-bullets">
                    <li className="dss_history-list__item">
                      <time dateTime="2024-06-19T00:00:00BST">
                        19 June 2024{" "}
                      </time>
                    </li>
                  </ol>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default HomePage;
