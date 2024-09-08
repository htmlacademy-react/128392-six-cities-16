import {Helmet} from 'react-helmet-async';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';
import CityList from '../../components/city-list/city-list';
import {getSortedOffersCard} from '../../utils';
import {useAppSelector} from '../../hooks';
import {mainSelectors} from '../../store/slice/main.ts';
import {dataSelectors} from '../../store/slice/data.ts';

function MainScreen(): JSX.Element {
  const activeCity = useAppSelector(mainSelectors.activeCity);
  const sortType = useAppSelector(mainSelectors.sortType);
  const offersCard = useAppSelector(dataSelectors.offersCard);

  const filteredOffersCard = offersCard.filter(({city: {name}}) => name === activeCity);
  const sortedOffersCard = getSortedOffersCard(filteredOffersCard, sortType);

  return (
    <main className={`page__main page__main--index ${offersCard.length ? '' : 'page__main--index-empty'}`}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList/>
      </div>
      <div className="cities">
        {sortedOffersCard.length ? <Main offersCard={sortedOffersCard}/> : <MainEmpty/>}
      </div>
    </main>
  );
}

export default MainScreen;
