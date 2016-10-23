'use strict';

const Knex = require('knex');
const knexConfig = require('../../config/knexfile');

const knex = Knex(knexConfig);

module.exports = {
  createFavoritePlace: createFavoritePlace,
  deleteFavoritePlace: deleteFavoritePlace,
  showFavoritePlaces: showFavoritePlaces
};

function createFavoritePlace(favoritePlace) {
  console.log(favoritePlace);
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
    .orderBy('created_at', 'ASC')
    .debug(process.env['KNEX_DEBUG']);
}