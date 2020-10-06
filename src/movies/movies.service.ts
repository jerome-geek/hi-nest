import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private _movies: Movie[] = [];

    getAll(): Movie[] {
        return this._movies;
    }

    getOne(id: string): Movie {
        const movie = this._movies.find(movie => movie.id === +id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: string) {
        this.getOne(id);
        this._movies = this._movies.filter(movie => movie.id !== +id);
    }

    create(movieData) {
        this._movies.push({
            id: this._movies.length + 1,
            ...movieData,
        });
    }

    update(id: string, udpateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this._movies.push({ ...movie, ...udpateData });
    }
}
