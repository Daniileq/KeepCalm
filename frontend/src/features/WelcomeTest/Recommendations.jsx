import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loadLastConditionAsync,
  loadLastRecommendationsAsync,
} from '../../store/welcomeTestSlice/welcomeTestSlice';
import style from './WelcomeTest.module.scss';

function Recommendations() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLastConditionAsync());
    dispatch(loadLastRecommendationsAsync());
  }, []);

  const { lastCondition } = useSelector((state) => state.welcomeTest);
  const { recommendations } = useSelector((state) => state.welcomeTest);
  return (
    <div className={style.main_container}>
      <div>
        {!lastCondition ? (
          <div className={style.container}>
            <h1 className={style.h1}>Чтобы узнать ваше состояние пройдите тест</h1>
            <button className={style.resBnt} type="button" onClick={() => navigate('/welcometest')}>
              Пройти тест
            </button>
            <button className={style.resBnt} type="button" onClick={() => navigate('/exercises')}>
              Перейти к упражнениям
            </button>
          </div>
        ) : (
          <div className={style.container}>
            <h1 className={style.h1}>Ваш последний результат</h1>
            <h2>{lastCondition.condition}</h2>
            {recommendations.map((recommendation) => (
              <div key={recommendation.id}>{recommendation.recommendation}</div>
            ))}
            <button className={style.resBnt} type="button" onClick={() => navigate('/exercises')}>
              Перейти к упражнениям
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendations;
