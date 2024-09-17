interface SiteFooterProps {
  navItems: { label: string; href: string; isCurrent?: boolean }[];
}

const SiteFooter = ({ navItems }: SiteFooterProps) => {
  return (
    <footer className="ds_site-footer">
      <div className="ds_wrapper">
        <div className="ds_site-footer__content">
          <ul className="ds_site-footer__site-items">
            {navItems.map((item) => (
              <li className="ds_site-items__item">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="ds_site-footer__copyright">
            <a
              className="ds_site-footer__copyright-logo"
              href="https://designsystem.gov.scot/binaries/content/gallery/designsystem/examples/ogl-svg"
              data-navigation="link-external"
              data-footer="footer-copyright"
            >
              <img
                src="https://designsystem.gov.scot/binaries/content/gallery/designsystem/examples/ogl-svg"
                alt="Open Government License"
              />
            </a>
            <p>
              All content is available under the{" "}
              <a
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                data-navigation="link-external"
                data-footer="footer-copyright"
              >
                Open Government Licence v3.0
              </a>
              , except for graphic assets and where otherwise stated
            </p>
            <p>© Crown Copyright</p>
          </div>

          <div className="ds_site-footer__org">
            <a
              className="ds_site-footer__org-link"
              title="The Scottish Government"
              href="https://www.gov.scot/"
              data-navigation="link-external"
              data-footer="footer-logo"
            >
              <img
                className="ds_site-footer__org-logo"
                src="https://designsystem.gov.scot/binaries/content/gallery/designsystem/examples/scottish-government--min-svg"
                alt="gov.scot"
                loading="lazy"
                width="300"
                height="55"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
