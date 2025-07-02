import 'reflect-metadata';
import { Container } from 'inversify';
import TYPES from './inversify.types';
import { ImageService } from './services/ImageService';

const container = new Container();

container.bind<ImageService>(TYPES.ImageService).to(ImageService).inSingletonScope();

export default container;
