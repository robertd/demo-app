'use strict';

const knex = require('../db/knex');

module.exports = {
  createFavoritePlace: createFavoritePlace,
  deleteFavoritePlace: deleteFavoritePlace,
  showFavoritePlaces: showFavoritePlaces
};

function createFavoritePlace(favoritePlace) {
  return knex('favorite_places')
    .returning('*')
    .insert(favoritePlace)
    .debug(process.env['KNEX_DEBUG']);
}

function deleteFavoritePlace(id) {
  return knex('favorite_places')
    .where('id', id)
    .del()
    .debug(process.env['KNEX_DEBUG']);
}

function showFavoritePlaces(contactId) {
	return knex
		.select('*')
    .from('favorite_places')
    .where('contact_id', contactId)
    .orderBy('id', 'ASC')
    .debug(process.env['KNEX_DEBUG']);
}