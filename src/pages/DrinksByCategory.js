import React, {useState ,useEffect } from 'react';
import { Skeleton } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../store/actions/drinksByCategory';
import { FlexCenter } from '../components/Flex';
import AntCard from '../components/AntCard';

const DrinksByCategory = () => {
  const drinks = useSelector((state) => state.DrinksByCategory.drinks);
  const [load, setLoad] = useState(true);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinks(query.get('drink'), () => setLoad(false)));
  }, []);

  return (
    <Skeleton active avatar paragraph={{ rows: 10 }} loading={load}>
      {drinks &&
        drinks.map((drink) => (
          <Link
            to={`/drink?name=${drink.idDrink}`}
            style={{ margin: 20 }}
            key={drink.idDrink}
          >
            <AntCard
              title={drink.strDrink}
              key={drink.idDrink}
              style={{ height: 300, width: 250 }}
            >
              <FlexCenter style={{ width: '100%', height: '100%' }}>
                <img
                  src={drink.strDrinkThumb}
                  alt="drinkImage"
                  style={{ width: 200, borderRadius: 15 }}
                />
              </FlexCenter>
            </AntCard>
          </Link>
        ))}
    </Skeleton>
  );
};

export default DrinksByCategory