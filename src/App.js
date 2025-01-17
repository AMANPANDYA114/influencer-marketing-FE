

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/About";
import Applicant from "./components/Brand/Applicant.jsx";
import BrandArrivalRequest from "./components/Brand/BrandArrivalRequest";
import BrandConsignments from "./components/Brand/BrandConsignments";
import BrandHistory from "./components/Brand/BrandHistory";
import BrandHome from "./components/Brand/BrandHome";
import BrandInfluencerGetDetail from "./components/Brand/Brandinfluncergetdetails.jsx";
import BrandIntro from "./components/Brand/BrandIntro";
import BrandLogin from "./components/Brand/BrandLogin";
import BrandPendingRequest from "./components/Brand/BrandPendingRequest";
import BrandProfile from "./components/Brand/BrandProfile.jsx";
import BrandProfileEdit from "./components/Brand/BrandProfileEdit.jsx";
import BrandSignUp from "./components/Brand/BrandSignUp";
import InfluencerCompare from "./components/Brand/InfluencerCompare";
import Influencerconsolidation from './components/Brand/Influencerconsolidation';
import InfluencerDetails from "./components/Brand/InfluencerDetails";
import BrandDetails from "./components/Influencer/BrandDetails";
import InfluencerArrivalRequest from "./components/Influencer/InfluencerArrivalRequest";
import InfluencerConsignments from "./components/Influencer/InfluencerConsignments";
import InfluencerHistory from "./components/Influencer/InfluencerHistory";
import InfluencerHome from "./components/Influencer/InfluencerHome";
import InfluencerIntro from "./components/Influencer/InfluencerIntro";
import InfluencerLogin from "./components/Influencer/InfluencerLogin";
import InfluencerPendingRequest from "./components/Influencer/InfluencerPendingRequest";
import InfluencerProfile from "./components/Influencer/InfluencerProfile";
import InfluencerProfileEdit from "./components/Influencer/InfluencerProfileEdit";
import InfluencerSignUp from "./components/Influencer/InfluencerSignUp";
import AddNewBrand from './components/manager/AddNewBrand';
import AddNewInfluencer from './components/manager/AddNewInfluencer';
import EditInfluencer from "./components/manager/Editinfluencer.jsx";
import ManagerHeader from './components/manager/ManagerHeader';
import ManagerHome from './components/manager/ManagerHome';
import ManagerLogin from './components/manager/ManagerLogin';
import ManagerProfile from './components/manager/ManagerProfile';
import ManagerSignUp from "./components/manager/ManagerSignUp";
import NewToSite from "./components/Newtosite";
import Home from "./Home";
// Import the CreateCampaign component
import CreateCampaign from "./components/Brand/CreateCampaign";
import MyRequest from "./components/Brand/myrequest.jsx";
import CsvUploader from "./components/manager/CsvUploader.jsx";
import PendingRequest from "./components/manager/pendingrequest.jsx";
import UpdateProfile from "./components/manager/updateprofile.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/updateagency" element={<UpdateProfile />} />
        <Route path="/request" element={<PendingRequest />} />
        <Route path="/myrequest" element={<MyRequest />} />
        <Route path="/applicant/:campaignId" element={<Applicant/>} />

        {/* <Route path="/applicant" element={< Applicant/>} /> */}
        <Route path="/upload" element={<CsvUploader/>} />
        <Route path="/edit" element={<EditInfluencer/>} />
        <Route path="/getdetails" element={<BrandInfluencerGetDetail/>} />
        <Route path="/BrandIntro" element={<BrandIntro />} />
        <Route path="/InfluencerIntro" element={<InfluencerIntro />} />
        <Route path="/BrandSignUp" element={<BrandSignUp />} />
        <Route path="/InfluencerSignUp" element={<InfluencerSignUp />} />
        <Route path="/ManagerSignUp" element={<ManagerSignUp />} />
        <Route path="/BrandLogin" element={<BrandLogin />} />
        <Route path="/InfluencerLogin" element={<InfluencerLogin />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NewToSite" element={<NewToSite />} />
        <Route path="/BrandHome" element={<BrandHome />} />
        <Route path="/BrandPendingRequest" element={<BrandPendingRequest />} />
        <Route path="/BrandArrivalRequest" element={<BrandArrivalRequest />} />
        <Route path="/BrandConsignments" element={<BrandConsignments />} />
        <Route path="/BrandDetails" element={<BrandDetails />} />
        <Route path="/BrandProfile" element={<BrandProfile />} />
        <Route path="/BrandProfileEdit" element={<BrandProfileEdit />} />
        <Route path="/BrandHistory" element={<BrandHistory />} />
        <Route path="/InfluencerDetails" element={<InfluencerDetails />} />
        <Route path="/InfluencerHome" element={<InfluencerHome />} />
        <Route path="/InfluencerArrivalRequest" element={<InfluencerArrivalRequest />} />
        <Route path="/InfluencerProfile" element={<InfluencerProfile />} />
        <Route path="/InfluencerProfileEdit" element={<InfluencerProfileEdit />} />
        <Route path="/InfluencerConsignments" element={<InfluencerConsignments />} />
        <Route path="/InfluencerHistory" element={<InfluencerHistory />} />
        <Route path="/InfluencerPendingRequest" element={<InfluencerPendingRequest />} />
        <Route path="/compare" element={<InfluencerCompare />} />
        <Route path="/consolidation" element={<Influencerconsolidation />} />
        <Route path="/ManagerHome" element={<ManagerHome />} />
        <Route path="/ManagerLogin" element={<ManagerLogin />} />
        <Route path="/ManagerHeader" element={<ManagerHeader />} />
        <Route path="/AddNewInfluencer" element={<AddNewInfluencer />} />
        <Route path="/AddNewBrand" element={<AddNewBrand />} />
        <Route path="/ManagerProfile" element={<ManagerProfile />} />

        {/* Add the route for the CreateCampaign component */}
        <Route path="/create" element={<CreateCampaign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
