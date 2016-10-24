'use strict';

const Promise = require('bluebird');
const favoritePlaceModel = require('../models/favorite_place');

module.exports = {
	create: createFavoritePlace,
	delete: deleteFavoritePlace,
	show: showFavoritePlaces
};

//POST /api/places
function createFavoritePlace(req, res, next) {
  let favoritePlace = req.body;

  favoritePlaceModel.createFavoritePlace(favoritePlace)
    .then((result) => {
      res.json({
        status: 'success',
        data: result
      })
    })
    .catch(next);
} 

//DELETE /api/places/:id
function deleteFavoritePlace(req, res, next) {
  let id = req.params.id;
  
  favoritePlaceModel.deleteFavoritePlace(id)
    .then((deleted) => {
      res.json({
        status: 'success',
        deleted: deleted
      })
    })
    .catch(next);
} 

//GET /api/places/:id
function showFavoritePlaces(req, res, next) {
  let contactId = req.params.contact_id;

  favoritePlaceModel.showFavoritePlaces(contactId)
    .then((results) => {
      res.json({
        status: 'success',
        data: results
      })
    })
    .catch(next);
}