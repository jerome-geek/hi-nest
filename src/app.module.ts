import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// Decorator: Add Functionality to Class
@Module({
    imports: [],
    // Controller takes URL and maps them into function
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class AppModule {}
