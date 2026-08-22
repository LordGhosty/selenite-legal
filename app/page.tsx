import type { Metadata } from "next";
import {
  absoluteSiteUrl,
  internalHref,
  SELENITE_INVITE_URL,
  SITE_DESCRIPTION,
} from "../lib/site";
import { LegalFooter, LegalHeader } from "./legal-shell";

export const metadata: Metadata = {
  title: "Selenite Legal",
  description: SITE_DESCRIPTION,
  alternates: { canonical: absoluteSiteUrl() },
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <main>
      <LegalHeader />
      <section className="hero shell" aria-labelledby="legal-title">
        <div className="eyebrow"><span /> Legal &amp; transparency</div>
        <h1 id="legal-title">Built to moderate.<br />Created for simplicity.</h1>
        <p className="hero-copy">
          Selenite is a configurable Discord moderation and community-management bot.
          These documents explain the rules for using it and what happens to Discord data along the way.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href={SELENITE_INVITE_URL} target="_blank" rel="noreferrer">Invite Selenite <span aria-hidden="true">↗</span></a>
          <a className="secondary-action" href={internalHref("privacy")}>See how Selenite handles data</a>
        </div>
        <div className="legal-cards">
          <a className="legal-card" href={internalHref("terms")}>
            <span className="card-index">01</span>
            <div><h2>Terms of Use</h2><p>The agreement for server owners, administrators, and members using Selenite.</p></div>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a className="legal-card" href={internalHref("privacy")}>
            <span className="card-index">02</span>
            <div><h2>Privacy Policy</h2><p>A direct account of the data Selenite accesses, stores, shares, and deletes.</p></div>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="principles shell" aria-labelledby="principles-title">
        <div><p className="section-kicker">Privacy at a glance</p><h2 id="principles-title">Useful records.<br />Finite retention.</h2></div>
        <div className="principle-grid">
          <article><strong>No sale of data</strong><p>Discord API data is not sold, rented, or used for advertising.</p></article>
          <article><strong>Event-based logging</strong><p>Normal chat is not archived. Configured edit and deletion events may capture content when Discord provides it.</p></article>
          <article><strong>Administrator control</strong><p>Server administrators decide which optional systems and logging events are enabled.</p></article>
          <article><strong>Deletion paths</strong><p>Wallets can be self-deleted, admin logs can be cleared, and privacy requests can be sent directly to the developer.</p></article>
        </div>
      </section>
      <LegalFooter />
    </main>
  );
}
