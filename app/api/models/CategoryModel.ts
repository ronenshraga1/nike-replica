import { Schema, model, models } from 'mongoose';
import { Category } from '@/typings';
const categorySchema = new Schema({
    name:String,
});
const CategoryModel = models.Category || model('categories',categorySchema);
export default CategoryModel;