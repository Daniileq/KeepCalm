const welcometestScoreRouter = require('express').Router();
const {
  WelcomeTestScore,
  Condition,
  Recommendation,
  PersonalRecomendationStore,
} = require('../../db/models');

module.exports = welcometestScoreRouter
  .get('/', async (req, res) => {
    try {
      const { id } = req.session.user;
      const allConditions = await WelcomeTestScore.findAll({
        where: { userId: id },
      });
      if (allConditions) {
        res.json({ allConditions, status: true });
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .post('/', async (req, res) => {
    try {
      const { userId, score } = req.body;
      if (score <= 17) {
        await WelcomeTestScore.create({
          userId,
          conditionId: 1,
          testScore: score,
        });
        const condition = await Condition.findByPk(1);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 1 },
        });
        const writeRec = async (rec) => {
          const result = await PersonalRecomendationStore.create({
            userId,
            recommendationId: rec.id,
          });
          return result;
        };
        const newRec = recommendations.map(writeRec);
        res.json({ status: true });
      } else if (score > 17 && score <= 25) {
        await WelcomeTestScore.create({
          userId,
          conditionId: 2,
          testScore: score,
        });
        const condition = await Condition.findByPk(2);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 2 },
        });
        const writeRec = async (rec) => {
          const result = await PersonalRecomendationStore.create({
            userId,
            recommendationId: rec.id,
          });
          return result;
        };
        const newRec = recommendations.map(writeRec);
        res.json({ status: true });
      } else if (score > 15 && score <= 37) {
        await WelcomeTestScore.create({
          userId,
          conditionId: 3,
          testScore: score,
        });
        const condition = await Condition.findByPk(3);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 3 },
        });
        const writeRec = async (rec) => {
          const result = await PersonalRecomendationStore.create({
            userId,
            recommendationId: rec.id,
          });
          return result;
        };
        const newRec = recommendations.map(writeRec);
        res.json({ status: true });
      } else {
        await WelcomeTestScore.create({
          userId,
          conditionId: 4,
          testScore: score,
        });
        const condition = await Condition.findByPk(4);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 4 },
        });
        const writeRec = async (rec) => {
          const result = await PersonalRecomendationStore.create({
            userId,
            recommendationId: rec.id,
          });
          return result;
        };
        const newRec = recommendations.map(writeRec);
        res.json({ status: true });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
