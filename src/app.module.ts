import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from 'config/configuration';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: `mongodb+srv://${config.get('MONGODB_USER')}:${config.get('MONGODB_PASS')}@${config.get('MONGODB_HOST')}/${config.get('MONGODB_DB')}:${config.get('MONGODB_PORT')}?retryWrites=true&w=majority`,
        useNewUrlParser: true
      }),
    }),
    UsersModule
  ]
})
export class AppModule { }
