import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'

const SubCategory = (props) => {
    const [subCategory, setSubCategory] = useState({
        category_id: 0,
        name: '',
        image: '',
        active: false
    });

    const saveSubCategory = () => {
        console.log(JSON.stringify(subCategory));
    };

    return (
        <div className="wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Enter New SubCategory</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New SubCategory</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Category</label>
                                                <select className="custom-select form-control-border" id="category"
                                                    onChange={(e) => {
                                                        setSubCategory({
                                                            ...subCategory,
                                                            category_id: e.target.value
                                                        });
                                                    }}>
                                                    <option value={0}>Electronics</option>
                                                    <option value={1}>Machines</option>
                                                    <option value={2}>Home Appliances</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter SubCategory Name"
                                                    onChange={(e) => {
                                                        setSubCategory({
                                                            ...subCategory,
                                                            name: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="image"
                                                            onChange={(e) => {
                                                                setSubCategory({
                                                                    ...subCategory,
                                                                    image: e.target.value
                                                                });
                                                            }}
                                                        />
                                                        <label className="custom-file-label">Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="active"
                                                    onChange={(e) => {
                                                        setSubCategory({
                                                            ...subCategory,
                                                            active: e.target.checked
                                                        });
                                                    }}
                                                />
                                                <label className="form-check-label">Is Active ?</label>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                saveSubCategory();
                                            }}>Save SubCategory</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default SubCategory