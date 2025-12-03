// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginContainer from "./containers/LoginContainer/LoginContainer";
// import SignUpContainer from "./containers/SignUpContainer/SignUpContainer";
// import ProfileSetupContainer from "./containers/ProfileSetupContainer/ProfileSetupContainer";
// import AppLandingContainer from "./containers/AppLandingContainer/AppLandingContainer";
// import DashboardContainer from "./containers/DashboardContainer/DashboardContainer";
// import LandingPage from "./containers/LandingPage/LandingPage";
// import QuizContainer from "./containers/QuizContainer/QuizContainer";
// import { client } from "./urlRoutes/client";
// import ProtectedRoute from "./components/ProtectedRoute";
// import ProtectedProfileQuizRoute from "./components/ProtectedProfileQuizRoute";
// import ProtectedAuthRoute from "./components/ProtectedAuthRoute";
// import StreakContainer from "./containers/StreakContainer";
// import AssessmentSetupContainer from "./containers/AssessmentSetupContainer"
// import AdminProtectedRoute from "./components/adminProtectedRoute/AdminProtectedRoute";
// import AdminDashboard from "./containers/AdminDashboard";
// import AdminLayout from "./containers/AdminLayout";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={client.HOME} element={<LandingPage />} />
//         <Route
//           path={client.LOGIN}
//           element={
//             <ProtectedAuthRoute>
//               <LoginContainer />
//             </ProtectedAuthRoute>
//           }
//         />
//         <Route
//           path={client.SIGNUP}
//           element={
//             <ProtectedAuthRoute>
//               <SignUpContainer />
//             </ProtectedAuthRoute>
//           }
//         />
//         <Route
//           path="app"
//           element={
//             <ProtectedRoute>
//               <AppLandingContainer />
//             </ProtectedRoute>
//           }
//         >
//           <Route
//             path={client.PROFILE_SETUP}
//             element={<ProfileSetupContainer />}
//             key="profileSetup"
//           />
//           <Route
//             path={client.DASHBOARD}
//             element={<DashboardContainer />}
//             key="profileSetup"
//           />
//           <Route
//             path={client.STREAK}
//             element={<StreakContainer />}
//             key="profileSetup"
//           />
//           <Route
//             path={client.SETTINGS}
//             element={<DashboardContainer />}
//             key="profileSettings"
//           />
//         </Route>
//         <Route
//           path={client.QUIZ}
//           element={
//             <ProtectedProfileQuizRoute>
//               <QuizContainer />
//             </ProtectedProfileQuizRoute>
//           }
//           key="quiz"
//         />
//         <Route
//           path="/assessment/setup"
//           element={
//             <ProtectedRoute>
//               <AssessmentSetupContainer />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/admin"
//           element={
//             <AdminProtectedRoute>
//               <AdminLayout />
//             </AdminProtectedRoute>
//           }
//         >
//           <Route path="dashboard" element={<AdminDashboard />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer/SignUpContainer";
import ProfileSetupContainer from "./containers/ProfileSetupContainer/ProfileSetupContainer";
import AppLandingContainer from "./containers/AppLandingContainer/AppLandingContainer";
import DashboardContainer from "./containers/DashboardContainer/DashboardContainer";
import LandingPage from "./containers/LandingPage/LandingPage";
import QuizContainer from "./containers/QuizContainer/QuizContainer";
import { client } from "./urlRoutes/client";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedProfileQuizRoute from "./components/ProtectedProfileQuizRoute";
import ProtectedAuthRoute from "./components/ProtectedAuthRoute";
import StreakContainer from "./containers/StreakContainer";
import AssessmentSetupContainer from "./containers/AssessmentSetupContainer";

// Admin imports
import AdminProtectedRoute from "./components/adminProtectedRoute/AdminProtectedRoute";
import AdminDashboard from "./containers/AdminDashboard";
import AdminLayout from "./containers/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path={client.HOME} element={<LandingPage />} />
        <Route
          path={client.LOGIN}
          element={
            <ProtectedAuthRoute>
              <LoginContainer />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path={client.SIGNUP}
          element={
            <ProtectedAuthRoute>
              <SignUpContainer />
            </ProtectedAuthRoute>
          }
        />

        {/* User App Routes */}
        <Route
          path="app"
          element={
            <ProtectedRoute>
              <AppLandingContainer />
            </ProtectedRoute>
          }
        >
          <Route
            path={client.PROFILE_SETUP}
            element={<ProfileSetupContainer />}
          />
          <Route
            path={client.DASHBOARD}
            element={<DashboardContainer />}
          />
          <Route path={client.STREAK} element={<StreakContainer />} />
          <Route path={client.SETTINGS} element={<DashboardContainer />} />
        </Route>

        {/* Quiz */}
        <Route
          path={client.QUIZ}
          element={
            <ProtectedProfileQuizRoute>
              <QuizContainer />
            </ProtectedProfileQuizRoute>
          }
        />

        {/* ❌ REMOVE OLD ROUTE: /assessment/setup */}

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route
            path="assessment"
            element={<AssessmentSetupContainer />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
