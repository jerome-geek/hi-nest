import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete('/:id')
    delete(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Put('/:id')
    update(@Param('id') movieId: string) {
        return `This will update a movie with the id: ${movieId}`;
    }
}