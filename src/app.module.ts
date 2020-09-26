import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// Decorator: Add Functionality to Class
@Module({
    imports: [],
    // Controller takes URL and maps them into function
    controllers: [MoviesController],
    providers: [],
})
export class AppModule {}
