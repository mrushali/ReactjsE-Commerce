import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class CategoryService {
    getCategory() {
        return http.get(APIURL.CATEGORIES);
    }

    getCategoryById(id) {
        return http.get(APIURL.CATEGORY_BY_ID, id);
    }

    saveCategory() {
        return http.post(APIURL.CATEGORY_CREATE);
    }

    deleteCategory(id) {
        return http.delete(APIURL.CATEGORY_DELETE, id);
    }

    deleteAllCategory() {
        return http.delete(APIURL.CATEGORY_DELETE_ALL);
    }

    updateCategory(id, data) {
        return http.put(APIURL.CATEGORY_UPDATE, data);
    }
}