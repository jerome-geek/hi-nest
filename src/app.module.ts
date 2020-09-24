import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Decorator: Add Functionality to Class
@Module({
    imports: [],
    // Controller takes URL and maps them into function
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
