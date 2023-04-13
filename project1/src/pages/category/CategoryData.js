import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'

const CategoryData = (props) => {
    return (
        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Category Data</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New CategoryData</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Samsung
                                                    </td>
                                                    <td>Samsung</td>
                                                    <td>true</td>
                                                    <td>
                                                        <button type='button' className='badge badge-success'>Edit</button>
                                                        <button type='button' className='badge badge-danger ml-2'>Delete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Apple
                                                    </td>
                                                    <td>Apple</td>
                                                    <td>false</td>
                                                    <td>
                                                        <button type='button' className='badge badge-success'>Edit</button>
                                                        <button type='button' className='badge badge-danger ml-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
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

export default CategoryData