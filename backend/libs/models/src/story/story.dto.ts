import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SaveStoryDto {
  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsString()
  body: string;
}

export class UpdateStoryDto {
  @IsNumber()
  id: number;

  @IsString()
  author: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  body: string;
}
