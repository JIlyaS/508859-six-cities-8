import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref
} from '@typegoose/typegoose';
import { City, ConvenienceType, Coordinate, OfferType } from '../types/index.js';
import { UserEntity } from './user.entity.js';

// import { UserEntity } from '../user/index.js';

// import { City, ConvenienceType, Coordinate, OfferType } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

  @modelOptions({
    schemaOptions: {
      collection: 'offers',
      timestamps: true,
    }
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
    @prop({ trim: true, required: true })
  public title!: string;

    @prop({ trim: true, required: true })
    public description!: string;

    // @prop()
    // public publicationDate!: Date;

    @prop({ type: () => String, enum: City, required: true })
    public city!: City;

    @prop({ required: true })
    public previewImg!: string;

    @prop({ type: () => [String], required: true })
    public images!: string[];

    @prop() // { required: true }
    public isPremium!: boolean;

    @prop() // { required: true }
    public rating!: number;

    @prop({
      type: () => String,
      enum: OfferType,
      required: true
    })
    public type!: OfferType;

    @prop({ required: true })
    public flatCount!: number;

    @prop({ required: true })
    public guestCount!: number;

    @prop({ required: true })
    public cost!: number;

    @prop({ type: [String], required: true })
    public conveniences!: ConvenienceType[];

    @prop({
      ref: () => UserEntity,
      required: true
    })
    public author!: Ref<UserEntity>; // userId

    @prop({default: 0})
    public commentCount!: number;

    @prop({ required: true })
    public coordinate!: Coordinate;
}

export const OfferModel = getModelForClass(OfferEntity);
