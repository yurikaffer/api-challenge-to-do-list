import Route from '@ioc:Adonis/Core/Route'

Route.resource('notes', 'NotesController').apiOnly()
Route.resource('users', 'UsersController').apiOnly()