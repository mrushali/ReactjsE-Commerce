export default class AllUrl {
    //CATEGORY VARIABLE
    static CATEGORIES = '/categories';
    static CATEGORY_CREATE = '/category';
    static CATEGORY_BY_ID = `/category/${id}`;
    static CATEGORY_DELETE = `/categorry/delete/${id}`;
    static CATEGORY_DELETE_ALL = '/category/deleteAll'
    static CATEGORY_UPDATE = `/category/update/${id}`

    //SUBCATEGORY VARIABLE
    static SUB_CATEGORIES = '/sub_categories';
    static SUB_CATEGORY_CREATE = '/sub_category';
    static SUB_CATEGORY_BY_ID = `/sub_category/${id}`;
    static SUB_CATEGORY_DELETE = `/sub_categorry/delete/${id}`;
    static SUB_CATEGORY_DELETE_ALL = '/sub_category/deleteAll'
    static SUB_CATEGORY_UPDATE = `/sub_category/update/${id}`

    //COMPANY VARIABLE
    static COMPANIES = '/companies';
    static COMPANY_CREATE = '/company';
    static COMPANY_BY_ID = `/company/${id}`;
    static COMPANY_DELETE = `/company/delete/${id}`;
    static COMPANY_DELETE_ALL = '/company/deleteAll'
    static COMPANY_UPDATE = `/company/update/${id}`
}