import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class CompanyService {
    getCategory() {
        return http.get(APIURL.COMPANIES);
    }

    getCategoryById(id) {
        return http.get(APIURL.COMPANY_BY_ID, id);
    }

    saveCategory() {
        return http.post(APIURL.COMPANY_CREATE);
    }

    deleteCategory(id) {
        return http.delete(APIURL.COMPANY_DELETE, id);
    }

    deleteAllCategory() {
        return http.delete(APIURL.COMPANY_DELETE_ALL);
    }

    updateCategory(id, data) {
        return http.put(APIURL.COMPANY_UPDATE, data);
    }
}