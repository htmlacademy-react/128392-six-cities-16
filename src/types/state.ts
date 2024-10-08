import {AllCityList, AuthorizationStatus, SortTypes} from '../const';
import {OffersCardType, OfferType} from './offer';
import {ReviewsType} from './review';
import {store} from '../store';
import {UserAuthType} from './user';

// Можно и так:
// export type StateType = ReturnType<typeof store.getState>;

export type StateType = {
  activeCity: typeof AllCityList[number];
  sortType: typeof SortTypes[keyof typeof SortTypes];
  authorizationStatus: AuthorizationStatus;
  offersCard: OffersCardType;
  offer: null | OfferType;
  nearOffersCard: OffersCardType;
  reviews: ReviewsType;
  user: null | UserAuthType;
};

export type AppDispatch = typeof store.dispatch;
