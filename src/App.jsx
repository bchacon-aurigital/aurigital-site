import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Support from "./components/Support";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

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

              {/* Redirect root to English */}
              <Route path="/" element={<Navigate to="/en" />} />
            </Routes>
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
