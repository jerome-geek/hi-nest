import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// Decorator: Add Functionality to Class
@Module({
    imports: [MoviesModule],
    // Controller takes URL and maps them into function
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
