import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { JwtContext } from "./shared/JwtContext/JwtContext";
import { useState } from "react";
import RegisterPage from "./pages/ResgisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import Rated from "./components/Rated/Rated";
import ScannerPage from "./pages/ScannerPage/ScannerPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotFound from "./pages/NotFound/NotFound";
import Logout from "./components/Logout/Logout";
import { DiaryListContext } from "./shared/DiaryListContext/DiaryListContext";
import DiaryList from "./components/DiaryList/DiaryList";
import SearchPage from "./pages/SearchPage/SearchPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";


function App() {
  const [Jwt, setJwt] = useState(sessionStorage.getItem("token") || null);
  const [diaryList, setDiaryList] = useState(sessionStorage.getItem("code") === "true");
  const [isLoading, setIsLoading] = useState(true);
  return (
    <DiaryListContext.Provider value={{ diaryList, setDiaryList }}>
      <JwtContext.Provider value={{ Jwt, setJwt }}>
        <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<OnboardingPage />} />

              {!Jwt && <Route path="/login" element={<LoginPage />} />}
              {!Jwt && <Route path="/register" element={<RegisterPage />} />}
              <Route
                path="/home"
                element={
                  <RequireAuth>
                    <HomePage
                      setIsLoading={setIsLoading}
                      isLoading={isLoading}
                    />                                      
                                         
                  </RequireAuth>
                }
              />
              <Route
                path="/rated"
                element={
                  <RequireAuth>
                    <Rated />
                  </RequireAuth>
                }
              />
              <Route
                path="/scanner"
                element={
                  <RequireAuth>
                    <ScannerPage
                      setIsLoading={setIsLoading}
                      isLoading={isLoading}
                    />
                  </RequireAuth>
                }
                              
                />
              <Route
                path="/search"
                element={
                  <RequireAuth>
                    <SearchPage
                      setIsLoading={setIsLoading}
                      isLoading={isLoading}
                    />
                  </RequireAuth>
                }
                              
                />

              <Route
                path="/logout"
                element={
                  <RequireAuth>
                    <Logout />
                  </RequireAuth>
                }
              />
              <Route
                path="/diary"
                element={
                  <RequireAuth>
                    <DiaryList />
                  </RequireAuth>
                }
              />
               <Route
                path="/favorites"
                element={
                  <RequireAuth>
                    <FavoritesPage
                      setIsLoading={setIsLoading}
                      isLoading={isLoading}
                    />
                  </RequireAuth>
                }
                              
                />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
          
     
        </div>
      </JwtContext.Provider>
    </DiaryListContext.Provider>
  );
}

export default App;
