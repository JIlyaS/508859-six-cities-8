import { Expose, Type } from 'class-transformer';
import { City, ConvenienceType, Coordinate, OfferType } from '../../../types/index.js';
import { UserRdo } from '../../user/rdo/user.rdo.js';

export class FullOfferRdo {
  @Expose()
  public id!: string; // -? мы должны показывать идентификатор

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  // TODO: publicationDate - не принимать с фронтенда
  // TODO: мапить createdAt на поле publicationDate (переименовывать его в рамках rdo)
  @Expose({ name: 'createdAt' })
  public publicationDate!: string;
  
  @Expose()
  public city!: City;

  @Expose()
  public previewImg!: string;

  @Expose()
  public images!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: OfferType;

  @Expose()
  public flatCount!: number;

  @Expose()
  public guestCount!: number;

  @Expose()
  public cost!: number;

  @Expose()
  public conveniences!: ConvenienceType[];

  @Expose()
  public isFavorite!: boolean; // -? указываем при получении

  // TODO: данные вытаскивать из токена JWT
  @Expose()
  @Type(() => UserRdo)
  public author!: UserRdo;

  @Expose()
  public commentCount!: number;

  @Expose()
  public coordinate!: Coordinate;
}
