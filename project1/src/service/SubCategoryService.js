import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class SubCategoryService {
    getCategory() {
        return http.get(APIURL.SUB_CATEGORIES);
    }

    getCategoryById(id) {
        return http.get(APIURL.SUB_CATEGORY_BY_ID, id);
    }

    saveCategory() {
        return http.post(APIURL.SUB_CATEGORY_CREATE);
    }

    deleteCategory(id) {
        return http.delete(APIURL.SUB_CATEGORY_DELETE, id);
    }

    deleteAllCategory() {
        return http.delete(APIURL.SUB_CATEGORY_DELETE_ALL);
    }

    updateCategory(id, data) {
        return http.put(APIURL.SUB_CATEGORY_UPDATE, data);
    }
}