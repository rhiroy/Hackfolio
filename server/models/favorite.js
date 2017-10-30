const db = require('./db');

const Favorite = {};

Favorite.getAllByUserId = (userId) => {
  return db('favorites')
    .where({
      owner_id: userId
    })
    .select('*');
};

Favorite.addFavorite = (userId, bountyId) => {
  return db('favorites')
    .insert({
      bounty_id: bountyId,
      owner_id: userId
    })
    .then(() => {
      return db('favorites').where({ owner_id: userId }).select('*');
    })
    .catch(err => {
      console.error(err);
    });
};

Favorite.deleteFavorite = (favoriteId) => {
  return db('favorites')
    .where({
      id: favoriteId
    })
    .del()
    .catch(err => {
      console.error(err);
    });
};

module.exports = Favorite;
