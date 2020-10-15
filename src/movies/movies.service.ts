import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private _movies: Movie[] = [];

    getAll(): Movie[] {
        return this._movies;
    }

    getOne(id: number): Movie {
        const movie = this._movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this._movies = this._movies.filter(movie => movie.id !== id);
    }

    create(movieData: CreateMovieDTO) {
        this._movies.push({
            id: this._movies.length + 1,
            ...movieData,
        });
    }

    update(id: number, udpateData: UpdateMovieDTO) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this._movies.push({ ...movie, ...udpateData });
    }
}
