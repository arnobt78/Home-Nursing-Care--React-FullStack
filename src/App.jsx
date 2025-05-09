// //with lazy suspense and error boundary features

// import React, { Suspense, useMemo } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Loading from "./components/Loading/Loading";
// import PageNotFound from "./components/PageNotFound";
// import SideHoverIcons from "./components/SideHoverIcons";

// // Lazy load components

// // HomePage components
// const Hero = React.lazy(() => import("./components/HomePage/Hero"));

// const Cards = React.lazy(() => import("./components/Cards/Cards"));

// const TestimonialSection1 = React.lazy(() =>
//   import("./components/TestimonialSection/TestimonialSection1")
// );

// const AccordionSection = React.lazy(() =>
//   import("./components/Accordion/AccordionSection")
// );
// const ApplicationForm = React.lazy(() =>
//   import("./components/ApplicationForm/ApplicationForm")
// );
// const CallbackRequest = React.lazy(() =>
//   import("./components/HomePage/CallbackRequest")
// );

// const WelcomeSection = React.lazy(() =>
//   import("./components/HomePage/WelcomeSection")
// );
// const MapSection = React.lazy(() => import("./components/HomePage/MapSection"));

// const StepsSection = React.lazy(() =>
//   import("./components/HomePage/StepsSection")
// );

// const HomeConsultationSection = React.lazy(() =>
//   import("./components/HomePage/HomeConsultationSection")
// );

// const ReviewSectionHome = React.lazy(() =>
//   import("./components/ReviewSection/ReviewSectionHome")
// );

// // Footer components
// const Imprint = React.lazy(() => import("./components/Imprint/Imprint"));

// const PrivacyPolicy = React.lazy(() =>
//   import("./components/PrivacyPolicy/PrivacyPolicy")
// );

// const GeneralTerms = React.lazy(() =>
//   import("./components/GeneralTerms/GeneralTerms")
// );

// // Contact components
// const Contact = React.lazy(() => import("./components/Contact/Contact"));

// // AboutUs components
// const AboutUsPage = React.lazy(() =>
//   import("./components/AboutUs/AboutUsPage")
// );

// // ServicePage components
// const ServicesPage = React.lazy(() =>
//   import("./components/ServicesPage/ServicesPage")
// );

// // WissenswertesPage components
// const WissenswertesPage = React.lazy(() =>
//   import("./components/WissenswertesPage/WissenswertesPage")
// );

// // KarrierePage components
// const KarrierePage = React.lazy(() =>
//   import("./components/Karriere/KarrierePage")
// );
// const BewerbenPage = React.lazy(() =>
//   import("./components/Karriere/BewerbenPage")
// );

// // AdminPage components

// import Admin from "./components/Admin/Admin";

// import PflegeRatgeber from "./components/WissenswertesPage/PflegeRatgeber";
// import RatgeberPage from "./components/WissenswertesPage/RatgeberPage";

// import PflegeBlog from "./components/WissenswertesPage/PflegeBlog";
// import BlogPage from "./components/WissenswertesPage/BlogPage";

// import PropTypes from "prop-types";

// const Home = () => {
//   return (
//     <Suspense fallback={<Loading />}>
//       <Hero />
//       <CallbackRequest />
//       <WelcomeSection />
//       <TestimonialSection1 />

//       <Cards />
//       <MapSection />
//       <ReviewSectionHome />
//       <StepsSection />
//       <HomeConsultationSection />
//       <AccordionSection />
//     </Suspense>
//   );
// };

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(_error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("ErrorBoundary caught an error", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong. Please try again later.</h1>;
//     }
//     return this.props.children;
//   }
// }

// // Add PropTypes validation
// ErrorBoundary.propTypes = {
//   children: PropTypes.node.isRequired, // Validate that 'children' is a React node and required
// };

// const App = () => {
//   const location = useLocation();

//   // Memoize the pathname to prevent unnecessary re-renders
//   const currentPath = useMemo(() => location.pathname, [location.pathname]);

//   return (
//     <ErrorBoundary>
//       <Navbar />
//       <SideHoverIcons />
//       <main>
//         <Suspense fallback={<Loading />}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/services/*" element={<ServicesPage />} />
//             <Route path="/about-us/*" element={<AboutUsPage />} />
//             <Route path="/wissenswertes/*" element={<WissenswertesPage />} />

//             <Route path="/pflege-ratgeber" element={<PflegeRatgeber />} />
//             <Route path="/pflege-ratgeber/:id" element={<RatgeberPage />} />
//             <Route path="/pflege-blog" element={<PflegeBlog />} />
//             <Route path="/pflege-blog/:id" element={<BlogPage />} />

//             <Route path="/imprint" element={<Imprint />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/general-terms" element={<GeneralTerms />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/application-form" element={<ApplicationForm />} />
//             <Route path="/karriere" element={<KarrierePage />} />
//             <Route path="/karriere/bewerben" element={<BewerbenPage />} />

//             <Route path="/admin" element={<Admin />} />

//             {/* Wildcard route for 404 Page */}
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </Suspense>
//       </main>
//       {currentPath !== "/imprint" &&
//         currentPath !== "/privacy-policy" &&
//         currentPath !== "/general-terms" && <Footer />}
//     </ErrorBoundary>
//   );
// };

// export default App;

// without lazy suspense and error boundary features
import React, { useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import PageNotFound from "./components/PageNotFound";
import SideHoverIcons from "./components/SideHoverIcons";

// HomePage components
import Hero from "./components/HomePage/Hero";
import Cards from "./components/Cards/Cards";
import TestimonialSection1 from "./components/TestimonialSection/TestimonialSection1";
import AccordionSection from "./components/Accordion/AccordionSection";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import CallbackRequest from "./components/HomePage/CallbackRequest";
import WelcomeSection from "./components/HomePage/WelcomeSection";
import MapSection from "./components/HomePage/MapSection";
import StepsSection from "./components/HomePage/StepsSection";
import HomeConsultationSection from "./components/HomePage/HomeConsultationSection";
import ReviewSectionHome from "./components/ReviewSection/ReviewSectionHome";

// Footer components
import Imprint from "./components/Imprint/Imprint";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import GeneralTerms from "./components/GeneralTerms/GeneralTerms";

// Contact components
import Contact from "./components/Contact/Contact";

// AboutUs components
import AboutUsPage from "./components/AboutUs/AboutUsPage";

// ServicePage components
import ServicesPage from "./components/ServicesPage/ServicesPage";

// WissenswertesPage components
import WissenswertesPage from "./components/WissenswertesPage/WissenswertesPage";

// KarrierePage components
import KarrierePage from "./components/Karriere/KarrierePage";
import BewerbenPage from "./components/Karriere/BewerbenPage";

// AdminPage components
import Admin from "./components/Admin/Admin";

// WissenswertesPage subcomponents
import PflegeRatgeber from "./components/WissenswertesPage/PflegeRatgeber";
import RatgeberPage from "./components/WissenswertesPage/RatgeberPage";
import PflegeBlog from "./components/WissenswertesPage/PflegeBlog";
import BlogPage from "./components/WissenswertesPage/BlogPage";

import PropTypes from "prop-types";

const Home = () => {
  return (
    <>
      <Hero />
      <CallbackRequest />
      <WelcomeSection />
      <TestimonialSection1 />
      <Cards />
      <MapSection />
      <ReviewSectionHome />
      <StepsSection />
      <HomeConsultationSection />
      <AccordionSection />
    </>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

// Add PropTypes validation
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Validate that 'children' is a React node and required
};

const App = () => {
  const location = useLocation();

  // Memoize the pathname to prevent unnecessary re-renders
  const currentPath = useMemo(() => location.pathname, [location.pathname]);

  return (
    <ErrorBoundary>
      <Navbar />
      <SideHoverIcons />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<ServicesPage />} />
          <Route path="/about-us/*" element={<AboutUsPage />} />
          <Route path="/wissenswertes/*" element={<WissenswertesPage />} />

          <Route path="/pflege-ratgeber" element={<PflegeRatgeber />} />
          <Route path="/pflege-ratgeber/:id" element={<RatgeberPage />} />
          <Route path="/pflege-blog" element={<PflegeBlog />} />
          <Route path="/pflege-blog/:id" element={<BlogPage />} />

          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/general-terms" element={<GeneralTerms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/karriere" element={<KarrierePage />} />
          <Route path="/karriere/bewerben" element={<BewerbenPage />} />

          <Route path="/admin" element={<Admin />} />

          {/* Wildcard route for 404 Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {currentPath !== "/imprint" &&
        currentPath !== "/privacy-policy" &&
        currentPath !== "/general-terms" && <Footer />}
    </ErrorBoundary>
  );
};

export default App;
