import React from "react";
import { Container } from "react-bootstrap";

const YuflymaHCP = ({ shouldHideDiv, collapseText, isiTextRef, readLess }) => {
  return (
    <>
      <div
        className={`isi-text-sticky isi-text ${shouldHideDiv ? "d-none" : ""}`}
      >
        <Container className="position-relative">
          <button className="isi-text-open" onClick={collapseText}>
            <i class="fas fa-plus"></i>
          </button>
          <div className="isi-text-wrap">
            <br />
            <p>
              <strong>IMPORTANT SAFETY INFORMATION  </strong>
            </p>
            <br />
            <p>
              <strong>SERIOUS INFECTIONS </strong>
            </p>
            <br />
            <p>
              <strong>
                Patients treated with YUFLYMA are at increased risk for
                developing serious infections that may lead to hospitalization
                or death. Most patients who developed these infections were
                taking concomitant immunosuppressants such as methotrexate or
                corticosteroids.{" "}
              </strong>{" "}
            </p>
            <br />
            <p>
              {" "}
              <strong>
                Discontinue YUFLYMA if a patient develops a serious infection or
                sepsis.{" "}
              </strong>{" "}
            </p>
            <br />
          </div>
        </Container>
      </div>

      <div className="isi-text" ref={isiTextRef}>
        <Container className="position-relative">
          <div className="isi-text-wrap">
            <button onClick={readLess} className="isi-text-open">
              <i class="fas fa-times"></i>{" "}
            </button>
            <p>
              <strong>IMPORTANT SAFETY INFORMATION </strong>
            </p>
            <br />
            <p>
              <strong>SERIOUS INFECTIONS </strong>
            </p>
            <br />
            <p>
              <strong>
                Patients treated with YUFLYMA are at increased risk for
                developing serious infections that may lead to hospitalization
                or death. Most patients who developed these infections were
                taking concomitant immunosuppressants such as methotrexate or
                corticosteroids.{" "}
              </strong>{" "}
            </p>
            <br />
            <p>
              {" "}
              <strong>
                Discontinue YUFLYMA if a patient develops a serious infection or
                sepsis.{" "}
              </strong>{" "}
            </p>
            <br />
            <p>
              {" "}
              <strong>Reported infections include: </strong>{" "}
            </p>
            <ul>
              <li>
                <strong>
                  Active tuberculosis (TB), including reactivation of latent TB.
                  Patients with TB have frequently presented with disseminated
                  or extrapulmonary disease. Test patients for latent TB before
                  YUFLYMA use and during therapy. Initiate treatment for latent
                  TB prior to YUFLYMA use.
                </strong>
              </li>
              <li>
                {" "}
                <strong>
                  Invasive fungal infections, including histoplasmosis,
                  coccidioidomycosis, candidiasis, aspergillosis, blastomycosis,
                  and pneumocystosis. Patients with histoplasmosis or other
                  invasive fungal infections may present with disseminated,
                  rather than localized, disease. Antigen and antibody testing
                  for histoplasmosis may be negative in some patients with
                  active infection. Consider empiric antifungal therapy in
                  patients at risk for invasive fungal infections who develop
                  severe systemic illness.
                </strong>
              </li>
              <li>
                {" "}
                <strong>
                  Bacterial, viral, and other infections due to opportunistic
                  pathogens, including Legionella and Listeria.
                </strong>
              </li>
            </ul>
            <br />

            <p>
              <strong>
                Carefully consider the risks and benefits of treatment with
                YUFLYMA prior to initiating therapy in patients with chronic or
                recurrent infection.{" "}
              </strong>
            </p>
            <br />
            <p>
              <strong>
                Monitor patients closely for the development of signs and
                symptoms of infection during and after treatment with YUFLYMA,
                including the possible development of TB in patients who tested
                negative for latent TB infection prior to initiating therapy.{" "}
              </strong>{" "}
            </p>

            <ul>
              <li>
                {" "}
                Treatment with YUFLYMA should not be initiated in patients with
                an active infection, including localized infections.
              </li>
              <li>
                {" "}
                Patients over 65 years of age, patients with co-morbid
                conditions and/or patients taking concomitant immunosuppressants
                (such as corticosteroids or methotrexate), may be at greater
                risk of infection. Discontinue YUFLYMA if a patient develops a
                serious infection or sepsis. For a patient who develops a new
                infection during treatment with YUFLYMA, closely monitor them,
                perform a prompt and complete diagnostic workup appropriate for
                an immunocompromised patient, and initiate appropriate
                antimicrobial therapy.
              </li>
              <li>
                {" "}
                Drug interactions with biologic products: In clinical studies in
                patients with RA, an increased risk of serious infections has
                been observed with the combination of TNF blockers with anakinra
                or abatacept, with no added benefit; therefore, use of YUFLYMA
                with abatacept or anakinra is not recommended in patients with
                RA. A higher rate of serious infections has also been observed
                in patients with RA treated with rituximab who received
                subsequent treatment with a TNF blocker. There is insufficient
                information regarding the concomitant use of YUFLYMA and other
                biologic products for the treatment of RA, PsA, AS, CD, UC, PS,
                and HS. Concomitant administration of YUFLYMA with other
                biologic DMARDS (e.g., anakinra and abatacept) or other TNF
                blockers is not recommended based upon the possible increased
                risk for infections and other potential pharmacological
                interactions. A higher rate of serious infections has been
                observed in RA patients treated with rituximab who received
                subsequent treatment with a TNF blocker.
              </li>
            </ul>
            <br />

            <p>
              <strong>MALIGNANCY</strong>{" "}
            </p>

            <p>
              <strong>
                Lymphoma and other malignancies, some fatal, have been reported
                in children and adolescent patients treated with TNF blockers,
                including adalimumab products. Postmarketing cases of
                hepatosplenic T-cell lymphoma (HSTCL), a rare type of T-cell
                lymphoma, have been reported in patients treated with TNF
                blockers, including adalimumab products. These cases have had a
                very aggressive disease course and have been fatal. The majority
                of reported TNF blocker cases have occurred in patients with
                Crohn’s disease or ulcerative colitis and the majority were in
                adolescent and young adult males. Almost all of these patients
                had received treatment with azathioprine or 6-mercaptopurine
                concomitantly with a TNF blocker at or prior to diagnosis. It is
                uncertain whether the occurrence of HSTCL is related to use of a
                TNF blocker or a TNF blocker in combination with these other
                immunosuppressants.{" "}
              </strong>
            </p>

            <ul>
              <li>
                {" "}
                Consider the risks and benefits of TNF blocker treatment
                including YUFLYMA prior to initiating therapy in patients with a
                known malignancy other than a successfully treated non-melanoma
                skin cancer (NMSC), or when considering continuing a TNF blocker
                in patients who develop a malignancy.
              </li>
              <li>
                {" "}
                In controlled portions of clinical trials of some adalimumab
                products, more cases of malignancies have been observed compared
                to control-treated adult patients.
              </li>
              <li>
                {" "}
                Non-melanoma skin cancer (NMSC) was reported during clinical
                trials for patients treated with adalimumab products. During the
                controlled portions of 39 global adalimumab clinical trials in
                adult patients with RA, PsA, AS, CD, UC, Ps, HS, and another
                indication, the rate (95% confidence interval) of NMSC was 0.8
                (0.52, 1.09) per 100 patient-years among adalimumab-treated
                patients and 0.2 (0.10, 0.59) per 100 patient-years among
                control-treated patients. Examine all patients, and in
                particular patients with a medical history of prior prolonged
                immunosuppressant therapy or psoriasis patients with a history
                of PUVA treatment for the presence of NMSC prior to and during
                treatment with Adalimumab.
              </li>
              <li>
                {" "}
                In clinical trials of some adalimumab products, there was an
                approximate threefold higher rate of lymphoma than expected in
                the general U.S. population. Patients with RA and other chronic
                inflammatory diseases, particularly those with highly active
                disease and/or chronic exposure to immunosuppressant therapies,
                may be at a higher risk (up to several fold) than the general
                population for the development of lymphoma, even in the absence
                of TNF blockers.
              </li>
              <li>
                Postmarketing cases of acute and chronic leukemia were reported
                with use of a TNF blocker in RA and other indications.
                Approximately half of the postmarketing cases of malignancies in
                children, adolescents, and young adults receiving adalimumab
                were lymphomas; other cases represented a variety of different
                malignancies and included rare malignancies usually associated
                with immunosuppression and malignancies that are not usually
                observed in children and adolescents.
              </li>
            </ul>
            <br />
            <p>
              <strong>HYPERSENSITIVITY </strong>
            </p>
            <ul>
              <li>
                Anaphylaxis and angioneurotic edema have been reported following
                administration of adalimumab products. If an anaphylactic or
                other serious allergic reaction occurs, immediately discontinue
                administration of YUFLYMA and institute appropriate therapy.{" "}
              </li>
            </ul>
            <br />
            <p>
              <strong>HEPATITIS B VIRUS REACTIVATION </strong>
            </p>
            <ul>
              <li>
                {" "}
                Use of TNF blockers, including YUFLYMA, may increase the risk of
                reactivation of hepatitis B virus (HBV) in patients who are
                chronic carriers. In some instances, HBV reactivation occurring
                in conjunction with TNF blocker therapy has been fatal.
              </li>
              <li>
                {" "}
                Evaluate patients at risk for HBV infection for prior evidence
                of HBV infection before initiating TNF blocker therapy.
              </li>
              <li>
                {" "}
                Exercise caution in prescribing TNF blockers for patients
                identified as carriers of HBV and closely monitor such patients
                for clinical and laboratory signs of active HBV infection
                throughout therapy and for several months following termination
                of therapy.
              </li>
              <li>
                {" "}
                In patients who develop HBV reactivation, stop YUFLYMA and
                initiate effective antiviral therapy with appropriate supportive
                treatment. The safety of resuming TNF blocker therapy after HBV
                reactivation is controlled is not known. Therefore, exercise
                caution when considering resumption of YUFLYMA therapy in this
                situation and monitor patients closely.
              </li>
            </ul>
            <br />
            <p>
              <strong>NEUROLOGIC REACTIONS </strong>
            </p>
            <ul>
              <li>
                {" "}
                Use of TNF blocking agents, including adalimumab products, has
                been associated with rare cases of new onset or exacerbation of
                clinical symptoms and/or radiographic evidence of central
                nervous system demyelinating disease, including multiple
                sclerosis (MS) and optic neuritis, and peripheral demyelinating
                disease, including Guillain-Barré syndrome.
              </li>
              <li>
                {" "}
                Exercise caution in considering the use of YUFLYMA in patients
                with preexisting or recent-onset central or peripheral nervous
                system demyelinating disorders; discontinuation of YUFLYMA
                should be considered if any of these disorders develop.
              </li>
              <li>
                {" "}
                There is a known association between intermediate uveitis and
                central demyelinating disorders.
              </li>
            </ul>
            <br />
            <p>
              <strong>HEMATOLOGIC REACTIONS </strong>
            </p>
            <ul>
              <li>
                {" "}
                Rare reports of pancytopenia including aplastic anemia have been
                reported with TNF blocking agents.
              </li>
              <li>
                {" "}
                Adverse reactions of the hematologic system, including medically
                significant cytopenia, have been infrequently reported with
                adalimumab products.
              </li>
              <li>
                {" "}
                Consider discontinuation of YUFLYMA therapy in patients with
                confirmed significant hematologic abnormalities.
              </li>
            </ul>
            <br />

            <p>
              <strong>HEART FAILURE </strong>
            </p>
            <ul>
              <li>
                Cases of worsening congestive heart failure (CHF) and new-onset
                CHF have been reported with TNF blockers. Cases of worsening CHF
                have also been observed with adalimumab products.
              </li>
              <li>
                Exercise caution when using YUFLYMA in patients who have heart
                failure and monitor them carefully.
              </li>
            </ul>
            <br />
            <p>
              <strong>AUTOIMMUNITY </strong>
            </p>
            <ul>
              <li>
                Treatment with adalimumab products may result in the formation
                of autoantibodies and, rarely, in the development of a
                lupus-like syndrome. If a patient develops symptoms suggestive
                of a lupus-like syndrome following treatment with YUFLYMA,
                discontinue treatment.{" "}
              </li>
            </ul>
            <br />

            <p>
              <strong>IMMUNIZATIONS </strong>
            </p>
            <ul>
              <li>
                Patients on YUFLYMA may receive concurrent vaccinations, except
                for live vaccines.
              </li>
              <li>
                {" "}
                It is recommended that pediatric patients, if possible, be
                brought up to date with all immunizations in agreement with
                current immunization guidelines prior to initiating YUFLYMA
                therapy.
              </li>
              <li>
                {" "}
                No data are available on the secondary transmission of infection
                by live vaccines in patients receiving adalimumab products.
              </li>
              <li>
                {" "}
                The safety of administering live or live-attenuated vaccines in
                infants exposed to adalimumab in utero is unknown. Risks and
                benefits should be considered prior to vaccinating (live or
                live-attenuated) exposed infants.
              </li>
            </ul>
            <br />

            <p>
              <strong>ADVERSE REACTIONS </strong>
            </p>
            <ul>
              <li>
                The most common adverse reactions in adalimumab clinical trials
                (&gt;10%) were: infections (e.g., upper respiratory, sinusitis),
                injection site reactions, headache, and rash.{" "}
              </li>
            </ul>
            <br />

            <p>
              <strong>INDICATIONS </strong>
            </p>
            <p>
              <strong>
                YUFLYMA is a tumor necrosis factor (TNF) blocker indicated for:{" "}
              </strong>
            </p>
            <ul>
              <li>
                {" "}
                Rheumatoid Arthritis (RA): reducing signs and symptoms, inducing
                major clinical response, inhibiting the progression of
                structural damage, and improving physical function in adult
                patients with moderately to severely active RA
              </li>
              <li>
                {" "}
                Juvenile Idiopathic Arthritis (JIA): reducing signs and symptoms
                of moderately to severely active polyarticular JIA in patients 2
                years of age and older
              </li>
              <li>
                Psoriatic Arthritis (PsA): reducing signs and symptoms,
                inhibiting the progression of structural damage, and improving
                physical function in adult patients with active PsA
              </li>
              <li>
                Ankylosing Spondylitis (AS): reducing signs and symptoms in
                adult patients with active AS
              </li>
              <li>
                {" "}
                Crohn’s Disease (CD): treatment of moderately to severely active
                Crohn’s disease in adults and pediatric patients 6 years of age
                and older
              </li>
              <li>
                Ulcerative Colitis (UC): treatment of moderately to severely
                active ulcerative colitis in adults
              </li>
              <li>
                {" "}
                Limitations of Use: Effectiveness has not been established in
                patients who have lost response to or were intolerant to TNF
                blockers
              </li>
              <li>
                {" "}
                Plaque Psoriasis (Ps): treatment of adult patients with moderate
                to severe chronic plaque psoriasis who are candidates for
                systemic therapy or phototherapy, and when other systemic
                therapies are medically less appropriate
              </li>
              <li>
                {" "}
                Hidradenitis Suppurativa (HS): treatment of adult patients with
                moderate to severe hidradenitis suppurativa
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default YuflymaHCP;
