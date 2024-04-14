import { DataSource, DataSourceOptions } from 'typeorm';
export const dbdatasource: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'social_pictures_db',
  synchronize: false,
  entities: ['dist/modules/**/typeorm/entities/*{.ts,.js}'],
  migrations: ['dist/shared/typeorm/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(dbdatasource);
export default dataSource;
