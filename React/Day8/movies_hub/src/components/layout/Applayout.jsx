import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { LoadingState } from "./LoadingState";


export default function AppLayout() {
  const navigation = useNavigation();


  if (navigation.state === "loading") {
    return <LoadingState/>;
  }


  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow pt-16 pb-16 bg-gray-900 text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
