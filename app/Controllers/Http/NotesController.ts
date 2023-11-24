import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Note from 'App/Models/Note';

export default class NotesController {
  public async index({ response }: HttpContextContract) {
    try {
      const notes = await Note.all();
      return response.status(200).json(notes);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const createData = request.all();
      const notes = await Note.create(createData);

      return response.status(201).json(notes);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const note = await Note.findOrFail(params.id);
      return response.status(200).json(note);
    } catch (error) {
      console.error(error);
      return response.status(404).json({ error: 'Note not found' });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const note = await Note.findOrFail(params.id);
      const updateData = request.all();

      note.merge(updateData);
      await note.save();

      return response.status(200).json(note);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const note = await Note.findOrFail(params.id);
      await note.delete();

      return response.status(204);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
