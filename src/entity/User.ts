import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Service } from 'typedi';

@Service()
@ObjectType()
@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  email: string;

  @Field()
  @Column({ nullable: false })
  password: string;

  @Field()
  @Column({ nullable: false })
  firstName: string;

  @Field()
  @Column({ nullable: false })
  lastName: string;

  @Field()
  @Column({ default: false })
  confirmed: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
