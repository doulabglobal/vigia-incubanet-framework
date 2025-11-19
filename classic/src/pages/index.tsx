import React from 'react';
import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  Layers,
  BarChart3,
  Network,
  Radar,
  Building2,
  GraduationCap,
  Rocket,
  Globe2,
} from 'lucide-react';

export default function Home(): ReactElement {
  return (
    <Layout
      title="Vigía Incubation Framework 1.0"
      description="VIF 1.0 – A structured architecture for national and regional incubation networks, built on MicroCanvas® 2.1, IMM-P® and Vigía Futura."
    >
      <main className="vif-home">
        {/* HERO / PITCH */}
        <section className="vif-hero">
          <div className="container vif-hero-inner">
            <h1>Vigía Incubation Framework 1.0</h1>
            <p className="vif-tagline">
              A minimalist, evidence-based architecture for designing, governing, and
              scaling national and regional incubation networks across public, private,
              and academic ecosystems.
            </p>

            <div className="vif-hero-actions">
              <Link
                className="button button--primary button--lg"
                to="/docs/core/vif/00-executive-summary"
              >
                Start with the Executive Summary
              </Link>

              <Link
                className="button button--secondary button--lg"
                to="/docs/core/vif/01-introduction"
              >
                Explore the Full Framework
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT IS VIF / BENEFITS */}
        <section className="vif-highlights">
          <div className="container">
            <div className="vif-grid">
              <div className="vif-card">
                <div className="vif-card-icon">
                  <Layers />
                </div>
                <h2>What is VIF?</h2>
                <p>
                  The Vigía Incubation Framework (VIF) is a system blueprint for
                  building coherent incubation networks: it aligns diagnostics,
                  governance, operating and funding models, KPIs, and policy feedback
                  into one architecture.
                </p>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <BarChart3 />
                </div>
                <h2>What problem does it solve?</h2>
                <p>
                  Ecosystems often run isolated programs, pilots, or calls with no
                  shared structure. VIF helps decision-makers move from fragmented
                  initiatives to a repeatable, measurable, and governable incubation
                  system.
                </p>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <Network />
                </div>
                <h2>What do you get?</h2>
                <p>
                  A complete reference model for national or regional incubator
                  networks: ecosystem diagnostic, system architecture, operating and
                  funding model, benchmarking, KPIs & scorecards, roadmap, and
                  governance/legal components.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STACK: MCF 2.1 → IMM-P® → VIF → VIGÍA FUTURA */}
        <section className="vif-highlights vif-stack">
          <div className="container">
            <h2>How VIF fits into the stack</h2>
            <p className="vif-tagline">
              VIF does not replace existing tools – it sits on top of them and connects
              evidence, maturity, incubation architecture, and foresight.
            </p>

            <div className="vif-grid">
              <div className="vif-card">
                <div className="vif-card-icon">
                  <Layers />
                </div>
                <h3>MicroCanvas® 2.1 – Evidence</h3>
                <p>
                  MicroCanvas® 2.1 structures problem, customer, solution, and model
                  evidence at the project level, ensuring that each initiative is built
                  on explicit, testable assumptions.
                </p>
                <Link
                  className="button button--sm button--primary vif-card-button"
                  to="https://themicrocanvas.com"
                >
                  Learn about MicroCanvas® 2.1
                </Link>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <BarChart3 />
                </div>
                <h3>IMM-P® – Innovation Maturity</h3>
                <p>
                  The Innovation Maturity Model Program (IMM-P®) evaluates and guides
                  teams, incubators, and institutions through maturity stages, making
                  capacity building explicit and trackable over time.
                </p>
                <Link
                  className="button button--sm button--secondary vif-card-button"
                  to="https://www.doulab.net/services/innovation-maturity"
                >
                  Learn about IMM-P®
                </Link>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <Network />
                </div>
                <h3>VIF – Incubation Architecture</h3>
                <p>
                  VIF assembles diagnostics, governance, operating model, funding
                  mechanisms, and KPIs into a single architecture that can be adopted
                  by national or regional incubation networks.
                </p>
                <Link
                  className="button button--sm button--outline vif-card-button"
                  to="/docs/core/vif/03-system-architecture"
                >
                  See the VIF architecture
                </Link>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <Radar />
                </div>
                <h3>Vigía Futura – Foresight & Indices</h3>
                <p>
                  Vigía Futura aggregates data from VIF deployments into dashboards and
                  indices, allowing ecosystems to monitor trends, compare cohorts, and
                  feed evidence back into policy and future program design.
                </p>
                <Link
                  className="button button--sm button--secondary vif-card-button"
                  to="https://www.doulab.net/vigia-futura"
                >
                  Learn about Vigía Futura
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE TEASER – ECHOES MERMAID DIAGRAM */}
    <section className="vif-highlights vif-architecture-teaser">
  <div className="container">
    <h2>Architecture at a glance</h2>
    <p className="vif-tagline">
      VIF runs as a continuous learning loop: evidence from projects, maturity
      assessments, governance, and policy all reinforce each other.
    </p>

    <div className="vif-arch-flow">
      <div className="vif-arch-pill">MCF 2.1 – Evidence</div>
      <div className="vif-arch-arrow" />
      <div className="vif-arch-pill">IMM-P® – Maturity</div>
      <div className="vif-arch-arrow" />
      <div className="vif-arch-pill">Vigía Futura – Foresight</div>
      <div className="vif-arch-arrow" />
      <div className="vif-arch-pill">VIF Governance</div>
      <div className="vif-arch-arrow" />
      <div className="vif-arch-pill">Incubator Nodes</div>
      <div className="vif-arch-arrow" />
      <div className="vif-arch-pill">Funding Mechanisms</div>
      <div className="vif-arch-arrow" />
      <div className="vif-arch-pill">KPIs & Dashboard</div>
      <div className="vif-arch-arrow vif-arch-arrow-loop" />
      <div className="vif-arch-pill">
        Policy & Foresight feed back into new evidence
      </div>
    </div>

    <p className="vif-arch-caption">
      The loop closes when policy decisions and foresight insights shape new
      calls, cohorts, and experiments, generating a fresh cycle of evidence.
    </p>
  </div>
</section>

        {/* WHO IT'S FOR */}
        <section className="vif-highlights">
          <div className="container">
            <h2>Who is VIF for?</h2>
            <p className="vif-tagline">
              The framework is designed for ecosystems where multiple actors need a
              shared architecture and language.
            </p>

            <div className="vif-grid">
              <div className="vif-card">
                <div className="vif-card-icon">
                  <Building2 />
                </div>
                <h3>Public Programs</h3>
                <p>
                  Ministries, digital government offices, and public innovation labs
                  that run calls, cohorts, or national incubation initiatives and need
                  consistency across institutions.
                </p>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <GraduationCap />
                </div>
                <h3>Universities & Labs</h3>
                <p>
                  Universities, research centers, and innovation labs that want their
                  incubators to align with national or regional priorities while still
                  keeping academic autonomy.
                </p>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <Rocket />
                </div>
                <h3>Private Accelerators & Funds</h3>
                <p>
                  Private accelerators, corporate programs, and funds that need
                  portfolio-level visibility, comparable KPIs, and clear governance
                  rules to co-invest with public partners.
                </p>
              </div>

              <div className="vif-card">
                <div className="vif-card-icon">
                  <Globe2 />
                </div>
                <h3>Multilateral & Regional Initiatives</h3>
                <p>
                  Multilateral organizations and regional programs that need a common
                  framework to support multiple countries while respecting local
                  implementation choices.
                </p>
              </div>
            </div>
          </div>
        </section>

{/* CASE STUDIES */}
<section className="vif-highlights vif-case-studies">
  <div className="container">
    <h2>Case studies</h2>
    <p className="vif-tagline">
      Early implementations and pilots that inform how VIF 1.0 is designed as a
      national incubation architecture.
    </p>

    <div className="vif-grid">
      <div className="vif-card">
        <div className="vif-card-icon">
          <Globe2 />
        </div>
        <h3>
          Red de Incubadoras Público-Privadas – OGTIC, Dominican Republic
        </h3>
        <p>
          The Red de Incubadoras Público-Privadas is a national network promoted
          by the Dominican Government&apos;s Office of Information and Communication
          Technologies (OGTIC) to address structural gaps in support for new
          ventures. The network seeks to connect public institutions, private
          actors and academia around shared incubation standards, access to risk
          capital, qualified support and information, in line with the Política
          Nacional de Innovación 2030.
        </p>
        <br />
        <p>
          The execution of the network required a customization of VIF 1.0 to build VIF-DR, 
          the Dominican Republic's blueprint to implement the national incubation network.
        </p>
        <br />
        <p>
          Initiatives such as the national &quot;República de Ideas&quot; competition
          channel winning teams into this network, combining mentoring,
          seed-type funding and structured program design. VIF 1.0 takes lessons
          from this experience to offer a reusable architecture for national and
          regional incubator networks.
        </p>
        <ul className="vif-link-list">
          <li>
            <a
              href="https://republicadeideas.do"
              target="_blank"
              rel="noopener noreferrer"
            >
              República de Ideas – Official site
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

        {/* POLICY / KPIs / WHERE TO START */}
        <section className="vif-highlights">
          <div className="container">
            <h2>Where to start in the documentation</h2>
            <p className="vif-tagline">
              The core VIF 1.0 documentation is structured so that policymakers,
              ecosystem architects, and operators can jump directly to what they need.
            </p>

            <div className="vif-grid">
              <div className="vif-card">
                <h3>1. Understand the architecture</h3>
                <p>Begin with the high-level framing and logic of the framework.</p>
                <ul className="vif-link-list">
                  <li>
                    <Link to="/docs/core/vif/00-executive-summary">
                      00 – Executive Summary
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/01-introduction">
                      01 – Introduction
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="vif-card">
                <h3>2. Design the system</h3>
                <p>
                  Use the architecture and operating model sections to shape your
                  national or regional incubation network.
                </p>
                <ul className="vif-link-list">
                  <li>
                    <Link to="/docs/core/vif/02-ecosystem-diagnostic">
                      02 – Ecosystem Diagnostic
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/03-system-architecture">
                      03 – System Architecture
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/04-operating-model">
                      04 – Operating Model
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/05-funding-model">
                      05 – Funding Model
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="vif-card">
                <h3>3. Govern, measure, and iterate</h3>
                <p>
                  For policymakers, donors, and governing boards that need KPIs,
                  roadmaps, and legal scaffolding.
                </p>
                <ul className="vif-link-list">
                  <li>
                    <Link to="/docs/core/vif/06-benchmarking">
                      06 – Benchmarking
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/07-kpis-scorecard">
                      07 – KPIs & Scorecard
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/08-roadmap">
                      08 – Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/09-governance-legal">
                      09 – Governance & Legal
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/10-templates">
                      10 – Templates
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/core/vif/11-references">
                      11 – References
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
