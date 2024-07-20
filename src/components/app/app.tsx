import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {CardType, AppRoute, AuthorizationStatus} from '../../const';
import {PrivateRoute, PublicRoute} from '../access-route/access-route';
import Layout from '../layout/layout';

import MainScreen from '../../pages/main/main';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import OfferScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';

type AppProps = {
  offersCount: number;
  favoritesCount: number;
  cards: CardType[];
  authorizationStatus: AuthorizationStatus;
}

function App({offersCount, cards, favoritesCount, authorizationStatus}: AppProps): JSX.Element {
  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <Layout authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}/>,
      children: [
        {
          index: true,
          element: <MainScreen offersCount={offersCount} cards={cards}/>,
        },
        {
          path: AppRoute.Offer,
          element: <OfferScreen authorizationStatus={authorizationStatus}/>,
        },
        {
          path: AppRoute.Favorites,
          element: <PrivateRoute authorizationStatus={authorizationStatus}><FavoritesScreen favoritesCount={favoritesCount}/></PrivateRoute>,
        },
        {
          path: AppRoute.Login,
          element: <PublicRoute authorizationStatus={authorizationStatus}><LoginScreen/></PublicRoute>,
        },
        {
          path: AppRoute.NotFound,
          element: <NotFoundScreen/>,
        }
      ],
      errorElement: <ErrorScreen/>
    }
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;
