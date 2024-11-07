import React, { Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

const Hero = lazy(() => import("./components/Hero"));
const Benefits = lazy(() => import("./components/Benefits"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Support = lazy(() => import("./components/Support"));
const Calendar = lazy(() => import("./components/Calendar"));
const Footer = lazy(() => import("./components/Footer"));
const TermsAndConditions = lazy(() =>
  import("./components/TyC/Termsandconditions")
);
const TerminosYCondiciones = lazy(() =>
  import("./components/TyC/Terminosycondiciones")
);

const App = () => {
  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const MetaDescription = () => {
    const { t } = useTranslation(); // Translation hook to get the correct meta description

    return (
      <Helmet>
        <meta name="description" content={t("meta.description")} />{" "}
      </Helmet>
    );
  };

  return (
    <div>
      <HelmetProvider>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {/* English Routes */}
                <Route
                  path="/en"
                  element={
                    <>
                      <Hero renderText={renderTextWithLineBreaks} />
                      <Benefits renderText={renderTextWithLineBreaks} />
                      <Process renderText={renderTextWithLineBreaks} />
                      <Testimonials renderText={renderTextWithLineBreaks} />
                      <Portfolio renderText={renderTextWithLineBreaks} />
                      <Support renderText={renderTextWithLineBreaks} />
                      <Calendar renderText={renderTextWithLineBreaks} />
                      <Footer renderText={renderTextWithLineBreaks} />
                    </>
                  }
                />

                {/* Spanish Routes - Render Hero and Benefits on the same page */}
                <Route
                  path="/es"
                  element={
                    <>
                      <Hero renderText={renderTextWithLineBreaks} />
                      <Benefits renderText={renderTextWithLineBreaks} />
                      <Process renderText={renderTextWithLineBreaks} />
                      <Testimonials renderText={renderTextWithLineBreaks} />
                      <Portfolio renderText={renderTextWithLineBreaks} />
                      <Support renderText={renderTextWithLineBreaks} />
                      <Calendar renderText={renderTextWithLineBreaks} />
                      <Footer renderText={renderTextWithLineBreaks} />
                    </>
                  }
                />

                <Route path="/" element={<Navigate to="/es" />} />
                <Route path="/termsandconditions" element={<TermsAndConditions />} />
                <Route path="/terminosycondiciones" element={<TerminosYCondiciones />} />
              </Routes>
            </Suspense>
          </Router>
        </I18nextProvider>
      </HelmetProvider>
      {/* <Hero /> */}
      {/* <Benefits /> */}
      {/* <Process /> */}
      {/* <Testimonials /> */}
      {/* <Portfolio /> */}
      {/* <Support /> */}
      {/* <Calendar /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
